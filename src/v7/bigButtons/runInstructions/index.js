import defaults from "./defaults.json" with { type: "json" };
import instructions from "./instructions.json" with { type: "json" };
import recipes from "./recipes.json" with { type: "json" };
import spec from "./spec.json" with { type: "json" };
import executeInstructions from "./executeInstructions.js";
import { resolveArgs } from "./resolveArgs.js";

const runInstructions = (document, args = {}) => {
    const state = {
        data: resolveArgs(args),
        base: structuredClone(document),
        context: {},
        spec
    };

    executeInstructions(state, instructions);

    return state.base;
};

export { defaults, instructions, recipes, spec, runInstructions };
export default runInstructions;
