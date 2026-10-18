import { applyTemplate, resolvePath } from "json-transformer-funcs";
import fromCollection from "json-transformer-funcs-one-dimension";
import twoDimensional from "json-transformer-funcs-two-dimensions";
import writePath from "./writePath.js";

const functions = { applyTemplate, fromCollection, twoDimensional };

const executeInstructions = (registry, instructions) => {
    instructions.forEach(instruction => {
        const inputs = instruction.inputPaths.map(path => resolvePath(registry, path));
        const hasEmptyInput = instruction.skipIfEmpty && inputs.some(input => Array.isArray(input) && input.length === 0);
        if (hasEmptyInput) return;

        const result = functions[instruction.func](...inputs);
        writePath(registry, instruction.destinationPath, result);
    });
};

export default executeInstructions;
