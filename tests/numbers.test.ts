import { test } from 'node:test';
import assert from 'node:assert/strict';
import { range, clamp, round, sum } from '../src/numbers.ts';

test('range – returns integers from start (inclusive) to end (exclusive)', () => {
  assert.deepEqual(range(0, 5), [0, 1, 2, 3, 4]);
});

test('range – works with non-zero start', () => {
  assert.deepEqual(range(3, 7), [3, 4, 5, 6]);
});

test('range – returns empty array when start equals end', () => {
  assert.deepEqual(range(4, 4), []);
});

test('range – returns empty array when start exceeds end', () => {
  assert.deepEqual(range(10, 3), []);
});

test('range – single element when end is start + 1', () => {
  assert.deepEqual(range(5, 6), [5]);
});

test('clamp – clamps to lower bound', () => {
  assert.equal(clamp(-5, 0, 10), 0);
});

test('clamp – clamps to upper bound', () => {
  assert.equal(clamp(15, 0, 10), 10);
});

test('round – rounds to given decimal places', () => {
  assert.equal(round(3.14159, 2), 3.14);
});

test('sum – sums an array', () => {
  assert.equal(sum([1, 2, 3, 4]), 10);
});
