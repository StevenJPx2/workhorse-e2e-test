/** Formats a byte count as a human-readable string (e.g. "1.5MB"). */
export function bytes(n: number): string {
  const u = ["B", "KB", "MB", "GB"];
  let i = 0;
  while (n >= 1024 && i < u.length - 1) { n /= 1024; i++; }
  return `${n.toFixed(1)}${u[i]}`;
}
/** Formats a ratio as a percentage string (e.g. "42%"). */
export function pct(part: number, whole: number): string {
  return whole === 0 ? "0%" : `${Math.round((part / whole) * 100)}%`;
}
