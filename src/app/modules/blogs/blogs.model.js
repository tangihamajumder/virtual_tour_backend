import mongoose, { Schema } from 'mongoose';

const blog = new Schema(
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

const Blog = mongoose.model('Blog', blog);

export default Blog;
