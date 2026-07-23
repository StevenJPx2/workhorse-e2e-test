/** Clamps `n` to the inclusive range [lo, hi]. */
export function clamp(n: number, lo: number, hi: number): number {
  return Math.min(hi, Math.max(lo, n));
}
/** Rounds `n` to the specified number of decimal places. */
export function round(n: number, places = 0): number {
  const f = 10 ** places;
  return Math.round(n * f) / f;
}
// FIXME: sum overflows silently on large arrays
/** Returns the sum of all numbers in the array. */
export function sum(ns: number[]): number {
  return ns.reduce((a, b) => a + b, 0);
}
