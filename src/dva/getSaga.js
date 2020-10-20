import { effects as sagaEffects } from 'redux-saga';
import prefixType from './prefixType';

export default function getSaga(effects, model) {
    return function* () {
        for (const key in effects) {
            if (Object.prototype.hasOwnProperty.call(effects, key)) {
                const watcher = getWatcher(key, effects[key], model);
                yield sagaEffects.fork(watcher);
            }
        }
    };
}

function getWatcher(key, effect, model) {
    function noop() {}

    function* sagaWithCatch(...args) {
        const { __dva_resolve: resolve = noop, __dva_reject: reject = noop } = args.length > 0 ? args[0] : {};
        try {
            const ret = yield effect(...args.concat(createEffects(model)));
            resolve(ret);
        } catch (e) {
            reject(e);
        }
    }

    return function* () {
        yield sagaEffects.takeEvery(key, sagaWithCatch);
    };
}

function createEffects(model) {
    function put(action) {
        const { type } = action;
        return sagaEffects.put({ ...action, type: prefixType(type, model) });
    }

    function take(type) {
        return sagaEffects.take(prefixType(type, model));
    }
    return { ...sagaEffects, put, take };
}
