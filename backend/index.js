// Importar el archivo de conexión
const connection = require("./database/connection");
// Importar dependencias express y cors
const express = require("express");
const cors = require("cors");

require('dotenv').config();

// Llamar a la funcion connection() para conectarse a la BBDD
connection(process.env.DB_HOST);

console.log("API ARRANCADA");

const app = express();
const puerto = process.env.PORT || 3900; // Definir puerto en el 3900

// Habilitar CORS con opciones personalizadas
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Importar mi archivo de rutas del User
const User = require("./routes/user");
const Admin = require("./routes/admin");
const Curso = require("./routes/curso");
// Iniciar mi API en el /api
app.use("/api/user", User);
app.use("/api/admin", Admin);
app.use("/api/curso", Curso)
// Escuchar mi servidor en el puerto 3900
app.listen(puerto, function () {
  console.log("Servidor en el puerto: ", puerto);
})