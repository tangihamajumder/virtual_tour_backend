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

const signIn = asyncTryCatch(async (req, res) => {
  console.log('req', req.body);
  const result = await authService.signIn(req.body);

  apiResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User logged in successfully',
    data: result.accessToken,
  });
});

export const authController = {
  signUp,
  signIn,
};
