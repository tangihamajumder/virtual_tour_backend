import httpStatus from 'http-status';
import ApiError from '../../errorHandlers/ApiError.js';
import Course from './course.model.js';

const createCourse = async (payload) => {
  await Course.create(payload);
};

const getAllCourses = () => {
  return Course.find();
};

const getCourseById = (id) => {
  return Course.findById(id);
};

const updateCourse = async (id, payload) => {
  const isExist = await Course.findById(id);

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Course not found');
  }

  await Course.findOneAndUpdate({ _id: id }, payload, { new: true });
};

const deleteCourseById = async (id) => {
  await Course.findByIdAndDelete(id);
};

export const courseService = {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourseById,
};
