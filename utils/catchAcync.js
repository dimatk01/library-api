const logger = require('./logger');

const catchAsync = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((err) => {
    logger.error(err?.message);
    next(err);
  });
};

module.exports = catchAsync;
