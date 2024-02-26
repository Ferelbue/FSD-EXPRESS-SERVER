
import "reflect-metadata"
import "dotenv/config"
import { DataSource } from "typeorm"
import { Roles1708945316395 } from "./database/migrations/1708945316395-roles"


export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3307,
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "1234",
    database: process.env.DB_DATABASE || "test",
    entities: [],
    migrations: [Roles1708945316395],
    synchronize: false,
    logging: false,
})





