
import express from "express";
import dotenv from "dotenv";
import { createRoles, deleteRoles, getRoles, updateRoles } from "../controllers/roleController";

dotenv.config();

const app = express();

app.use(express.json());

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
app.put('/roles/:id', updateRoles) // los dos puntos indican que lo que pongas a continuacion es dinamico
app.delete('/roles/:id', deleteRoles)
