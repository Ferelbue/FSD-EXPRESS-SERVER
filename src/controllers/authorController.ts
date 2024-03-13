import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/User";

// CREATE
export const register = async (req: Request, res: Response) => {

    try {
        
        // Respondemos
        res.status(201).json(
            {
                success: false,
                message: "Created author uccessfully"
            }
        )

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Arthor cant be created",
            error: error
        })
    }
}

export const login = async (req: Request, res: Response) => {

    try {
        //Recuperar la info
        const email = req.body.email;
        const password = req.body.password;

        //Validadicon de email y password
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are needed"
            })
        }

        // Todo validar formato email

        // buscar usuario en BD

        const user = await User.findOne(
            {
                where: {
                    email: email
                }, // hasta aqui me devuelve todo el usuario sin las relaciones

                relations: {
                    role: true
                },// hasta aqui me devuelve usuario con l¡toda la tabla de relaciones

                select: {
                    id: true,
                    password: true,
                    email: true,
                    role: {
                        id: true,
                        name: true,
                    }
                }// Hasta aqui me trae lo que yo le especifico tanto en user como en la tabla de relacciones
            }
        )

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Email or password invalid",
            })
        }


        const invalidPAssword = bcrypt.compareSync(password, user.password)

        if (!invalidPAssword) {
            return res.status(400).json({
                success: false,
                message: "Email or password invalid",
            })

        }
//////////////////////create TOKEN/////////////////////////////
        const token = jwt.sign(
            {
                userId: user.id,
                roleName: user.role.name
            },
            process.env.JWT_SECRET as string,
            {
                expiresIn: "2h"
            }
        )

        res.status(200).json({
            success: true,
            message: "User logged",
            token: token
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "User cant be logged",
            error: error
        })
    }
}