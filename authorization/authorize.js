const ApiError = require('../errors/api-error');

function authorize(...roles) {
  const allowedRoles = new Set(roles);

  return (req, res, next) => {
    if (!req.session || !req.session.user || !req.session.user.roles) {
      // return unauthorized
      next(ApiError.unauthorized('you are not logged in'));
      return;
    }

    if (!isAuthorized(req.session.user.roles, allowedRoles)) {
      // return forbidden
      next(ApiError.forbidden('forbidden: insufficient priviledges'));
    }

    next();
  };
}

function isAuthorized(userRoles, allowedRoles) {
  // O(n) runtime where n is the amount of roles a user has
  return userRoles.some((role) => allowedRoles.has(role));
}

module.exports = authorize;
