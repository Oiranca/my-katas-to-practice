import { solution } from './multiples';
import * as assert from 'node:assert';

function test(n, expected) {
  it(`n=${n}`, () => {
    let actual = solution(n);
    assert.strictEqual(actual, expected);
  });
}

describe('basic tests', function () {
  test(10, 23);
  test(-1, 0);
});
