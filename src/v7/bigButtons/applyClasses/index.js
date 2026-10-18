import { applyTemplate } from "json-transformer-funcs";
import classes from "./classes.json" with { type: "json" };
import defaults from "../runInstructions/defaults.json" with { type: "json" };
import { resolveArgs } from "../runInstructions/resolveArgs.js";

const applyClasses = (document, args = {}) => {
    const scopes = resolveArgs(args).options;
    const options = { ...defaults, ...(scopes["form.bigButtons"] ?? {}) };
    const frameworkName = options.framework ?? classes.defaultFramework;
    const framework = classes.frameworks[frameworkName];
    if (!framework) throw new RangeError("Unknown bigButtons framework: " + frameworkName);

    const templateValues = Object.assign(
        {},
        options,
        framework.base,
        framework.headers[options.header],
        framework.bodies[options.body],
        framework.footers[options.footer]
    );

    return applyTemplate(templateValues, structuredClone(document));
};

export { classes, applyClasses };
export default applyClasses;
