import express from "express"
import sumar from "./funciones.js"
import cors from "cors";
import { router } from "./routes/routes.js"

const app = express()
app.use(cors())
app.use(express.json())

app.use('/usuarios',router);

app.get('/',(req,res) => {
    res.send('Ejemplo de mi servidor de pagina wed ')
})

app.get('/inicio',(req,res) => {
    res.send('Esta es mi pagina de inicio  ')
})

app.get('/correo',(req,res) => {
    res.send('Esta es mi pagina de correo  ')
})

app.listen(9000, ()=> {
    console.log('Servidor Corriendo en http://localhost:9000/')
})

var nombre = "Maria"
console.log(nombre)
console.log(sumar(10,20))