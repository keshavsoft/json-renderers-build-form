import classes from "./classes.json" with { type: "json" };

const resolveClasses = selection => {
    const { options } = selection;
    const frameworkName = options.framework ?? classes.defaultFramework;
    const framework = classes.frameworks[frameworkName];
    if (!framework) throw new RangeError("Unknown bigButtons framework: " + frameworkName);

    return Object.assign(
        {},
        options,
        framework.base,
        framework.headers[options.header],
        framework.bodies[options.body],
        framework.footers[options.footer]
    );
};

export default resolveClasses;
