import { applyTemplate, resolvePath } from "json-transformer-funcs";
import fromCollection from "json-transformer-funcs-one-dimension";
import twoDimensional from "json-transformer-funcs-two-dimensions";

import spec from "./spec.json" with { type: "json" };
import page from "./page.json" with { type: "json" };
import singleInstructions from "./instructions/single.json" with { type: "json" };
import twoDimensionalInstructions from "./instructions/double.json" with { type: "json" };

import { resolveArgs } from "../resolve.js";
import writePath from "./writePath/index.js";

const functions = { applyTemplate, fromCollection, twoDimensional };

const runInstructions = (registry, instructions) => {
    instructions.forEach(instruction => {
        const inputs = instruction.inputPaths.map(path => resolvePath(registry, path));
        const hasEmptyInput = instruction.skipIfEmpty && inputs.some(input => Array.isArray(input) && input.length === 0);

        if (hasEmptyInput) return;

        const result = functions[instruction.func](...inputs);
        writePath(registry, instruction.destinationPath, result);
    });
};

const withButtons = (args = {}) => {
    const { localColumns, localData, localOptions } = resolveArgs(args);
    const options = {
        formId: "formWithButtonsId",
        formClass: "vstack gap-3",
        buttonBarClass: "d-flex align-items-center justify-content-end gap-2 mt-4 pt-3 border-top",
        submitLabel: "Submit",
        cancelLabel: "Cancel",
        submitClass: "btn btn-primary",
        cancelClass: "btn btn-outline-secondary",
        ...localOptions
    };
    const registry = {
        data: {
            columns: localColumns,
            rows: localData.length > 0 ? [localData[0]] : [{}],
            options,
            optionsRows: [options]
        },
        page: structuredClone(page),
        spec
    };

    runInstructions(registry, singleInstructions);
    runInstructions(registry, twoDimensionalInstructions);

    return registry.page;
};

export { spec, withButtons };
export default withButtons;
