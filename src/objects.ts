/** Creates a new object with only the specified keys from obj. */
export function pick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const k of keys) if (k in obj) out[k] = obj[k];
  return out;
}
/** Creates a new object with the specified keys removed from obj. */
export function omit<T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  const out = { ...obj };
  for (const k of keys) delete out[k];
  return out;
}
/** Shallow merge b over a. */
export function merge<T extends object>(a: T, b: Partial<T>): T {
  return { ...a, ...b };
}
