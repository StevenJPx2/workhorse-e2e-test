# TODO / FIXME Inventory

Auto-generated from `src/` on 2026-07-23. Every `TODO` and `FIXME` comment is listed below.

| # | File | Tag | Exact comment text | Interpretation |
|---|------|-----|--------------------|----------------|
| 1 | `src/strings.ts:6` | TODO | `// TODO: strip diacritics before slugifying` | The `slugify` function needs Unicode diacritic normalization (e.g. `é → e`) applied before lowercasing and stripping non-ASCII characters. |
| 2 | `src/strings.ts:12` | FIXME | `// FIXME: this does not handle CRLF` | The `lines` function splits only on `\n`, so Windows-style `\r\n` line endings are not handled correctly and `\r` will bleed into returned strings. |
| 3 | `src/arrays.ts:15` | TODO | `// TODO: add a stable sort helper` | A new exported utility function is needed that sorts arrays while preserving the relative order of elements that compare as equal (stable sort). |
| 4 | `src/async.ts:12` | TODO | `// TODO: add a timeout wrapper` | A new async utility is needed that wraps a `Promise` and rejects it with a timeout error if it does not settle within a configurable deadline. |
| 5 | `src/errors.ts:11` | TODO | `// TODO: add a ValidationError with field paths` | A `ValidationError` subclass needs to be implemented that carries structured per-field error paths to support precise validation failure reporting. |
| 6 | `src/validation.ts:7` | TODO | `// TODO: add isUuid` | An `isUuid` predicate function needs to be added for validating whether a string conforms to the UUID format. |
| 7 | `src/dates.ts:4` | TODO | `// TODO: respect locale` | The `humanize` function currently uses hard-coded English abbreviations and should be updated to format durations according to the user's locale. |
| 8 | `src/numbers.ts:8` | FIXME | `// FIXME: sum overflows silently on large arrays` | The `sum` function silently returns `Infinity` or loses numeric precision for very large inputs; it should detect overflow and throw or otherwise guard against it. |
