/** Splits arr into consecutive chunks of the given size. */
export function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}
/** Unique values, preserving first-seen order. */
export function uniq<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}
/** Groups array elements into a Record keyed by the result of key(item). */
export function groupBy<T, K extends string>(arr: T[], key: (t: T) => K): Record<K, T[]> {
  const out = {} as Record<K, T[]>;
  for (const item of arr) (out[key(item)] ??= []).push(item);
  return out;
}
// TODO: add a stable sort helper
