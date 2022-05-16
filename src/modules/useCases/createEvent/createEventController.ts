import { Request, Response } from 'express';
import { EventsRepository } from '../../repositories/EventsRepository';
import { UsersRepository } from '../../repositories/UserRepository';

import { CreateEventUseCase } from './CreateEventUseCase';

class CreateEventController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name, locality, happens_at, userId
    } = request.body;
    const usersRepository = new UsersRepository();
    const eventsRepository = new EventsRepository();
    const createUserUseCase = new CreateEventUseCase(usersRepository, eventsRepository);

    await createUserUseCase.execute({
      name, locality, happens_at, userId
    });

    return response.status(201).send();
  }
}

export { CreateEventController };