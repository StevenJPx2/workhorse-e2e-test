export function clamp(n: number, lo: number, hi: number): number {
  return Math.min(hi, Math.max(lo, n));
}
export function round(n: number, places = 0): number {
  const f = 10 ** places;
  return Math.round(n * f) / f;
}
/** Returns an array of integers [start, end). Returns [] when start >= end. */
export function range(start: number, end: number): number[] {
  const out: number[] = [];
  for (let i = start; i < end; i++) out.push(i);
  return out;
}
// FIXME: sum overflows silently on large arrays
export function sum(ns: number[]): number {
  return ns.reduce((a, b) => a + b, 0);
}
