class ApiError {
  constructor(code, message) {
    this.code = code;
    this.message = message;
  }

  static unauthorized(msg) {
    return new ApiError(401, message);
  }

  static forbidden(msg) {
    return new ApiError(403, msg);
  }
}

module.exports = ApiError;
