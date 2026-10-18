import defaults from "./defaults.json" with { type: "json" };
import recipes from "./recipes.json" with { type: "json" };

const selectRecipe = (collection, name, section) => {
    const recipe = collection[name];
    if (!recipe) throw new RangeError("Unknown bigButtons " + section + ": " + name);
    return recipe;
};

const resolveOptions = (optionScopes = {}) => {
    if (typeof optionScopes !== "object" || Array.isArray(optionScopes)) {
        throw new TypeError("bigButtons options must be an object keyed by renderer type");
    }

    const supplied = optionScopes["form.bigButtons"] ?? {};
    if (typeof supplied !== "object" || Array.isArray(supplied)) {
        throw new TypeError('options["form.bigButtons"] must be an object');
    }

    const options = { ...defaults, ...supplied };

    return {
        options,
        header: selectRecipe(recipes.headers, options.header, "header"),
        body: selectRecipe(recipes.bodies, options.body, "body"),
        footer: selectRecipe(recipes.footers, options.footer, "footer")
    };
};

export default resolveOptions;
