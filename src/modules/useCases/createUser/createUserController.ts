import { Request, Response } from 'express';
import { UsersRepository } from '../../repositories/UserRepository';

import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      username, email, password,
    } = request.body;
    const usersRepository = new UsersRepository();
    const createUserUseCase = new CreateUserUseCase(usersRepository);

    await createUserUseCase.execute({
      username, email, password,
    });

    return response.status(201).send();
  }
}

export { CreateUserController };