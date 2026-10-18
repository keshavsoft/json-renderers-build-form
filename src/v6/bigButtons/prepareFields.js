const prepareFields = (columns, records, selection) => {
    const normalizedColumns = columns.map(column => {
        const requestedCell = column.template?.body?.cell ?? (column.required ? "buildRequiredField" : "buildBodyCell");
        let cell = selection.body.fieldTemplates?.[requestedCell] ?? requestedCell;
        if (column.buttonText) cell = selection.body.buttonFieldTemplates?.[cell] ?? cell;

        return {
            ...column,
            label: column.label ?? column.title ?? column.columnName,
            type: column.type ?? "text",
            placeholder: column.placeholder ?? "",
            buttonType: column.buttonType ?? "button",
            template: {
                ...column.template,
                body: { ...column.template?.body, cell }
            }
        };
    });

    const sourceRecord = records[0] ?? {};
    const row = Object.fromEntries(normalizedColumns.map(column => [
        column.columnName,
        sourceRecord[column.columnName] ?? column.value ?? ""
    ]));

    return { columns: normalizedColumns, rows: [row] };
};

export default prepareFields;
