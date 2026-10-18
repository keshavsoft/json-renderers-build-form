import classes from "./classes.json" with { type: "json" };

const applyBodyClasses = (options, frameworkName) => {
    const framework = classes.frameworks[frameworkName];
    if (!framework) throw new RangeError("Unknown bigButtons framework: " + frameworkName);

    const recipe = framework.bodies[options.body];
    if (!recipe) throw new RangeError("Unknown bigButtons body: " + options.body);
    return { ...framework.base, ...recipe };
};

export { classes };
export default applyBodyClasses;
