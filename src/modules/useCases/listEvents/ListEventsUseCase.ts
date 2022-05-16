import { Event } from "../../entities";
import { IEventRepository } from "../../repositories/IEventRepository";

class ListEventsUseCase {
    constructor(
        private eventRepository: IEventRepository,
    ) { }

    async execute(): Promise<Event[]> {
        const events = await this.eventRepository.list();
        return events
    }
}

export { ListEventsUseCase }