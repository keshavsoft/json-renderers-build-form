import base from "./base.json" with { type: "json" };
import classes from "./classes.json" with { type: "json" };
import defaults from "./defaults.json" with { type: "json" };
import recipes from "./recipes.json" with { type: "json" };
import spec from "./spec.json" with { type: "json" };
import { resolveArgs } from "../resolve.js";

const selectRecipe = (collection, name, section) => {
    const recipe = collection[name];
    if (!recipe) throw new RangeError("Unknown bigButtons " + section + ": " + name);
    return recipe;
};

const buildRegistry = (args = {}) => {
    const { localColumns, localData, localOptions } = resolveArgs(args);
    const optionScopes = localOptions ?? {};
    if (typeof optionScopes !== "object" || Array.isArray(optionScopes)) {
        throw new TypeError("bigButtons options must be an object keyed by renderer type");
    }

    const suppliedOptions = optionScopes["form.bigButtons"] ?? {};
    if (typeof suppliedOptions !== "object" || Array.isArray(suppliedOptions)) {
        throw new TypeError('options["form.bigButtons"] must be an object');
    }

    const options = { ...defaults, ...suppliedOptions };
    const header = selectRecipe(recipes.headers, options.header, "header");
    const body = selectRecipe(recipes.bodies, options.body, "body");
    const footer = selectRecipe(recipes.footers, options.footer, "footer");

    const columns = localColumns.map(column => {
        const requestedCell = column.template?.body?.cell ?? (column.required ? "buildRequiredField" : "buildBodyCell");
        let cell = body.fieldTemplates?.[requestedCell] ?? requestedCell;
        if (column.buttonText) cell = body.buttonFieldTemplates?.[cell] ?? cell;

        return {
            ...column,
            label: column.label ?? column.title ?? column.columnName,
            type: column.type ?? "text",
            placeholder: column.placeholder ?? "",
            buttonType: column.buttonType ?? "button",
            template: {
                ...column.template,
                body: { ...column.template?.body, cell }
            }
        };
    });

    const sourceRecord = localData[0] ?? {};
    const row = Object.fromEntries(columns.map(column => [
        column.columnName,
        sourceRecord[column.columnName] ?? column.value ?? ""
    ]));

    const frameworkName = options.framework ?? classes.defaultFramework;
    const framework = classes.frameworks[frameworkName];
    if (!framework) throw new RangeError("Unknown bigButtons framework: " + frameworkName);
    const templateValues = Object.assign(
        {},
        options,
        framework.base,
        framework.headers.label,
        framework.headers[options.header],
        framework.bodies[options.body],
        framework.footers[options.footer]
    );

    return {
        data: {
            columns,
            rows: [row],
            options,
            headerActions: header.actions,
            footerActions: footer.actions
        },
        base: structuredClone(base),
        context: { templateValues },
        spec
    };
};

export { buildRegistry, base, classes, defaults, recipes, spec };
