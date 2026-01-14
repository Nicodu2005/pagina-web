var express = require("express");
var router = express.Router();
var loginController = require ("../controllers/LoginControler");

router.post("/iniciarsesion",loginController);

module.exports = router;
