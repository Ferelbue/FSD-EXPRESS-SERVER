import { Request, Response } from "express"

export const getRoles = (req: Request,res: Response) => {

    res.status(200).json(
        {
            success: true,
            message: "Roles retrieve succesfully"
        })
}

export const createRoles = (req: Request,res: Response) => {

    res.status(201).json(
        {
            success: true,
            message: "Roles created succesfully"
        })
}
export const updateRoles = (req: Request,res: Response) => {

    res.status(200).json(
        {
            success: true,
            message: "Roles updated succesfully"
        })
}
export const deleteRoles = (req: Request,res: Response) => {

    res.status(200).json(
        {
            success: true,
            message: "Roles deleted succesfully"
        })
}