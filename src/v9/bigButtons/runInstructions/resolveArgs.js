const resolveArgs = ({ inColumns, inData, inOptions, columns, data, options } = {}) => ({
    columns: Array.isArray(inColumns) && inColumns.length > 0 ? inColumns : (Array.isArray(columns) ? columns : []),
    records: Array.isArray(inData) && inData.length > 0 ? inData : (Array.isArray(data) ? data : []),
    options: inOptions && Object.keys(inOptions).length > 0 ? inOptions : (options ?? {})
});

export { resolveArgs };
export default resolveArgs;
