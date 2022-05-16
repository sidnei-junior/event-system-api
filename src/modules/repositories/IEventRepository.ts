import { ICreateEventDTO } from '../dtos/ICreateEventDTO';

interface IEventRepository {
    create(data: ICreateEventDTO): Promise<void>;
}

export { IEventRepository };
