import meta from "./meta.js";

export const registerGlobal = (inDefinition) => {
    const localDefinition = inDefinition;

    if (typeof globalThis === "undefined" || !localDefinition) return;

    globalThis.ks ??= {};

    const renderFunc = typeof localDefinition === "function"
        ? localDefinition
        : localDefinition.render;

    globalThis.ks.jsonRenderersBuildForm = {
        meta,
        render: renderFunc,
        ...(typeof localDefinition === "object" ? localDefinition : {})
    };
};

export default registerGlobal;
