// basic error for us to extend from for better error handling/logging
export class BasicError extends Error {
  constructor(message: string, code: number = 500) {
    super(`${code}: ${message}`);
  }
}

export class DynamoError extends BasicError {
  constructor(message: string, code: number) {
    super(message, code);
  }
}
