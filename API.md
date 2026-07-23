# API Reference

All exported functions and classes across every module in `src/`.

| Module | Function | Signature | One-line purpose |
|---|---|---|---|
| strings | `capitalize` | `capitalize(s: string): string` | Capitalize the first character of a string |
| strings | `slugify` | `slugify(s: string): string` | Convert a string to a lowercase URL-safe slug |
| strings | `truncate` | `truncate(s: string, n: number): string` | Truncate a string to `n` chars, appending `…` |
| strings | `lines` | `lines(s: string): string[]` | Split a string into an array of lines on `\n` |
| arrays | `chunk` | `chunk<T>(arr: T[], size: number): T[][]` | Split an array into consecutive chunks of a given size |
| arrays | `uniq` | `uniq<T>(arr: T[]): T[]` | Return a deduplicated array preserving first-seen order |
| arrays | `groupBy` | `groupBy<T, K extends string>(arr: T[], key: (t: T) => K): Record<K, T[]>` | Group array items into a record keyed by a callback |
| objects | `pick` | `pick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>` | Return a new object with only the specified keys |
| objects | `omit` | `omit<T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K>` | Return a new object with the specified keys removed |
| objects | `merge` | `merge<T extends object>(a: T, b: Partial<T>): T` | Shallow-merge object `b` over `a` |
| dates | `isoDate` | `isoDate(d: Date): string` | Format a `Date` as an ISO 8601 date string (`YYYY-MM-DD`) |
| dates | `humanize` | `humanize(ms: number): string` | Convert a millisecond duration to a human-readable string |
| dates | `addDays` | `addDays(d: Date, n: number): Date` | Return a new `Date` shifted forward by `n` days |
| numbers | `clamp` | `clamp(n: number, lo: number, hi: number): number` | Clamp a number between `lo` and `hi` |
| numbers | `round` | `round(n: number, places?: number): number` | Round a number to a given number of decimal places |
| numbers | `sum` | `sum(ns: number[]): number` | Sum an array of numbers |
| validation | `isEmail` | `isEmail(s: string): boolean` | Return `true` if the string matches a basic email pattern |
| validation | `isUrl` | `isUrl(s: string): boolean` | Return `true` if the string is a parseable URL |
| validation | `nonEmpty` | `nonEmpty(s: string \| null \| undefined): s is string` | Return `true` (and narrow the type) if the string is non-empty after trimming |
| async | `sleep` | `sleep(ms: number): Promise<void>` | Resolve after `ms` milliseconds |
| async | `retry` | `retry<T>(fn: () => Promise<T>, times?: number): Promise<T>` | Retry an async function up to `times` times with linear backoff |
| format | `bytes` | `bytes(n: number): string` | Format a byte count as a human-readable string (e.g. `1.2MB`) |
| format | `pct` | `pct(part: number, whole: number): string` | Format a fraction as a rounded percentage string (e.g. `42%`) |
| errors | `CodedError` | `new CodedError(code: string, message: string)` | Base error class carrying a machine-readable `code` property |
| errors | `NotFoundError` | `new NotFoundError(what: string)` | `CodedError` with code `"not_found"` for missing-resource errors |
