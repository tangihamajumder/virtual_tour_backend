import httpStatus from "http-status";
import config from "../../../config/index.js";
import { jwtHelpers } from "../../../helper/jwtHelper.js";
import ApiError from "../../errorHandlers/ApiError.js";
import User from "../user/user.model.js";

const signUp = async (payload) => {
  const { email } = payload;
  const isUserExist = await User.isUserExist(email);

  if (isUserExist)
    throw new ApiError(
      httpStatus.NOT_FOUND,
      'User is already exist with this email.'
    );
  const newUser = await User.create(payload);
  return User.findById(newUser._id);
};

const signIn = async (payload) => {
    const { email, password } = payload;
    const isUserExist = await User.isUserExist(email);
  
    if (!isUserExist) {
      throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
    }
  
    if (
      isUserExist.password &&
      !(await User.isPasswordMatched(password, isUserExist.password))
    ) {
      throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect');
    }
  
    const { email: user, role, id } = isUserExist;
  
    const accessToken = jwtHelpers.createToken(
      { user, role, id },
      config.jwt.expires_in
    );
  
    return {
      accessToken,
    };
  };

export const authService = {
  signUp,
  signIn,
};
