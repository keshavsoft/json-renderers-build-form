import defaults from "./defaults.json" with { type: "json" };
import headers from "./buildHeader/recipes.json" with { type: "json" };
import bodies from "./buildBody/recipes.json" with { type: "json" };
import footers from "./buildFooter/recipes.json" with { type: "json" };

const select = (recipes, name, section) => {
    const recipe = recipes[name];
    if (!recipe) throw new RangeError("Unknown bigButtons " + section + ": " + name);
    return recipe;
};

const resolveOptions = optionScopes => {
    if (typeof optionScopes !== "object" || optionScopes === null || Array.isArray(optionScopes)) {
        throw new TypeError("bigButtons options must be an object keyed by renderer type");
    }

    const supplied = optionScopes["form.bigButtons"] ?? {};
    if (typeof supplied !== "object" || supplied === null || Array.isArray(supplied)) {
        throw new TypeError('options["form.bigButtons"] must be an object');
    }

    const options = { ...defaults, ...supplied };
    return {
        options,
        header: select(headers, options.header, "header"),
        body: select(bodies, options.body, "body"),
        footer: select(footers, options.footer, "footer")
    };
};

export default resolveOptions;
