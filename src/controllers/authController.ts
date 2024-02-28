import { Request, Response } from "express";

export const register = (req: Request, res: Response) => {

    try {

        const email = req.body.email;
        const password = req.body.password;
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