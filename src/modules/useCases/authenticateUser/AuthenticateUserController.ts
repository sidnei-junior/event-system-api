import { Request, Response } from 'express';
import 'reflect-metadata';
import { UsersRepository } from '../../repositories/UserRepository';

import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { password, username } = request.body;

    const userRepository = new UsersRepository()
    const authenticateUserUseCase = new AuthenticateUserUseCase(userRepository);

    const token = await authenticateUserUseCase.execute({ username, password });

    return response.json(token);
  }
}

export { AuthenticateUserController };
