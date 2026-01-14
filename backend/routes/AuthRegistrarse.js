var express = require('express');
var router = express.Router();
var RegisterController = require ("../controllers/RegisterController")
const Authjwt = require("../middlewares/Authjwt")
/* GET home page. */
router.post('/registro',RegisterController);

module.exports = router;
