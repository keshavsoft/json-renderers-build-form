import buildHeader from "./buildHeader/index.js";
import buildBody from "./buildBody/index.js";
import buildFooter from "./buildFooter/index.js";
import { resolveArgs } from "./resolveArgs.js";
import resolveOptions from "./resolveOptions.js";

const runInstructions = (baseJson, args = {}) => {
    const data = resolveArgs(args);
    const selection = resolveOptions(data.options);
    const withHeader = buildHeader(baseJson, selection);
    const withBody = buildBody(withHeader, data, selection);
    return buildFooter(withBody, selection);
};

export { runInstructions };
export default runInstructions;
