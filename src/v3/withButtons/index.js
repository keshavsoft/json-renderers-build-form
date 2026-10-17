import spec from "./spec.json" with { type: "json" };
import stacked from "../stacked/index.js";

const withButtons = ({ inColumns = [], inData = [], inOptions = {}, columns, data, options } = {}) => {
    const localColumns = Array.isArray(inColumns) && inColumns.length > 0 ? inColumns : (Array.isArray(columns) ? columns : []);
    const localData = Array.isArray(inData) && inData.length > 0 ? inData : (Array.isArray(data) ? data : []);
    const localOptions = inOptions && Object.keys(inOptions).length > 0 ? inOptions : (options ?? {});

    const form = stacked({
        inColumns: localColumns,
        inData: localData,
        inOptions: { ...localOptions, submitButton: false, showSubmit: false }
    });

    const buttonBar = structuredClone(spec.buttonBar);
    if (localOptions.submitLabel) buttonBar.children[0].textContent = localOptions.submitLabel;
    if (localOptions.cancelLabel) buttonBar.children[1].textContent = localOptions.cancelLabel;

    form.children.push(buttonBar);
    return form;
};


export { spec, withButtons };
export default withButtons;
