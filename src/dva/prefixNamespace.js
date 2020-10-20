import { NAMESPACE_SEP } from './constants';

function prefix(obj, namespace) {
    return Object.keys(obj).reduce((memo, key) => {
        const newKey = `${namespace}${NAMESPACE_SEP}${key}`;
        memo[newKey] = obj[key];
        return memo;
    }, {});
}

export default function prefixNamespace(model) {
    const { namespace, reducers, effects } = model;
    if (reducers) {
        model.reducers = prefix(reducers, namespace);
    }
    if (effects) {
        model.effects = prefix(effects, namespace);
    }
    return model;
}
