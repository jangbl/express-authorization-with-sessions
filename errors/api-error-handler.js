const ApiError = require('./api-error');

function apiErrorHandler(err, req, res, next) {
  // in prod, do not use console.log or console.error / console.ward
  // because not async
  console.error(err);

  if (err instanceof ApiError) {
    res.status(err.code).json(err.message);
    return;
  }

  res.status(500).json('something went wrong');
}

module.exports = apiErrorHandler;
