import mongoose, { Schema } from 'mongoose';

const instructor = new Schema(
  {
    imgURL: {
      type: String,
      required: true,
    },
    prof: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      virtuals: true,
    },
  }
);

const Instructor = mongoose.model('Instructor', instructor);

export default Instructor;
