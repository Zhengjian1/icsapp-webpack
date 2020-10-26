export const APPCONSTANTS = {
    main: { id: '88880000', code: '9001' },
    outsource: { id: '88880001', code: '0005' },
    research: { id: '88880002', code: '0003' },
    derivative: { id: '88880003', code: '0007' },
    fixedincome: { id: '88880004', code: '0008' },
    common: { id: '88881111', code: null },
};

export function findApp(value, field) {
    for (let key in APPCONSTANTS) {
        if (APPCONSTANTS[key][field] === value) {
            return APPCONSTANTS[key];
        }
    }
    return null;
}

export function findAppById(id) {
    return findApp(id, 'id');
}

export function findAppByCode(code) {
    return findApp(code, 'code');
}
