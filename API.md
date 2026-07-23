# API Reference

All functions are exported from the package root (`import { … } from '.'`).

| Module | Function | Signature | One-line purpose |
|--------|----------|-----------|-----------------|
| `arrays` | `chunk` | `<T>(arr: T[], size: number): T[][]` | Split an array into consecutive fixed-size chunks |
| `arrays` | `uniq` | `<T>(arr: T[]): T[]` | Deduplicate an array, preserving first-seen order |
| `arrays` | `groupBy` | `<T, K extends string>(arr: T[], key: (t: T) => K): Record<K, T[]>` | Group array items into a record keyed by the result of `key` |
| `async` | `sleep` | `(ms: number): Promise<void>` | Return a promise that resolves after `ms` milliseconds |
| `async` | `retry` | `<T>(fn: () => Promise<T>, times?: number): Promise<T>` | Call `fn` up to `times` (default 3) times with linear back-off, re-throwing the last error |
| `dates` | `isoDate` | `(d: Date): string` | Format a `Date` as a `YYYY-MM-DD` string |
| `dates` | `humanize` | `(ms: number): string` | Convert a millisecond duration to a short human-readable string (e.g. `"2m"`, `"3h"`) |
| `dates` | `addDays` | `(d: Date, n: number): Date` | Return a new `Date` that is `n` days after `d` |
| `errors` | `CodedError` | `constructor(code: string, message: string)` | `Error` subclass that carries a machine-readable `code` string |
| `errors` | `NotFoundError` | `constructor(what: string)` | `CodedError` with code `"not_found"` and a standard "not found" message |
| `format` | `bytes` | `(n: number): string` | Format a byte count as a human-readable string (e.g. `"1.5KB"`) |
| `format` | `pct` | `(part: number, whole: number): string` | Format `part/whole` as a rounded percentage string (e.g. `"42%"`) |
| `numbers` | `clamp` | `(n: number, lo: number, hi: number): number` | Clamp `n` to the inclusive range `[lo, hi]` |
| `numbers` | `round` | `(n: number, places?: number): number` | Round `n` to `places` decimal places (default 0) |
| `numbers` | `sum` | `(ns: number[]): number` | Return the sum of all numbers in the array |
| `objects` | `pick` | `<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>` | Return a shallow copy of `obj` containing only the specified keys |
| `objects` | `omit` | `<T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K>` | Return a shallow copy of `obj` with the specified keys removed |
| `objects` | `merge` | `<T extends object>(a: T, b: Partial<T>): T` | Shallow-merge `b` over `a`, returning a new object |
| `strings` | `capitalize` | `(s: string): string` | Uppercase the first character of a string |
| `strings` | `slugify` | `(s: string): string` | Convert a string to a lowercase URL-friendly slug |
| `strings` | `truncate` | `(s: string, n: number): string` | Truncate a string to at most `n` characters, appending `…` if cut |
| `strings` | `lines` | `(s: string): string[]` | Split a string into an array of lines on `\n` |
| `validation` | `isEmail` | `(s: string): boolean` | Return `true` if `s` looks like a valid e-mail address |
| `validation` | `isUrl` | `(s: string): boolean` | Return `true` if `s` is a parseable URL |
| `validation` | `nonEmpty` | `(s: string \| null \| undefined): s is string` | Return `true` (and narrow the type) if `s` is a non-blank string |
