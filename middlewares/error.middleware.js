const httpStatus = require('http-status');
const logger = require('../utils/logger');
const HttpError = require('../utils/httpError');

const errorMiddleware = (err, req, res, next) => {
  if (err instanceof HttpError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      errors: err.errors,
    });
  }
  logger.error(err?.message);
  return res
    .status(httpStatus.INTERNAL_SERVER_ERROR)
    .json({ success: false, message: 'Internal Server Error' });
};

module.exports = errorMiddleware;
