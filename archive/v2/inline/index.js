import spec from "./spec.json" with { type: "json" };
import { inputWithLabel, inputWithLabelButton } from "json-renderers-build-input-row";

const renderInlineField = ({ inColumn, inRow = {}, inIndex = 0 } = {}) => {
    const localColumn = inColumn;
    const localRow = inRow;
    const localIndex = inIndex;

    const name = localColumn?.columnName ?? `field_${localIndex}`;
    const type = localColumn?.type ?? "text";
    const labelText = localColumn?.label ?? localColumn?.title ?? name;
    const id = localColumn?.id ?? `form-${localIndex}-${name.toLowerCase()}`;
    const value = localRow[name] ?? localColumn?.value;

    if (localColumn?.buttonText || localColumn?.button) {
        return inputWithLabelButton({
            inOptions: {
                label: labelText,
                type,
                id,
                name,
                placeholder: localColumn?.placeholder ?? "",
                class: localColumn?.class ?? "form-control",
                value: value != null ? String(value) : undefined,
                buttonText: localColumn.buttonText ?? localColumn.button?.text ?? "Action",
                buttonClass: localColumn.buttonClass ?? localColumn.button?.class ?? "btn btn-outline-primary",
                buttonId: localColumn.buttonId ?? `${id}-btn`,
                wrapperClass: "d-flex align-items-center gap-2 mb-3",
                labelClass: "form-label mb-0 text-nowrap fw-semibold"
            }
        });
    }

    return inputWithLabel({
        inOptions: {
            label: labelText,
            type,
            id,
            name,
            placeholder: localColumn?.placeholder ?? "",
            class: localColumn?.class ?? "form-control",
            value: value != null ? String(value) : undefined,
            wrapperClass: "d-flex align-items-center gap-2 mb-3",
            labelClass: "form-label mb-0 text-nowrap fw-semibold"
        }
    });
};

const inline = ({ inColumns = [], inData = [], inOptions = {}, columns, data, options } = {}) => {
    const localColumns = Array.isArray(inColumns) && inColumns.length > 0 ? inColumns : (Array.isArray(columns) ? columns : []);
    const localData = Array.isArray(inData) && inData.length > 0 ? inData : (Array.isArray(data) ? data : []);
    const localOptions = inOptions && Object.keys(inOptions).length > 0 ? inOptions : (options ?? {});

    const firstRow = localData[0] ?? {};
    const form = structuredClone(spec.form);

    if (localOptions?.formId) form.attributes.id = localOptions.formId;
    if (localOptions?.className) form.attributes.class = localOptions.className;

    form.children = localColumns.map((col, idx) =>
        renderInlineField({ inColumn: col, inRow: firstRow, inIndex: idx })
    );

    if (localOptions?.showSubmit !== false && localOptions?.submitButton !== false) {
        const submitBtn = structuredClone(spec.submitButton);
        if (localOptions?.submitLabel) submitBtn.textContent = localOptions.submitLabel;
        if (localOptions?.submitClass) submitBtn.attributes.class = localOptions.submitClass;
        form.children.push(submitBtn);
    }

    return form;
};

export { spec, inline, renderInlineField };
export default inline;
