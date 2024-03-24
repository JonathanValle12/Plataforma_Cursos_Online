// Definir dependencias de express para declarar las rutas de mi API
const express = require("express");
const router = express.Router();
const check = require("../middleware/auth");
// Importar el modelo curso
const Curso = require("../controllers/curso")

// Dependencia para la subida de archivos
const multer = require("multer");

// Dentro del storage, definir el multer y guardarlo dentro de mi disco en la ruta que se le pasa "./uploads/curriculums/"
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.fieldname === "imagen") {
            cb(null, "./uploads/cursos/");
        } else if (file.fieldname === "video") {
            cb(null, "./uploads/videos/");
        }else if(file.fieldname === "pdf") {
            cb(null, "./uploads/docs/");
        }
    },
    // El nombre del archivo se guarda con la estructura como "curriculum" y la fecha en la que se crea "-" y el nombre del archivo 
    filename: (req, file, cb) => {
        const fileName = `${file.fieldname}-${Date.now()}-${file.originalname}`;
        cb(null, fileName);
    }
})
const upload = multer({storage});

router.get("/mostrar-cursos", Curso.mostrarCursos)
router.get("/mostrar-curso/:id", Curso.mostrarCurso)
router.post("/crear-curso", [check.auth, upload.fields([{ name: "imagen" }, { name: "video" }, {name: "pdf"}])], Curso.crearCurso)
router.get("/visualizar-imagen/:file", Curso.visualizarImagen);
router.get("/visualizar-docs/:file", Curso.visualizarDocs);
router.get("/visualizar-video/:file", Curso.visualizarVideo);
router.post("/comentario/:id", check.auth, Curso.añadirComentario);
router.get('/comentarios/:id', Curso.mostrarComentarios);
router.delete('/:idCurso/comentario/:idComentario', Curso.eliminarComentario);
router.post("/rating/:id", check.auth, Curso.añadirRating);
router.get('/rating/:id', check.auth, Curso.obtenerRating);


// Exportar el modulo router
module.exports = router; 