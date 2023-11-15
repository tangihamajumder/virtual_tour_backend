import express from 'express';
import { instructorController } from './instructor.controller.js';

const router = express.Router();

router.post(
  '/add-instructor',
  instructorController.addInstructor
);
// router.get('/all-courses', courseController.getAllCourses);
// router.patch('/update-course/:id', courseController.updateCourse);
// router.delete('/:id', courseController.deleteCourseById);

export const instructorRoutes = router;