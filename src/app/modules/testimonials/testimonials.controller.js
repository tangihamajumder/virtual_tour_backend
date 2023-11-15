import httpStatus from 'http-status';
import asyncTryCatch from '../../../shared/asyncTryCatch.js';
import apiResponse from '../../../shared/reponse.js';
import { testimonialService } from './testimonials.service.js';

const addTestimonials = asyncTryCatch(async (req, res) => {
  await testimonialService.addTestimonials(req.body);

  apiResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Testimonials added successfully',
  });
});

const getAllTestimonials = asyncTryCatch(async (req, res) => {
  const result = await testimonialService.getAllTestimonials();

  apiResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    data: result,
  });
});

export const testimonialController = {
  addTestimonials,
  getAllTestimonials,
};
