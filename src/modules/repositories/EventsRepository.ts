import { Repository } from "typeorm";
import AppDataSource from "../../database";
import { ICreateEventDTO } from '../dtos/ICreateEventDTO';
import { Event } from "../entities";
import { IEventRepository } from './IEventRepository';

class EventsRepository implements IEventRepository {
  private repository: Repository<Event>;

  constructor() {
    this.repository = AppDataSource.getRepository(Event);
  }


  async create({
    name, locality, happens_at, user,
  }: ICreateEventDTO): Promise<void> {

    const event = this.repository.create({
      name,
      locality,
      happens_at,
      user
    });

    await this.repository.save(event);
  }
}

export { EventsRepository };
