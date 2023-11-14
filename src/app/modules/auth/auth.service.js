import httpStatus from "http-status";
import ApiError from "../../errorHandlers/ApiError";
import User from "../user/user.model";

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

export const authService = {
  signUp,
//   signIn,
};
