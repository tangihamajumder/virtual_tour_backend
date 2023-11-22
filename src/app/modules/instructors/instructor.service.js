import httpStatus from 'http-status';
import ApiError from '../../errorHandlers/ApiError.js';
import Instructor from './instructor.model.js';

const addInstructor = async (payload) => {
  await Instructor.create(payload);
};

const getAllInstructors = () => {
  return Instructor.find();
};

const getInstructorById = (id) => {
  return Instructor.findById(id);
};

const updateInstructorDetails = async (id, payload) => {
  const isExist = await Instructor.findById(id);

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Course not found');
  }

  await Instructor.findOneAndUpdate({ _id: id }, payload, { new: true });
};

const deleteInstructorById = async (id) => {
    await Instructor.findByIdAndDelete(id);
  };

export const instructorService = {
  addInstructor,
  getAllInstructors,
  getInstructorById,
  updateInstructorDetails,
  deleteInstructorById
};
