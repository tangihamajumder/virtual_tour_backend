import bcrypt from 'bcrypt';
import mongoose, { Schema } from 'mongoose';
import config from '../../../config';

const user = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    role: {
      type: String,
      required: true,
      default: 'user',
    },
    contactNo: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      virtuals: true,
    },
  }
);

user.static('isUserExist', async function (email) {
  return User.findOne({ email }).select(
    'firstName lastName email role contactNo password houseNo roadNo floor area'
  );
});

user.static('isPasswordMatched', async function (givenPass, savedPass) {
  return bcrypt.compare(givenPass, savedPass);
});

user.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, Number(config.salt_round));
  next();
});

const User = mongoose.model('User', user);

export default User;
