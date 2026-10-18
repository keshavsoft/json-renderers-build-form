const guardFunc = ({ inConfig } = {}) => {
    const localConfig = inConfig;

    if (!localConfig || typeof localConfig !== "object") {
        console.error("Config must be an object");
        throw new TypeError("Config must be an object");
    }

    if (localConfig.columns && !Array.isArray(localConfig.columns)) {
        console.error("columns must be an Array");
        throw new TypeError("columns must be an Array");
    }

    if (localConfig.data && !Array.isArray(localConfig.data)) {
        console.error("data must be an Array");
        throw new TypeError("data must be an Array");
    }

    if (localConfig.options && typeof localConfig.options !== "object") {
        console.error("options must be an object");
        throw new TypeError("options must be an object");
    }

    return true;
};

export { guardFunc };
export default guardFunc;
