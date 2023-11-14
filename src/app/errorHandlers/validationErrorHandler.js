const validationErrorHandler = (err) => {
  const errors = Object.values(err.errors).map((element) => {
    return {
      path: element?.path,
      message: element?.message,
    };
  });
  const statusCode = 400;
  return {
    message: 'Validation Error',
    statusCode,
    errorMessages: errors,
  };
};

export default validationErrorHandler;
