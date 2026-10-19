const meta = {
    version: "1.9.1",
    name: "json-renderers-build-form",
    git: "https://github.com/keshavsoft/json-renderers-build-form"
};

const registerGlobal = definition => {
    if (typeof globalThis === "undefined" || !definition) return;

    globalThis.ks ??= {};
    globalThis.ks.jsonRenderers ??= {};
    globalThis.ks.jsonRenderers.buildForm = { meta, render: definition };
    // globalThis.ks.jsonRenderersBuildForm = { meta, render: definition };
};

export default registerGlobal;