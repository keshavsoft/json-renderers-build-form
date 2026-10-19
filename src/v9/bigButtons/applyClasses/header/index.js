import spec from "./spec.json" with { type: "json" };

const applyHeaderClasses = (options, frameworkName) => {
    const framework = spec.frameworks[frameworkName];
    if (!framework) throw new RangeError("Unknown bigButtons framework: " + frameworkName);

    const recipe = framework.headers[options.header];
    if (!recipe) throw new RangeError("Unknown bigButtons header: " + options.header);
    return recipe;
};

export default applyHeaderClasses;
