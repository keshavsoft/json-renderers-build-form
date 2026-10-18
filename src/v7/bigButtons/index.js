import buildBase, { base } from "./buildBase/index.js";
import runInstructions, { defaults, instructions, recipes, spec } from "./runInstructions/index.js";
import applyClasses, { classes } from "./applyClasses/index.js";

const bigButtons = (args = {}) => {
    const baseJson = buildBase();
    const instructedJson = runInstructions(baseJson, args);
    return applyClasses(instructedJson, args);
};

export { base, classes, defaults, instructions, recipes, spec, bigButtons };
export default bigButtons;
