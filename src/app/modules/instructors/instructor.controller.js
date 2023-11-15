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

const getAllInstructors = asyncTryCatch(async (req, res) => {
    const result = await instructorService.getAllInstructors();
  
    apiResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      data: result,
    });
  });

  const updateInstructorDetails = asyncTryCatch(async (req, res) => {
    const result = await instructorService.updateInstructorDetails(req.params.id, req.body);
  
    apiResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Instructor details updated successfully',
      data: result,
    });
  });
  
  const deleteInstructorById = asyncTryCatch(async (req, res) => {
    await instructorService.deleteInstructorById(req.params.id);
  
    apiResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Instructor deleted successfully',
    });
  });

export const instructorController = {
  addInstructor,
  getAllInstructors,
  updateInstructorDetails,
  deleteInstructorById
};