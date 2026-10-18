import classes from "./classes.json" with { type: "json" };

const applyFooterClasses = (options, frameworkName) => {
    const framework = classes[frameworkName];
    const recipe = framework?.footers[options.footer];
    if (!framework) throw new RangeError("Unknown bigButtons framework: " + frameworkName);
    if (!recipe) throw new RangeError("Unknown bigButtons footer: " + options.footer);
    return { ...framework.base, ...recipe };
};

export default applyFooterClasses;
