import { ICreateEventDTO } from '../dtos/ICreateEventDTO';
import { Event } from '../entities';

interface IEventRepository {
    create(data: ICreateEventDTO): Promise<void>;
    list(): Promise<Event[]>;
}

export { IEventRepository };
