import classes from "./classes.json" with { type: "json" };

const applyHeaderClasses = (options, frameworkName) => {
    const recipe = classes[frameworkName]?.[options.header];
    if (!recipe) throw new RangeError("Unknown bigButtons header: " + options.header);
    return recipe;
};

export default applyHeaderClasses;
