const express = require("express");
const router = express.Router();
const usuarioscontroller = require("../controllers/usuarioscontrollers.js");

router.get("/",estudiantescontroller.consultar);
router.post("/",estudiantescontroller.ingresar);

/* Ejemplo con parámetros */
router.route("/:id")
.get(usuarioscontroller.consultarDetalle)
.put(usuarioscontroller.actualizar)
.delete(usuarioscontroller.borrar);


module.exports = router;
