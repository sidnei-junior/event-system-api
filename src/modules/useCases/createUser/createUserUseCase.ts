import { hash } from 'bcryptjs';
import { AppError } from '../../../errors/AppError';

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';

class CreateUserUseCase {
  constructor(
        private usersRepository: IUsersRepository,
  ) {}

  async execute({
    username, password, email
  }: ICreateUserDTO): Promise<void> {
    const emailAlreadyRegistered = await this.usersRepository.findByEmail(email);

    if (emailAlreadyRegistered) {
      throw new AppError('Email already registered!');
    }

    const usernameAlreadyExists = await this.usersRepository.findByUsername(username);
    
    if (usernameAlreadyExists) {
        throw new AppError('Username already exists!', 412);
    }

    const passwordHash = await hash(password, 10);

    await this.usersRepository.create({
      username,
      password: passwordHash,
      email
    });
  }
}

export { CreateUserUseCase };
