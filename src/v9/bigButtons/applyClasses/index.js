import { applyTemplate, findByRole } from "json-transformer-funcs";
import { resolveArgs } from "../runInstructions/resolveArgs.js";
import resolveOptions from "../runInstructions/resolveOptions.js";
import applyHeaderClasses from "./header/index.js";
import applyBodyClasses, { spec as bodySpec } from "./body/index.js";
import applyFooterClasses from "./footer/index.js";

const applyClassesToRole = (document, role, values) => {
    const target = findByRole(document, role);
    if (!target) throw new RangeError("Missing bigButtons class target: " + role);

    Object.assign(target, applyTemplate(values, target));
};

const applyClasses = (document, args = {}) => {
    const selection = resolveOptions(resolveArgs(args).options);
    const { options } = selection;
    const frameworkName = options.framework ?? bodySpec.defaultFramework;
    const framework = bodySpec.frameworks[frameworkName];
    if (!framework) throw new RangeError("Unknown bigButtons framework: " + frameworkName);

    const result = structuredClone(document);
    const { cardClass, ...bodyClassValues } = applyBodyClasses(options, frameworkName);

    applyClassesToRole(result, "form-card", { cardClass });
    applyClassesToRole(result, "form-content", bodyClassValues);
    applyClassesToRole(result, "form-header", applyHeaderClasses(options, frameworkName));
    applyClassesToRole(result, "form-footer", applyFooterClasses(options, frameworkName));

    return applyTemplate(options, result);
};

export default applyClasses;
