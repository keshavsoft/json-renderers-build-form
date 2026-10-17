import { guardSpec } from "json-renderers-guard";
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

const render = (options = {}) => {
    options.type ??= "stacked";
    guardSpec(options);

    const builder = FORM_MAP[options.type] || stacked;

    return builder({
        inColumns: options.columns,
        inData: options.data,
        inOptions: options.options
    });
};

registerGlobal(render);

export { render };

export default render;