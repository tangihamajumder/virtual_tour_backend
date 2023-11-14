const apiResponse = (res, data) => {
  const responseData = {
    statusCode: data.statusCode,
    success: data.success,
    message: data.message,
    data: data.data || null,
  };
  res.status(data.statusCode).json(responseData);
};

export default apiResponse;
