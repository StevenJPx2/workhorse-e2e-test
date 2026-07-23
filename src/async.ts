/** Returns a Promise that resolves after ms milliseconds. */
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
// TODO: add a timeout wrapper
