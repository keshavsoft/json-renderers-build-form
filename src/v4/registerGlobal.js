const meta = {
    version: "1.2.0",
    name: "json-renderers-build-form"
};

const registerGlobal = definition => {
    if (typeof globalThis === "undefined" || !definition) return;

    globalThis.ks ??= {};
    globalThis.ks.jsonRenderersBuildForm = { meta, render: definition };
};

export default registerGlobal;
