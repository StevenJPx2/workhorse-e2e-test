/** Returns true if s is a valid email address. */
export function isEmail(s: string): boolean {
  return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(s);
}
/** Returns true if s is a valid URL. */
export function isUrl(s: string): boolean {
  try { new URL(s); return true; } catch { return false; }
}
// TODO: add isUuid
/** Returns true if s is a non-empty, non-whitespace string. */
export function nonEmpty(s: string | null | undefined): s is string {
  return typeof s === "string" && s.trim().length > 0;
}
