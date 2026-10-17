import registerGlobal from "./register/index.js";
import stacked, { renderStackedField } from "./stacked/index.js";
import inline, { renderInlineField } from "./inline/index.js";
import withButtons from "./withButtons/index.js";

const FORM_MAP = {
    stacked,
    vertical: stacked,
    inline,
    horizontal: inline,
    withButtons,
    buttons: withButtons
};

const render = ({
    type = "stacked",
    columns = [],
    data = [],
    options = {},
    inType,
    inColumns,
    inData,
    inOptions
} = {}) => {
    const localType = inType ?? type;
    const localColumns = inColumns ?? columns;
    const localData = inData ?? data;
    const localOptions = inOptions ?? options;

    const builder = FORM_MAP[localType] || stacked;
    return builder({
        inColumns: localColumns,
        inData: localData,
        inOptions: localOptions
    });
};

const renderForm = stacked;
const renderField = renderStackedField;

registerGlobal({
    render,
    stacked,
    inline,
    withButtons,
    renderForm,
    renderField
});

export {
    render,
    stacked,
    inline,
    withButtons,
    renderForm,
    renderField,
    renderStackedField,
    renderInlineField
};

export default render;
