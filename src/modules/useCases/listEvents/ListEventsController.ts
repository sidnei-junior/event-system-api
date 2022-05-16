import { Request, Response } from "express";
import { EventsRepository } from "../../repositories/EventsRepository";
import { ListEventsUseCase } from "./listEventsUseCase";

class ListEventsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const eventsRepository = new EventsRepository();
        const listEventsUseCase = new ListEventsUseCase(eventsRepository);
        const events = await listEventsUseCase.execute()
        return response.json(events)
    }
}

export { ListEventsController }