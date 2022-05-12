import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
    "type": "postgres",
    "port": 5432,
    "host": "0.0.0.0",
    "username": "eventsystem",
    "password": "event123",
    "database": "event_system",
    "entities": ["./src/modules/entities/*.ts"],
    "migrations": ["./src/database/migrations/*.ts"],
}); 

export default AppDataSource