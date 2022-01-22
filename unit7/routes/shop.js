//const path = require('path');

const express = require('express');

const router = express.Router();

//const rootDir = require('../util/path')

const productsController = require('../controllers/products');

router.get('/', productsController.getProducts);

module.exports = router;