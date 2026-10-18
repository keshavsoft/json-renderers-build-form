import base from "./base.json" with { type: "json" };
import classes from "./classes.json" with { type: "json" };
import defaults from "./defaults.json" with { type: "json" };
import recipes from "./recipes.json" with { type: "json" };
import spec from "./spec.json" with { type: "json" };
import { resolveArgs } from "../resolve.js";

const buildRegistry = (args = {}) => ({
    data: resolveArgs(args),
    base: structuredClone(base),
    context: {},
    spec
});

export { buildRegistry, base, classes, defaults, recipes, spec };
