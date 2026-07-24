/** Base error carrying a machine-readable code. */
export class CodedError extends Error {
  // Expanded from a TypeScript parameter property so Node's --experimental-strip-types
  // (strip-only mode) can load this file — parameter properties are TS-specific
  // syntax that strip-only mode does not support.
  code: string;
  constructor(code: string, message: string) {
    super(message);
    this.code = code;
    this.name = "CodedError";
  }
}
export class NotFoundError extends CodedError {
  constructor(what: string) { super("not_found", `${what} not found`); }
}
// TODO: add a ValidationError with field paths
