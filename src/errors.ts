/** Base error carrying a machine-readable code. */
export class CodedError extends Error {
  constructor(public code: string, message: string) {
    super(message);
    this.name = "CodedError";
  }
}
/** Error thrown when a requested resource does not exist. */
export class NotFoundError extends CodedError {
  constructor(what: string) { super("not_found", `${what} not found`); }
}
// TODO: add a ValidationError with field paths
