import { findByRole } from "json-transformer-funcs";
import fromCollection from "json-transformer-funcs-one-dimension";
import instructions from "./instructions.json" with { type: "json" };
import spec from "./spec.json" with { type: "json" };

const buildHeader = (document, selection) => {
    const result = structuredClone(document);
    const actions = fromCollection(selection.header.actions, spec[instructions.template]);
    findByRole(result, instructions.destinationRole).children.push(...actions);
    return result;
};

export default buildHeader;
