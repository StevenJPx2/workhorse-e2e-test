import { describe, it } from "node:test";
import assert from "node:assert/strict";
// Import using .ts extension — required for --experimental-strip-types (Node v22
// strips types directly from .ts source; it does NOT rewrite specifiers, so the
// specifier must match the file on disk).
import { clamp, round, sum } from "./numbers.ts";

describe("clamp", () => {
  it("clamps a value below lo up to lo", () => {
    assert.equal(clamp(1, 5, 10), 5);
  });

  it("returns the value unchanged when within [lo, hi]", () => {
    assert.equal(clamp(7, 5, 10), 7);
  });

  it("clamps a value above hi down to hi", () => {
    assert.equal(clamp(15, 5, 10), 10);
  });

  it("works when lo === hi (single-point range)", () => {
    assert.equal(clamp(3, 6, 6), 6);
  });

  it("throws a CodedError with code 'invalid_range' when lo > hi", () => {
    // Note: we avoid importing CodedError directly because errors.ts uses a
    // TypeScript parameter property (not supported in Node's strip-only mode).
    // We verify the thrown value is an Error with the correct .code property.
    assert.throws(
      () => clamp(5, 10, 3),
      (err: unknown) => {
        assert.ok(err instanceof Error, "should be an Error");
        assert.equal(
          (err as Error & { code: string }).code,
          "invalid_range",
          "code should be 'invalid_range'"
        );
        assert.ok(
          err.message.includes("lo (10)"),
          "message should mention lo value"
        );
        assert.ok(
          err.message.includes("hi (3)"),
          "message should mention hi value"
        );
        return true;
      }
    );
  });
});

describe("round", () => {
  it("rounds to integer by default (places=0)", () => {
    assert.equal(round(4.6), 5);
    assert.equal(round(4.4), 4);
  });

  it("rounds to the specified number of decimal places", () => {
    assert.equal(round(3.14159, 2), 3.14);
  });

  it("returns an integer unchanged when places=0", () => {
    assert.equal(round(7, 0), 7);
  });
});

describe("sum", () => {
  it("returns 0 for an empty array", () => {
    assert.equal(sum([]), 0);
  });

  it("returns the element itself for a single-element array", () => {
    assert.equal(sum([42]), 42);
  });

  it("sums multiple elements correctly", () => {
    assert.equal(sum([1, 2, 3, 4, 5]), 15);
  });

  it("handles negative numbers", () => {
    assert.equal(sum([-1, -2, 3]), 0);
  });
});
