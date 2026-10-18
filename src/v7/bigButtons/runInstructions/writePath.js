import { findByRole } from "json-transformer-funcs";

const toArray = value => Array.isArray(value) ? value : [value];

const actions = {
    set: (parent, key, value) => {
        parent[key] = value;
    },
    push: (parent, key, value) => {
        parent[key].push(...toArray(value));
    },
    unshift: (parent, key, value) => {
        parent[key].unshift(...toArray(value));
    }
};

const writePath = (state, path, value) => {
    const root = path.dataRole
        ? findByRole(state[path.fileName], path.dataRole)
        : state[path.fileName];
    const keys = [...(path.filePath ?? [])];

    if (keys.length === 0) {
        state[path.fileName] = value;
        return;
    }

    const lastKey = keys.pop();
    const parent = keys.reduce((current, key) => current[key], root);
    (actions[path.action] ?? actions.set)(parent, lastKey, value);
};

export default writePath;
