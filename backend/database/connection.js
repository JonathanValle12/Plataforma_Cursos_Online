const db = require("mongoose");

const connection = async(url) => {

    try {

        await db.connect(url);

        console.log("Conexion exitosa");

    }catch(error) {
        throw new Error("No se ha podido conectar a la BBDD: ", error);
    }
}

module.exports = connection;