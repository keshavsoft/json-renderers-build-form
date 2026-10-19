import spec from "./spec.json" with { type: "json" };

const applyBodyClasses = (options, frameworkName) => {
    const framework = spec.frameworks[frameworkName];
    if (!framework) throw new RangeError("Unknown bigButtons framework: " + frameworkName);

    const recipe = framework.bodies[options.body];
    if (!recipe) throw new RangeError("Unknown bigButtons body: " + options.body);
    return { ...framework.base, ...recipe };
};

export { spec };
export default applyBodyClasses;
