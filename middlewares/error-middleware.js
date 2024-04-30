const httpStatus = require("http-status");

const errorMiddleware = (err, req, res, next) => {
    if(err?.status) {
        return res.status(err.status).json({
            success: false,
            message: err.message,
            errors: err.errors
        });
    }
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({success: false, message: "Internal Server Error"});
};

module.exports= errorMiddleware;