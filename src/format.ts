/** Formats a byte count as a human-readable string (B/KB/MB/GB). */
export function bytes(n: number): string {
  const u = ["B", "KB", "MB", "GB"];
  let i = 0;
  while (n >= 1024 && i < u.length - 1) { n /= 1024; i++; }
  return `${n.toFixed(1)}${u[i]}`;
}
/** Returns part/whole as a percentage string, or '0%' if whole is zero. */
export function pct(part: number, whole: number): string {
  return whole === 0 ? "0%" : `${Math.round((part / whole) * 100)}%`;
}
