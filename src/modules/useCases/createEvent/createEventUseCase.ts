import { hash } from 'bcryptjs';
import { AppError } from '../../../errors/AppError';

import { ICreateEventDTO } from '../../dtos/ICreateEventDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { IEventRepository } from '../../repositories/IEventRepository';

class CreateEventUseCase {
  constructor(
        private usersRepository: IUsersRepository,
        private eventRepository: IEventRepository,
  ) {}

  async execute({
    name, locality, happens_at, userId
  }: ICreateEventDTO): Promise<void> {
    const user = await this.usersRepository.findById(userId);

    if (!user) {
      throw new AppError('Admin User not registered!');
    }

    await this.eventRepository.create({
        name, 
        locality, 
        happens_at, 
        user
    });
  }
}

export { CreateEventUseCase };
