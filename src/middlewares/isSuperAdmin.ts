import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import { TokenData } from "../types";

export const isSuperAdmin = async (req: Request, res: Response, next: NextFunction) => {

    try {
        if(req.tokenData.roleName !== 'super-admin'){
        return res.status(401).json(
            {
                success: false,
                message: "UNAUTHORIZED",
            }
        )
        }

     next();
     
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "You dont have permitions",
            }
        )
    }
}
