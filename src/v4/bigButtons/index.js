import instructions from "./instructions.json" with { type: "json" };
import runInstructions from "./runInstructions.js";
import { buildRegistry, base, classes, page, recipes, spec } from "./buildRegistry.js";

const bigButtons = (args = {}) => {
    const registry = buildRegistry(args);
    runInstructions(registry);
    return registry.page;
};

export { base, classes, instructions, page, recipes, spec, bigButtons };
export default bigButtons;
