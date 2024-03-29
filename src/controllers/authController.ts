import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/User";

// CREATE
export const register = async (req: Request, res: Response) => {

    try {

        const email = req.body.email;
        const password = req.body.password;
        const name = req.body.name;
        // const { email, password } = req.body


        //validacion password
        if (password.length < 6 || password.length > 10) {
            return res.status(400).json({
                success: false,
                message: "Incorrect password, min 6 max 10 characters"
            })

        }

        //validacion email
        const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if (!validEmail.test(email)) {
            return res.status(400).json(
                {
                    success: false,
                    message: "format email invalid"
                }
            )
        }

        // tratamos la data si fuese necesario 
        const passwordEncrypted = bcrypt.hashSync(password, 8)

        //comprobamos que se genera la contraseña encryptada
        console.log(passwordEncrypted)

        // guardamos en BD
        const newUser = await User.create({
            name: name,
            email: email,
            password: passwordEncrypted,
            role: {
                id: 1
            }
        }).save()

        // Respondemos
        res.status(201).json(
            {
                success: false,
                message: "User registered successfully"
            }
        )

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "User cant be created",
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