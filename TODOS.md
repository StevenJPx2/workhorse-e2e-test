# TODO / FIXME Inventory

Scanned all files under `src/`. Found **8** comments across **6** files.

---

## src/strings.ts

### Line 6 — TODO
```
// TODO: strip diacritics before slugifying
```
**Interpretation:** The `slugify` function should call `String.normalize('NFD')` (or equivalent) to decompose accented characters into base letters + diacritic marks before stripping non-ASCII characters, so inputs like `"héllo"` produce `"hello"` rather than `"hllo"`.

---

### Line 12 — FIXME
```
// FIXME: this does not handle CRLF
```
**Interpretation:** The `lines()` function splits only on `\n`, leaving a trailing `\r` on every line when given Windows-style `\r\n` input; it must be updated to strip or split on `\r\n` as well.

---

## src/errors.ts

### Line 11 — TODO
```
// TODO: add a ValidationError with field paths
```
**Interpretation:** A new `ValidationError` class needs to be created that extends `CodedError` and carries a structured list of per-field errors (e.g. `{ field: string; message: string }[]`) so callers can pinpoint exactly which fields failed validation.

---

## src/arrays.ts

### Line 15 — TODO
```
// TODO: add a stable sort helper
```
**Interpretation:** A `stableSort` utility function should be added that sorts an array using a comparator while guaranteeing that elements considered equal retain their original relative order (important in environments where `Array.prototype.sort` stability is not guaranteed or for explicit documentation of the contract).

---

## src/numbers.ts

### Line 8 — FIXME
```
// FIXME: sum overflows silently on large arrays
```
**Interpretation:** The `sum` function uses a plain `reduce` that can silently return `Infinity` when accumulating very large values; it should either detect overflow (e.g. `!isFinite(result)`) and throw, or document and guard against the edge case.

---

## src/async.ts

### Line 12 — TODO
```
// TODO: add a timeout wrapper
```
**Interpretation:** A `withTimeout` helper function should be added that races a given `Promise` against a `setTimeout`-based rejection, automatically rejecting with a `TimeoutError` (or similar) after a specified number of milliseconds.

---

## src/dates.ts

### Line 4 — TODO
```
// TODO: respect locale
```
**Interpretation:** The `humanize` function hard-codes English unit suffixes (`s`, `m`, `h`) and should be updated to accept an optional locale parameter (or use `Intl.RelativeTimeFormat`) so that time strings are rendered appropriately for non-English speakers.

---

## src/validation.ts

### Line 7 — TODO
```
// TODO: add isUuid
```
**Interpretation:** A new `isUuid` validator function should be added that uses a regex matching the RFC 4122 UUID format (e.g. `/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i`) to check whether a given string is a valid UUID.

---

## Summary

| # | File | Line | Type | One-sentence interpretation |
|---|------|------|------|-----------------------------|
| 1 | `src/strings.ts` | 6 | TODO | Normalize diacritics via `NFD` decomposition in `slugify` so accented letters map to their ASCII base. |
| 2 | `src/strings.ts` | 12 | FIXME | Update `lines()` to handle `\r\n` (CRLF) line endings, not just `\n`. |
| 3 | `src/errors.ts` | 11 | TODO | Add a `ValidationError` class that carries structured per-field error information. |
| 4 | `src/arrays.ts` | 15 | TODO | Add a `stableSort` helper that preserves the relative order of equal elements. |
| 5 | `src/numbers.ts` | 8 | FIXME | Guard `sum` against silent `Infinity` overflow on large numeric arrays. |
| 6 | `src/async.ts` | 12 | TODO | Add a `withTimeout` wrapper that rejects a promise after a given number of milliseconds. |
| 7 | `src/dates.ts` | 4 | TODO | Make `humanize` locale-aware instead of hard-coding English time-unit suffixes. |
| 8 | `src/validation.ts` | 7 | TODO | Add an `isUuid` validator that checks a string against the RFC 4122 UUID format. |
