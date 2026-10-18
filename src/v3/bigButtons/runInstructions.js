import instructions from "./instructions.json" with { type: "json" };
import executeInstructions from "./executeInstructions.js";

const runInstructions = registry => {
    executeInstructions(registry, instructions.build);
    executeInstructions(registry, instructions.style);
};

export default runInstructions;
