import spec from "./spec.json" with { type: "json" };

const renderStackedField = ({ inColumn, inRow = {}, inIndex = 0 } = {}) => {
    const localColumn = inColumn;
    const localRow = inRow;
    const localIndex = inIndex;

    const name = localColumn?.columnName ?? `field_${localIndex}`;
    const type = localColumn?.type ?? "text";
    const labelText = localColumn?.label ?? localColumn?.title ?? name;
    const id = localColumn?.id ?? `form-${localIndex}-${name.toLowerCase()}`;
    const value = localRow[name] ?? localColumn?.value;

    const wrapper = structuredClone(spec.fieldWrapper);
    const label = structuredClone(spec.label);
    label.textContent = labelText;
    label.attributes.for = id;

    if (type === "checkbox") {
        wrapper.attributes.class = "form-check mb-3";
        const input = structuredClone(spec.input);
        input.attributes.type = "checkbox";
        input.attributes.class = "form-check-input";
        input.attributes.id = id;
        input.attributes.name = name;
        input.attributes.value = "true";
        if (localColumn?.required) input.attributes.required = true;
        input.properties = { checked: Boolean(value ?? localColumn?.checked ?? false) };
        label.attributes.class = "form-check-label";
        wrapper.children = [input, label];
        return wrapper;
    }

    if (type === "textarea") {
        const textarea = {
            tagName: "textarea",
            textContent: value ? String(value) : "",
            attributes: {
                class: localColumn?.class ?? "form-control",
                rows: String(localColumn?.rows ?? 3),
                id,
                name,
                placeholder: localColumn?.placeholder ?? "",
                ...(localColumn?.required ? { required: true } : {})
            }
        };
        wrapper.children = [label, textarea];
        return wrapper;
    }

    if (type === "select") {
        const select = {
            tagName: "select",
            attributes: {
                class: localColumn?.class ?? "form-select",
                id,
                name,
                ...(localColumn?.required ? { required: true } : {})
            },
            children: (localColumn?.options ?? []).map(opt => {
                const optVal = typeof opt === "object" ? String(opt.value) : String(opt);
                const optLabel = typeof opt === "object" ? (opt.label ?? opt.value) : String(opt);
                const isSelected = value != null && String(value) === optVal;
                return {
                    tagName: "option",
                    textContent: optLabel,
                    attributes: {
                        value: optVal,
                        ...(isSelected ? { selected: true } : {})
                    }
                };
            })
        };
        wrapper.children = [label, select];
        return wrapper;
    }

    const input = structuredClone(spec.input);
    input.attributes.type = type;
    input.attributes.id = id;
    input.attributes.name = name;
    if (localColumn?.required) input.attributes.required = true;
    if (localColumn?.placeholder) input.attributes.placeholder = localColumn.placeholder;
    if (localColumn?.class) input.attributes.class = localColumn.class;
    if (value != null) input.attributes.value = String(value);

    if (localColumn?.buttonText || localColumn?.button) {
        const btn = {
            tagName: "button",
            textContent: localColumn.buttonText ?? localColumn.button?.text ?? "Action",
            attributes: {
                type: "button",
                class: localColumn.buttonClass ?? localColumn.button?.class ?? "btn btn-success",
                id: localColumn.buttonId ?? `${id}-btn`
            }
        };
        wrapper.children = [label, input, btn];
        return wrapper;
    }

    wrapper.children = [label, input];
    return wrapper;
};

const stacked = ({ inColumns = [], inData = [], inOptions = {}, columns, data, options } = {}) => {
    const localColumns = Array.isArray(inColumns) && inColumns.length > 0 ? inColumns : (Array.isArray(columns) ? columns : []);
    const localData = Array.isArray(inData) && inData.length > 0 ? inData : (Array.isArray(data) ? data : []);
    const localOptions = inOptions && Object.keys(inOptions).length > 0 ? inOptions : (options ?? {});

    const firstRow = localData[0] ?? {};
    const form = structuredClone(spec.form);

    if (localOptions?.formId) form.attributes.id = localOptions.formId;
    if (localOptions?.className) form.attributes.class = localOptions.className;

    form.children = localColumns.map((col, idx) =>
        renderStackedField({ inColumn: col, inRow: firstRow, inIndex: idx })
    );

    if (localOptions?.showSubmit !== false && localOptions?.submitButton !== false) {
        const submitBtn = structuredClone(spec.submitButton);
        if (localOptions?.submitLabel) submitBtn.textContent = localOptions.submitLabel;
        if (localOptions?.submitClass) submitBtn.attributes.class = localOptions.submitClass;
        form.children.push(submitBtn);
    }

    return form;
};

export { spec, stacked, renderStackedField };
export default stacked;
