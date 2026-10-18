import spec from "../spec.json" with { type: "json" };
import { inputWithLabel, inputWithLabelButton } from "json-renderers-build-input-row";

const INPUT_FIELD_TYPES = new Set([
    "text", "email", "number", "tel", "url", "password", "search",
    "date", "datetime-local", "time", "month", "week", "color"
]);

const slugify = (inValue) => {
    const localValue = inValue;
    return String(localValue ?? "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "") || "field";
};

const renderOption = ({ inOption, inSelectedValue } = {}) => {
    const localOption = inOption;
    const localSelectedValue = inSelectedValue;

    const value = localOption && typeof localOption === "object" ? localOption.value : localOption;
    const label = localOption && typeof localOption === "object" ? (localOption.label ?? value) : localOption;
    const isSelected = localSelectedValue != null && String(value) === String(localSelectedValue);

    return {
        tagName: "option",
        textContent: String(label ?? ""),
        attributes: {
            value: String(value ?? ""),
            ...(isSelected ? { selected: true } : {})
        }
    };
};

const renderField = ({ inColumn, inRow = {}, inIndex = 0, inFormLayout = "vertical" } = {}) => {
    const localColumn = inColumn;
    const localRow = inRow;
    const localIndex = inIndex;
    const localFormLayout = inFormLayout;

    const name = localColumn?.columnName ?? `field_${localIndex}`;
    const type = localColumn?.type ?? "text";
    const labelText = localColumn?.label ?? localColumn?.title ?? name;
    const id = localColumn?.id ?? `form-${localIndex}-${slugify(name)}`;
    const value = localRow[name] ?? localColumn?.value;

    const commonAttributes = {
        id,
        name,
        ...(localColumn?.placeholder ? { placeholder: localColumn.placeholder } : {}),
        ...(localColumn?.required ? { required: true } : {}),
        ...(localColumn?.disabled ? { disabled: true } : {}),
        ...(localColumn?.readOnly ? { readonly: true } : {})
    };

    // 1. Checkbox field
    if (type === "checkbox") {
        const checkboxRow = structuredClone(spec.checkboxRow);
        const inputElem = checkboxRow.children[0];
        const labelElem = checkboxRow.children[1];

        Object.assign(inputElem.attributes, commonAttributes, {
            type: "checkbox",
            value: localColumn?.value ?? "true"
        });
        inputElem.properties = { checked: Boolean(value ?? localColumn?.checked ?? false) };

        labelElem.textContent = labelText;
        labelElem.attributes.for = id;

        return checkboxRow;
    }

    // 2. Textarea field
    if (type === "textarea") {
        const textareaRow = structuredClone(spec.textareaRow);
        const labelElem = textareaRow.children[0];
        const textareaElem = textareaRow.children[1];

        labelElem.textContent = labelText;
        labelElem.attributes.for = id;

        Object.assign(textareaElem.attributes, commonAttributes, {
            rows: String(localColumn?.rows ?? 3)
        });
        if (value != null) {
            textareaElem.textContent = String(value);
        }

        return textareaRow;
    }

    // 3. Select field
    if (type === "select") {
        const selectRow = structuredClone(spec.selectRow);
        const labelElem = selectRow.children[0];
        const selectElem = selectRow.children[1];

        labelElem.textContent = labelText;
        labelElem.attributes.for = id;

        Object.assign(selectElem.attributes, commonAttributes);

        selectElem.children = (localColumn?.options ?? []).map(option =>
            renderOption({ inOption: option, inSelectedValue: value })
        );

        return selectRow;
    }

    // 4. Standard Input Fields: Delegate directly to json-renderers-build-input-row!
    const inputType = INPUT_FIELD_TYPES.has(type) ? type : "text";

    const inputRowOptions = {
        label: labelText,
        type: inputType,
        id,
        name,
        placeholder: localColumn?.placeholder ?? "",
        class: localColumn?.class ?? "form-control",
        value: value != null ? String(value) : undefined,
        wrapperClass: localFormLayout === "inline"
            ? "d-flex align-items-center gap-2 mb-3"
            : "mb-3",
        labelClass: localFormLayout === "inline"
            ? "form-label mb-0 text-nowrap fw-semibold"
            : "form-label fw-semibold"
    };

    // If the column specifies a button (e.g. search, verify, apply), use inputWithLabelButton!
    if (localColumn?.buttonText || localColumn?.button) {
        return inputWithLabelButton({
            inOptions: {
                ...inputRowOptions,
                buttonText: localColumn.buttonText ?? localColumn.button?.text ?? "Action",
                buttonClass: localColumn.buttonClass ?? localColumn.button?.class ?? "btn btn-outline-primary",
                buttonId: localColumn.buttonId ?? localColumn.button?.id ?? `${id}-btn`
            }
        });
    }

    // Otherwise use inputWithLabel from json-renderers-build-input-row
    return inputWithLabel({ inOptions: inputRowOptions });
};

const renderForm = ({ inColumns = [], inData = [], inOptions = {}, columns, data, options } = {}) => {
    const localColumns = Array.isArray(inColumns) && inColumns.length > 0 ? inColumns : (Array.isArray(columns) ? columns : []);
    const localData = Array.isArray(inData) && inData.length > 0 ? inData : (Array.isArray(data) ? data : []);
    const localOptions = inOptions && Object.keys(inOptions).length > 0 ? inOptions : (options ?? {});

    const firstRow = localData[0] ?? {};
    const formLayout = localOptions?.layout ?? "vertical";

    const formSpec = structuredClone(spec.form);

    if (localOptions?.formId) {
        formSpec.attributes.id = localOptions.formId;
    }
    if (localOptions?.className) {
        formSpec.attributes.class = localOptions.className;
    }
    if (localOptions?.ariaLabel) {
        formSpec.attributes["aria-label"] = localOptions.ariaLabel;
    }

    formSpec.children = localColumns.map((col, idx) =>
        renderField({
            inColumn: col,
            inRow: firstRow,
            inIndex: idx,
            inFormLayout: formLayout
        })
    );

    if (localOptions?.showSubmit !== false) {
        const submitBtn = structuredClone(spec.submitButton);
        submitBtn.textContent = localOptions?.submitLabel ?? "Save";
        if (localOptions?.submitClass) {
            submitBtn.attributes.class = localOptions.submitClass;
        }
        if (localOptions?.submitId) {
            submitBtn.attributes.id = localOptions.submitId;
        }
        formSpec.children.push(submitBtn);
    }

    return formSpec;
};

export { renderForm, renderField };
export default renderForm;
