import { Router } from 'express';
import { eventsRoutes } from './events.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use('/users', usersRoutes);
router.use('/events', eventsRoutes);

export { router };
