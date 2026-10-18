import base from "./base.json" with { type: "json" };

const buildBase = () => structuredClone(base);

export { base, buildBase };
export default buildBase;
