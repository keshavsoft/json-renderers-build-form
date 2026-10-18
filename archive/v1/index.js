import registerGlobal from "./register/index.js";
import guardFunc from "./guard/index.js";
import renderForm, { renderField } from "./form/index.js";

const render = ({
    columns = [],
    data = [],
    options = {},
    inColumns,
    inData,
    inOptions,
    showLog = false
} = {}) => {
    const localColumns = inColumns ?? columns;
    const localData = inData ?? data;
    const localOptions = inOptions ?? options;
    const localShowLog = showLog;

    guardFunc({
        inConfig: {
            columns: localColumns,
            data: localData,
            options: localOptions
        }
    });

    const formSpec = renderForm({
        inColumns: localColumns,
        inData: localData,
        inOptions: localOptions
    });

    if (localShowLog) {
        console.log("json-renderers-build-form output:", formSpec);
    }

    return formSpec;
};

registerGlobal({
    render,
    renderForm,
    renderField
});

export {
    render,
    renderForm,
    renderField
};

export default render;
