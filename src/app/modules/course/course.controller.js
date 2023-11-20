import httpStatus from 'http-status';
import asyncTryCatch from '../../../shared/asyncTryCatch.js';
import apiResponse from '../../../shared/reponse.js';
import { courseService } from './course.service.js';

const createCourse = asyncTryCatch(async (req, res) => {
  await courseService.createCourse(req.body);

  apiResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course created successfully',
  });
});

const getAllCourses = asyncTryCatch(async (req, res) => {
  const result = await courseService.getAllCourses();

  apiResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    data: result,
  });
});

const getCourseById = asyncTryCatch(async (req, res) => {
  const result = await courseService.getCourseById(req.params.id);

  apiResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    data: result,
  });
});

const updateCourse = asyncTryCatch(async (req, res) => {
  const result = await courseService.updateCourse(req.params.id, req.body);

  apiResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course updated successfully',
    data: result,
  });
});

const deleteCourseById = asyncTryCatch(async (req, res) => {
  await courseService.deleteCourseById(req.params.id);

  apiResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course deleted successfully',
  });
});

export const courseController = {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourseById,
};
