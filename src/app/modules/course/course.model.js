import mongoose, { Schema } from 'mongoose';

const course = new Schema(
  {
    imgURL: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    prof: {
      type: String,
      required: true,
    },
    students: {
      type: String,
      required: true,
    },
    desc: {
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

const Course = mongoose.model('Course', course);

export default Course;
