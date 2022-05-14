import { DataSource } from "typeorm";
import { Event, Ticket, User } from "../modules/entities";

export default new DataSource({
    type: "postgres",
    port: 5432,
    host: "localhost",
    username: "eventsystem",
    password: "event123",
    database: "event_system",
    synchronize: true,
    logging: false,
    entities: [Event, Ticket, User],
    migrations: ["./src/database/migrations/*.ts"],
    subscribers: [],
}); 