import { test } from 'node:test';
import assert from 'node:assert/strict';
import { chunk, uniq, groupBy } from '../src/arrays.ts';

test('chunk – splits array into equal-sized pieces', () => {
  assert.deepEqual(chunk([1, 2, 3, 4], 2), [[1, 2], [3, 4]]);
});

test('chunk – last piece may be smaller', () => {
  assert.deepEqual(chunk([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);
});

test('chunk – returns [] for empty array', () => {
  assert.deepEqual(chunk([], 3), []);
});

test('chunk – throws RangeError when size is 0', () => {
  assert.throws(
    () => chunk([1, 2, 3], 0),
    (err: Error) => {
      assert.ok(err instanceof RangeError);
      assert.match(err.message, /size/i);
      return true;
    },
  );
});

test('chunk – throws RangeError when size is negative', () => {
  assert.throws(
    () => chunk([1, 2, 3], -5),
    RangeError,
  );
});

test('uniq – removes duplicates preserving order', () => {
  assert.deepEqual(uniq([1, 2, 1, 3, 2]), [1, 2, 3]);
});

test('groupBy – groups items by key', () => {
  const result = groupBy(['a', 'bb', 'cc', 'd'], (s) => s.length === 1 ? 'short' : 'long');
  assert.deepEqual(result, { short: ['a', 'd'], long: ['bb', 'cc'] });
});
