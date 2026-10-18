import instructions from "./instructions.json" with { type: "json" };
import runInstructions from "./runInstructions.js";
import { buildRegistry, base, classes, defaults, recipes, spec } from "./buildRegistry.js";

const bigButtons = (args = {}) => {
    const registry = buildRegistry(args);
    runInstructions(registry);
    return registry.base;
};

export { base, classes, defaults, instructions, recipes, spec, bigButtons };
export default bigButtons;
