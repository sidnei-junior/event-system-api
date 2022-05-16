import { Router } from 'express';
import { ensureIsAdminUser } from '../middlewares/ensureIsAdminUser';
import { CreateEventController } from '../modules/useCases/createEvent/createEventController';
import { ListEventsController } from '../modules/useCases/listEvents/ListEventsController';

const eventsRoutes = Router();

const listEventsController = new ListEventsController();
const createEventController = new CreateEventController();

eventsRoutes.get('/', listEventsController.handle);
eventsRoutes.post('/adm/', ensureIsAdminUser, createEventController.handle);


export { eventsRoutes };
