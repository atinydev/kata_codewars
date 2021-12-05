export function removeChar(str: string): string {
    return str.substring(1, str.length - 1);
}

// export function removeChar(str: string): string {
//     return str.slice(1, -1);
// }

import { assert } from 'chai';

describe('removeChar', () => {
    it('basic tests', () => {
        assert.equal(removeChar('eloquent'), 'loquen');
        assert.equal(removeChar('country'), 'ountr');
        assert.equal(removeChar('person'), 'erso');
        assert.equal(removeChar('place'), 'lac');
    });
});