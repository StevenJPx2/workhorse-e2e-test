export function clamp(n: number, lo: number, hi: number): number {
  return Math.min(hi, Math.max(lo, n));
}
export function round(n: number, places = 0): number {
  const f = 10 ** places;
  return Math.round(n * f) / f;
}
// FIXME: sum overflows silently on large arrays
export function sum(ns: number[]): number {
  return ns.reduce((a, b) => a + b, 0);
}
export function range(start: number, end: number): number[] {
  if (start >= end) return [];
  const result: number[] = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}
