
import express from "express";
import { createRoles, deleteRoles, getRoles, updateRoles } from "./controllers/roleController";
import { login, register } from "./controllers/authController";
import { deleteUserById, getUserById, getUsers, updateUserById } from "./controllers/userController";
import { auth } from "./middlewares/auth";
import { isSuperAdmin } from "./middlewares/isSuperAdmin";

export const app = express();


//parsear el texto plano recibido a JSON
app.use(express.json());

//Comprueba si el servidor esta activado
app.get('/healthy', (req, res) => {
    res.status(200).json(
        {
            success: true,
            message: "Server is healthy"
        })
})


// ROLES ROUTES
app.get('/roles', getRoles)
app.post('/roles', createRoles)
app.put('/roles/:id', updateRoles) // los dos puntos indican que lo que pongas a continuacion es dinamico
app.delete('/roles/:id', deleteRoles)

// AUTH ROUTES
app.post('/api/register', register)
app.post('/api/login', login)

// USER ROUTES
app.get('/api/users',getUsers)
app.get('/api/user/:id', auth, isSuperAdmin, getUserById)
app.put('/api/user/:id', updateUserById)
app.delete('/api/user/:id', deleteUserById)


// GET Y DELETE NO ENVIAR PARAMETROS EN BODY. SOLO EN EL ENDPOINT
// PUT Y POST PARAMETROS EN BODY Y EN EL ENDPOINT


