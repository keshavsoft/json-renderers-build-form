import buildBase from "./base/index.js";
import runInstructions from "./runInstructions/index.js";
import applyClasses from "./applyClasses/index.js";

const bigButtons = (args = {}) => {
    const baseJson = buildBase();
    const instructedJson = runInstructions(baseJson, args);
    return applyClasses(instructedJson, args);
};

export { bigButtons };
export default bigButtons;
