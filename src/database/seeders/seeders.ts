import { Role } from "../../models/Role";
import { AppDataSource } from "../db";

const roleSeedDatabase = async () => {
    try {
        await AppDataSource.initialize();

        const roleUser = new Role();
        roleUser.name = "user"
        await roleUser.save();

        const roleAdmin = new Role();
        roleAdmin.name = "admin"
        await roleAdmin.save();

        const roleSuperAdmin = new Role();
        roleSuperAdmin.name = "super-admin"
        await roleSuperAdmin.save();

        console.log("creados")
        
    } catch (error) {
        console.log(error);

    } finally {
        await AppDataSource.destroy()
    }
}

roleSeedDatabase();

