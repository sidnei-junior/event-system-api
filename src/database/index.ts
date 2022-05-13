import { DataSource } from "typeorm";
import { User } from "../modules/entities/User";

const AppDataSource = new DataSource({
    type: "postgres",
    port: 5432,
    host: "event_system_db",
    username: "eventsystem",
    password: "event123",
    database: "event_system",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
}); 

const connection = AppDataSource.initialize()

export default AppDataSource