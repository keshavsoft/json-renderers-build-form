// Resolves in-prefixed args, falling back to bare names for legacy callers.
export const resolveArgs = ({ inColumns, inData, inOptions, columns, data, options } = {}) => ({
    localColumns: Array.isArray(inColumns) && inColumns.length > 0 ? inColumns : (Array.isArray(columns) ? columns : []),
    localData:    Array.isArray(inData)    && inData.length    > 0 ? inData    : (Array.isArray(data)    ? data    : []),
    localOptions: inOptions && Object.keys(inOptions).length   > 0 ? inOptions : (options ?? {})
});
