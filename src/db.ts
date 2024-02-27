
import "reflect-metadata"
import "dotenv/config"
import { DataSource } from "typeorm"
import { Roles1708945316395 } from "./database/migrations/1708945316395-roles"
import { Users1708948573797 } from "./database/migrations/1708948573797-users"
import { Authors1708949932472 } from "./database/migrations/1708949932472-authors"
import { Books1708950463093 } from "./database/migrations/1708950463093-books"
import { Loans1708951036421 } from "./database/migrations/1708951036421-loans"
import { FavoriteBooks1708952083087 } from "./database/migrations/1708952083087-favorite_books"
import { AddIsActiveColumnToUsers1709024942422 } from "./database/migrations/1709024942422-add_is_active_column_to_users"
import { Role } from "./models/Role"
import { User } from "./models/User"


export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3307,
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "1234",
    database: process.env.DB_DATABASE || "test",
    entities: [
        Role,
        User],
    migrations: [
        Roles1708945316395, 
        Users1708948573797,
        Authors1708949932472,
        Books1708950463093,
        Loans1708951036421,
        FavoriteBooks1708952083087,
        AddIsActiveColumnToUsers1709024942422],
    synchronize: false,
    logging: false,
})





