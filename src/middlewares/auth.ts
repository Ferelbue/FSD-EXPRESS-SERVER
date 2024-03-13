import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import { TokenData } from "../types";

export const auth = async (req: Request, res: Response, next: NextFunction) => {

    try {

        const token = req.headers.authorization?.split(" ")[1]

        if (!token) {
            return res.status(401).json(
                {
                    success: false,
                    message: "Unauthorized",
                }
            )
        }

        //comprobar si el token es correcto
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET as string
        )

        // Le añade a la request la informacion del token.(La que nosotros hemos decidido en index.d.ts y en la creacion del token(authcontroller.ts))
        req.tokenData = decoded as TokenData

        next();

    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "JWT NO VALID OR MALFORMED",
            }
        )
    }
}

