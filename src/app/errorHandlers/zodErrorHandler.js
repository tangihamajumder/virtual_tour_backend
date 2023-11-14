const zodErrorHandler = (error) => {
  const statusCode = 400;
  const errors = error?.issues?.map((issue) => {
    return {
      path: issue.path[issue.path.length - 1],
      message: issue.message,
    };
  });
  return {
    statusCode,
    message: 'Internal Server Error',
    errorMessages: errors,
  };
};

export default zodErrorHandler;
