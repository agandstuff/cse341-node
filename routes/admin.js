const path = require('path');

const express = require('express');

const router = express.Router();

const productsController = require('../controllers/products');

//const rootDir = require('../util/path');

//routes below are accessed through /admin/add-product (=> get) & /admin/product (=> POST)
router.get('/add-product', productsController.getAddProduct);

//.post will only respond to post requests
router.post('/product', productsController.postAddProduct);

module.exports = router;
