import httpStatus from 'http-status';
import asyncTryCatch from '../../../shared/asyncTryCatch.js';
import apiResponse from '../../../shared/reponse.js';
import { authService } from './auth.service.js';

const signUp = asyncTryCatch(async (req, res) => {
  const result = await authService.signUp(req.body);

  apiResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created successfully',
    data: result,
  });
});

export const authController = {
  signUp,
  // signIn,
};
