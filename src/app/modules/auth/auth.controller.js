import httpStatus from 'http-status';
import asyncTryCatch from '../../../shared/asyncTryCatch';
import apiResponse from '../../../shared/reponse';
import { authService } from './auth.service';

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
