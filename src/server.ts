
import express from "express";
import dotenv from "dotenv";
import { createRoles, deleteRoles, getRoles, putRoles } from "../controllers/roleController";

dotenv.config();

const app = express()

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`)
})

app.get('/healthy', (req,res) => {

    res.status(200).json(
    {
        success: true,
        message: "Server is healthy"
    })
})


// ROLES RUTES

app.get('/roles', getRoles)
app.post('/roles', createRoles)
app.put('/roles', putRoles)
app.delete('/roles', deleteRoles)
