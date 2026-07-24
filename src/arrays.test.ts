import { test } from "node:test";
import assert from "node:assert/strict";
import { chunk, uniq, groupBy } from "./arrays.ts";

test("chunk splits array into equal-sized pieces", () => {
  assert.deepEqual(chunk([1, 2, 3, 4], 2), [[1, 2], [3, 4]]);
});

test("chunk handles uneven remainder", () => {
  assert.deepEqual(chunk([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);
});

test("chunk returns empty array for empty input", () => {
  assert.deepEqual(chunk([], 3), []);
});

test("chunk throws when size is 0", () => {
  assert.throws(() => chunk([1, 2, 3], 0), /positive integer/);
});

test("chunk throws when size is negative", () => {
  assert.throws(() => chunk([1, 2, 3], -1), /positive integer/);
});

test("uniq removes duplicates preserving first-seen order", () => {
  assert.deepEqual(uniq([1, 2, 1, 3, 2]), [1, 2, 3]);
});

test("groupBy groups items by key function", () => {
  const result = groupBy(["one", "two", "three"], (s) => String(s.length));
  assert.deepEqual(result, { "3": ["one", "two"], "5": ["three"] });
});
