import { applyTemplate } from "json-transformer-funcs";
import { resolveArgs } from "../runInstructions/resolveArgs.js";
import resolveOptions from "../runInstructions/resolveOptions.js";
import applyHeaderClasses from "./header/index.js";
import applyBodyClasses, { classes as bodyClasses } from "./body/index.js";
import applyFooterClasses from "./footer/index.js";

const applyClasses = (document, args = {}) => {
    const selection = resolveOptions(resolveArgs(args).options);
    const { options } = selection;
    const frameworkName = options.framework ?? bodyClasses.defaultFramework;
    const framework = bodyClasses.frameworks[frameworkName];
    if (!framework) throw new RangeError("Unknown bigButtons framework: " + frameworkName);

    const classValues = Object.assign(
        {},
        options,
        applyBodyClasses(options, frameworkName),
        applyHeaderClasses(options, frameworkName),
        applyFooterClasses(options, frameworkName)
    );

    return applyTemplate(classValues, structuredClone(document));
};

export default applyClasses;
