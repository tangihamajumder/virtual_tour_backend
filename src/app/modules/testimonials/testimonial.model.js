import mongoose, { Schema } from 'mongoose';

const testimonial = new Schema(
  {
    imgURL: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    about: {
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

const Testimonial = mongoose.model('Testimonial', testimonial);

export default Testimonial;
