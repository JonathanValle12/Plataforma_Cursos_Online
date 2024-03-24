const express = require("express");

const router = express.Router();
const Admin = require("../controllers/admin");
const check = require("../middleware/auth");

router.post("/login", Admin.login);
router.get('/profileAdmin/:id', check.auth, Admin.profileAdmin);
router.get("/list-usuarios", check.auth, Admin.listUsuarios);
router.post("/pendiente", check.auth, Admin.pendiente);
router.get("/list-pendientes", check.auth, Admin.listPendientes);
router.get('/list-pendiente/:id', check.auth, Admin.listPendiente);
module.exports = router;