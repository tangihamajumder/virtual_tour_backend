import express from 'express';
import { authRoutes } from '../app/modules/auth/auth.routes.js';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/sign-up',
    route: authRoutes,
  },
  {
    path: '/signin',
    route: authRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
