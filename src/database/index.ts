import { DataSource } from "typeorm";
import { Event, Ticket, User } from "../modules/entities";

const AppDataSource = new DataSource({
    type: "postgres",
    port: 5432,
    host: "event_system_db",
    username: "eventsystem",
    password: "event123",
    database: "event_system",
    synchronize: true,
    logging: false,
    entities: [Event, Ticket, User],
    migrations: ["./src/database/migrations/*.ts"],
    subscribers: [],
}); 

const connection = AppDataSource.initialize()

export default AppDataSource