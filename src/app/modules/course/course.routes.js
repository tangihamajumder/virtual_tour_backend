import express from 'express';
import zodValidationHandler from '../../middlewares/zodValidationHandler.js';
import { courseController } from './course.controller.js';
import createCourse from './course.validation.js';

const router = express.Router();

router.post(
  '/create-course',
  zodValidationHandler(createCourse),
  courseController.createCourse
);
router.get('/all-courses', courseController.getAllCourses);
router.get('/:id', courseController.getCourseById);
router.patch('/update-course/:id', courseController.updateCourse);
router.delete('/:id', courseController.deleteCourseById);

export const crouseRoutes = router;
