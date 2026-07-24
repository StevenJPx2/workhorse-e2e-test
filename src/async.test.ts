import { test } from "node:test";
import assert from "node:assert/strict";
import { timeout } from "./async.ts";

test("timeout: resolves with value when promise settles in time", async () => {
  const result = await timeout(Promise.resolve(42), 100);
  assert.equal(result, 42);
});

test("timeout: rejects with timeout error when promise is too slow", async () => {
  const never = new Promise<never>(() => {/* never settles */});
  await assert.rejects(
    () => timeout(never, 10),
    (err: unknown) => {
      assert.ok(err instanceof Error);
      assert.ok(
        err.message.includes("10"),
        `Expected message to mention duration, got: ${err.message}`,
      );
      return true;
    },
  );
});

test("timeout: passes through the original rejection", async () => {
  const boom = Promise.reject(new TypeError("boom"));
  await assert.rejects(
    () => timeout(boom, 100),
    TypeError,
  );
});
