const castErrorHandler = (error) => {
  const statusCode = 400;
  const errors = [
    {
      path: error.path,
      message: 'Invalid ID',
    },
  ];
  return {
    message: 'Cast Error',
    statusCode,
    errorMessages: errors,
  };
};

export default castErrorHandler;
