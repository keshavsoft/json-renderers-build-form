import { findByRole } from "json-transformer-funcs";
import twoDimensional from "json-transformer-funcs-two-dimensions";
import instructions from "./instructions.json" with { type: "json" };
import spec from "./spec.json" with { type: "json" };
import prepareFields from "./prepareFields.js";

const buildBody = (document, data, selection) => {
    const fields = prepareFields(data.columns, data.records, selection.body);
    const elements = twoDimensional(fields.columns, fields.rows, spec);
    const result = structuredClone(document);
    const body = findByRole(result, instructions.destinationRole);

    body.children.push(...(Array.isArray(elements) ? elements : [elements]));
    return result;
};

export default buildBody;
