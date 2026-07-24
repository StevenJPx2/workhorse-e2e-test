import { test } from "node:test";
import assert from "node:assert/strict";
import { range, clamp, round, sum } from "./numbers.ts";

test("range(0, 5) returns [0, 1, 2, 3, 4]", () => {
  assert.deepEqual(range(0, 5), [0, 1, 2, 3, 4]);
});

test("range(2, 5) returns [2, 3, 4]", () => {
  assert.deepEqual(range(2, 5), [2, 3, 4]);
});

test("range(5, 5) returns empty array when start equals end", () => {
  assert.deepEqual(range(5, 5), []);
});

test("range(6, 5) returns empty array when start > end", () => {
  assert.deepEqual(range(6, 5), []);
});

test("clamp returns value within bounds", () => {
  assert.equal(clamp(5, 1, 10), 5);
  assert.equal(clamp(0, 1, 10), 1);
  assert.equal(clamp(15, 1, 10), 10);
});

test("round rounds to given decimal places", () => {
  assert.equal(round(3.14159, 2), 3.14);
  assert.equal(round(3.5), 4);
});

test("sum adds all numbers", () => {
  assert.equal(sum([1, 2, 3, 4]), 10);
  assert.equal(sum([]), 0);
});
