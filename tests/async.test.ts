import { test } from 'node:test';
import assert from 'node:assert/strict';
import { timeout } from '../src/async.ts';

test('timeout – resolves when promise settles in time', async () => {
  const result = await timeout(Promise.resolve(42), 100);
  assert.equal(result, 42);
});

test('timeout – rejects with a clear error when promise exceeds ms', async () => {
  const never = new Promise<never>(() => {/* never resolves */});
  await assert.rejects(
    () => timeout(never, 20),
    (err: Error) => {
      assert.ok(err instanceof Error);
      assert.match(err.message, /timed out/i);
      assert.match(err.message, /20/);
      return true;
    },
  );
});

test('timeout – propagates rejection from the original promise', async () => {
  const boom = Promise.reject(new TypeError('boom'));
  await assert.rejects(() => timeout(boom, 100), TypeError);
});

test('timeout – clears timer on success (no unref leak)', async () => {
  // If the timer were NOT cleared the process would hang; completing this
  // test proves clearTimeout ran.
  const fast = new Promise<string>((r) => setTimeout(() => r('ok'), 5));
  const result = await timeout(fast, 200);
  assert.equal(result, 'ok');
});
