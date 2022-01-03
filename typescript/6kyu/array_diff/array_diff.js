"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayDiff = void 0;
function arrayDiff(a, b) {
    return a.filter(x => !b.includes(x));
}
exports.arrayDiff = arrayDiff;
// * Better performance
// export function arrayDiff(a: number[], b: number[]): number[] {
//     const bSet = new Set(b);
//     return a.filter(value => !bSet.has(value));
// }
const chai_1 = require("chai");
describe('Basic tests', () => {
    it('Basic test should work', () => {
        (0, chai_1.expect)(arrayDiff([], [4, 5])).to.eql([], 'a was [], b was [4,5]');
        (0, chai_1.expect)(arrayDiff([3, 4], [3])).to.eql([4], 'a was [3, 4], b was [3]');
        (0, chai_1.expect)(arrayDiff([1, 8, 2], [])).to.eql([1, 8, 2], 'a was [1, 8, 2], b was []');
        (0, chai_1.expect)(arrayDiff([1, 2, 3], [1, 2])).to.eql([3], 'a was [1, 2, 3], b was [1, 2]');
    });
});
