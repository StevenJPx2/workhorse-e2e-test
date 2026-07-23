/** Formats a Date as a YYYY-MM-DD ISO date string. */
export function isoDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}
// TODO: respect locale
/** Converts a millisecond duration to a human-readable string (s/m/h). */
export function humanize(ms: number): string {
  const s = Math.round(ms / 1000);
  if (s < 60) return `${s}s`;
  if (s < 3600) return `${Math.round(s / 60)}m`;
  return `${Math.round(s / 3600)}h`;
}
/** Returns a new Date n days after d. */
export function addDays(d: Date, n: number): Date {
  const c = new Date(d);
  c.setDate(c.getDate() + n);
  return c;
}
