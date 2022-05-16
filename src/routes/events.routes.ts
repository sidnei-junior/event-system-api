import { Router } from 'express';
import { ensureIsAdminUser } from '../middlewares/ensureIsAdminUser';
import { CreateEventController } from '../modules/useCases/createEvent/createEventController';

const eventsRoutes = Router();

const createEventController = new CreateEventController();

eventsRoutes.post('/adm/', ensureIsAdminUser, createEventController.handle);

export { eventsRoutes };
