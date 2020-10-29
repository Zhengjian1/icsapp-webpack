import { isEmpty } from '../string-util';

test('null', () => {
    expect(isEmpty(null)).toBeTruthy();
    expect(isEmpty(undefined)).toBeTruthy();
    expect(isEmpty('undefined')).toBeTruthy();
});
