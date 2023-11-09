import { Router } from 'express';
import { DiscussionRoutes } from '../modules/discussion/discussion.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/discussion',
    route: DiscussionRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
