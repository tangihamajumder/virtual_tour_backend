import express from 'express';
import { authRoutes } from '../app/modules/auth/auth.routes.js';
import { crouseRoutes } from '../app/modules/course/course.routes.js';
import { instructorRoutes } from '../app/modules/instructors/instructor.routes.js';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/courses',
    route: crouseRoutes,
  },
  {
    path: '/instructors',
    route: instructorRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
