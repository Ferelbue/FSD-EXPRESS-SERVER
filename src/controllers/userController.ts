import { Request, Response } from "express"
import { User } from "../models/User"

export const getUsers = async (req: Request, res: Response) => {
    try {
        //Consultar en base de datos
        const users = await User.find(
            {
                select: {
                    id: true,
                    name: true,
                    email: true,
                    createdAt: true,
                    updatedAt: true
                }
            }
        );


        res.status(200).json(
            {
                success: true,
                message: "User retrieved successfully",
                data: users
            }
        )

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Users cant be retrieved",
            error: error
        })
    }



}