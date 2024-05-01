const httpStatus = require("http-status");
const logger = require("../utils/logger");

const errorMiddleware = (err, req, res, next) => {
    logger.error(err);
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