/** Capitalize the first character. */
export function capitalize(s: string): string {
  return s.length ? s[0].toUpperCase() + s.slice(1) : s;
}
/** Converts a string to a URL-friendly lowercase slug. */
export function slugify(s: string): string {
  // TODO: strip diacritics before slugifying
  return s.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
/** Truncates `s` to at most `n` characters, appending an ellipsis if cut. */
export function truncate(s: string, n: number): string {
  return s.length > n ? s.slice(0, n - 1) + "\u2026" : s;
}
// FIXME: this does not handle CRLF
/** Splits a string into an array of lines. */
export function lines(s: string): string[] {
  return s.split("\n");
}
