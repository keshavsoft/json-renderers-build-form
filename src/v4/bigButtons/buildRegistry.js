import base from "./base.json" with { type: "json" };
import classes from "./classes.json" with { type: "json" };
import page from "./page.json" with { type: "json" };
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

    const suppliedOptions = optionScopes["form.bigButtons"] ?? optionScopes.bigButtons ?? {};
    if (typeof suppliedOptions !== "object" || Array.isArray(suppliedOptions)) {
        throw new TypeError('options["form.bigButtons"] must be an object');
    }

    const options = { ...base.options, ...suppliedOptions };
    const headerRecipe = selectRecipe(recipes.headers, options.header, "header");
    const bodyRecipe = selectRecipe(recipes.bodies, options.body, "body");
    const footerRecipe = selectRecipe(recipes.footers, options.footer, "footer");
    const hasColumnInput = Array.isArray(args.inColumns) || Array.isArray(args.columns);
    const sourceColumns = localColumns.length || hasColumnInput ? localColumns : base.columns;
    const columns = sourceColumns.map(column => {
        const originalCell = column.template?.body?.cell ?? "buildBodyCell";
        let cell = bodyRecipe.fieldTemplates?.[originalCell] ?? originalCell;
        if (column.buttonText) cell = bodyRecipe.buttonFieldTemplates?.[cell] ?? cell;

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

    const sourceRow = localData[0] ?? base.data[0] ?? {};
    const row = Object.fromEntries(columns.map(column => [
        column.columnName,
        sourceRow[column.columnName] ?? column.value ?? ""
    ]));

    const framework = classes.frameworks[classes.defaultFramework];
    const classValues = Object.assign(
        {},
        framework.base,
        framework.headers[options.header],
        framework.bodies[options.body],
        framework.footers[options.footer]
    );

    return {
        context: { classValues },
        data: {
            columns,
            rows: [row],
            options,
            header: headerRecipe.show ? [{
                title: options.title,
                description: options.description,
                recordId: options.recordId
            }] : [],
            headerActions: headerRecipe.actions,
            body: [{}],
            footer: footerRecipe.show ? [{}] : [],
            footerActions: footerRecipe.actions
        },
        page: structuredClone(page),
        spec
    };
};

export { buildRegistry, base, classes, page, recipes, spec };
