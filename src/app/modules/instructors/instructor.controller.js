import httpStatus from 'http-status';
import asyncTryCatch from '../../../shared/asyncTryCatch.js';
import apiResponse from '../../../shared/reponse.js';
import { instructorService } from './instructor.service.js';

const addInstructor = asyncTryCatch(async (req, res) => {
  await instructorService.addInstructor(req.body);

  apiResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Instructor added successfully',
  });
});

export const instructorController = {
  addInstructor,
};