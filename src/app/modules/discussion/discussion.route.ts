/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { DiscussionController } from './discussion.controller';

const router = Router();

router.get('/', DiscussionController.getDiscussions);

export const DiscussionRoutes = router;
