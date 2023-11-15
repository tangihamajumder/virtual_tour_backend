import Blog from './blogs.model.js';

const addBlogs = async (payload) => {
  await Blog.create(payload);
};

const getAllBlogs = () => {
  return Blog.find();
};

export const blogService = {
  addBlogs,
  getAllBlogs,
};
