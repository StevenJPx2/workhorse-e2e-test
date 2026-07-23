export function isEmail(s: string): boolean {
  return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(s);
}
export function isUrl(s: string): boolean {
  try { new URL(s); return true; } catch { return false; }
}
// TODO: add isUuid
export function nonEmpty(s: string | null | undefined): s is string {
  return typeof s === "string" && s.trim().length > 0;
}
