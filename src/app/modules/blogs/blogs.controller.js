import httpStatus from 'http-status';
import asyncTryCatch from '../../../shared/asyncTryCatch.js';
import apiResponse from '../../../shared/reponse.js';
import { blogService } from './blogs.service.js';

const addBlogs = asyncTryCatch(async (req, res) => {
  await blogService.addBlogs(req.body);

  apiResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog added successfully',
  });
});

const getAllBlogs = asyncTryCatch(async (req, res) => {
  const result = await blogService.getAllBlogs();

  apiResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    data: result,
  });
});

export const blogController = {
  addBlogs,
  getAllBlogs,
};
