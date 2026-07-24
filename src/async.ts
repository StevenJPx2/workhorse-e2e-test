export function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}
/** Retry fn up to `times`, with linear backoff. */
export async function retry<T>(fn: () => Promise<T>, times = 3): Promise<T> {
  let last: unknown;
  for (let i = 0; i < times; i++) {
    try { return await fn(); } catch (e) { last = e; await sleep(100 * (i + 1)); }
  }
  throw last;
}
/** Rejects with an error if `promise` does not settle within `ms` milliseconds. */
export function timeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const timer = setTimeout(
      () => reject(new Error(`Promise timed out after ${ms} ms`)),
      ms,
    );
    promise.then(
      (value) => { clearTimeout(timer); resolve(value); },
      (err)   => { clearTimeout(timer); reject(err); },
    );
  });
}
