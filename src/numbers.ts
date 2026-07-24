import { CodedError } from "./errors.ts";

export function clamp(n: number, lo: number, hi: number): number {
  if (lo > hi)
    throw new CodedError("invalid_range", `clamp: lo (${lo}) must be ≤ hi (${hi})`);
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
