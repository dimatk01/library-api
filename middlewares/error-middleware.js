import {HttpError} from "http-errors";
import createHttpError from "http-errors";


const errorMiddleware = (err, req, res, next) => {
    if(err instanceof HttpError){
        return res.status(err.status).json({
            success: false,
            message: err.message,
            errors: err.errors
        });
    }

    return createHttpError(500, 'Internal Server Error');
};

export default errorMiddleware;