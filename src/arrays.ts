export function chunk<T>(arr: T[], size: number): T[][] {
  if (size <= 0) throw new Error(`chunk size must be a positive integer, got ${size}`);
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}
/** Unique values, preserving first-seen order. */
export function uniq<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}
export function groupBy<T, K extends string>(arr: T[], key: (t: T) => K): Record<K, T[]> {
  const out = {} as Record<K, T[]>;
  for (const item of arr) (out[key(item)] ??= []).push(item);
  return out;
}
// TODO: add a stable sort helper
