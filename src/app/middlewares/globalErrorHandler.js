import config from '../../config/index.js';
import ApiError from '../errorHandlers/ApiError.js';
import castErrorHandler from '../errorHandlers/castErrorHandler.js';
import validationErrorHandler from '../errorHandlers/validationErrorHandler.js';
import zodErrorHandler from '../errorHandlers/zodErrorHandler.js';

const globalErrorHandler = (error, req, res, next) => {
  let statusCode = 500;
  let message = 'Internal Server Error';
  let errorMessages = [];

  if (error?.name === 'ValidationError') {
    const validationError = validationErrorHandler(error);
    statusCode = validationError.statusCode;
    message = validationError.message;
    errorMessages = validationError.errorMessages;
  } else if (error) {
    const zodError = zodErrorHandler(error);
    statusCode = zodError?.statusCode;
    message = zodError?.message;
    errorMessages = zodError?.errorMessages;
  } else if (error instanceof ApiError) {
    statusCode = error?.statusCode;
    message = error?.message;
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error.message,
          },
        ]
      : [];
  } else if (error?.name === 'CastError') {
    const castError = castErrorHandler(error);
    statusCode = castError?.statusCode;
    message = castError?.message;
    errorMessages = castError?.message
      ? [
          {
            path: 'CastError',
            message: castError.message,
          },
        ]
      : [];
  } else if (error instanceof Error) {
    message = error?.message;
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error.message,
          },
        ]
      : [];
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.env !== 'production' ? error?.stack : undefined,
  });

  next();
};

export default globalErrorHandler;
