
const catchAsync = (fn, errorMessage) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch((err) => {
        next(errorMessage? errorMessage : err)
    });
};

module.exports = catchAsync;