import { Router } from 'express';
import { AuthenticateUserController } from '../modules/useCases/authenticateUser/AuthenticateUserController';
import { CreateUserController } from '../modules/useCases/createUser/createUserController';

const usersRoutes = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

usersRoutes.post('/', createUserController.handle);
usersRoutes.post('/auth/', authenticateUserController.handle);

export { usersRoutes };
