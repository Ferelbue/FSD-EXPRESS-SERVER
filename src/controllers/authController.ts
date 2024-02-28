import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { User } from "../models/User";


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

        const newUser = await User.create({
            name: name,
            email: email,
            password: passwordEncrypted,
            role: {
                id: 1
            }
            //roleID:2  //dos opciones de meter el rol, dependiendo de si usamos @column @joincolumn
        }).save()




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