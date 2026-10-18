import { guardSpec } from "json-renderers-guard";
import registerGlobal from "./registerGlobal.js";
import bigButtons from "./bigButtons/index.js";

const render = (options = {}) => {
    const request = { ...options, type: options.type ?? "form.bigButtons" };
    guardSpec(request);
    return bigButtons(request);
};

registerGlobal(render);

export { render, render as renderForm };
export { default as bigButtons } from "./bigButtons/index.js";
export default render;
