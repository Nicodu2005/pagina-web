var express = require('express');
var router = express.Router();
var productController = require ("../controllers/ProductosController");
const productIdController = require('../controllers/ProductoIdcontroller');

/* GET home page. */
router.get('/product',productController);
router.get('/producto/:id_producto',productIdController);

module.exports = router;
