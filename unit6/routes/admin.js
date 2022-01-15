const path = require('path');

const express = require('express');

const router = express.Router();

//const rootDir = require('../util/path');

const products = [];

//routes below are accessed through /admin/add-product (=> get) & /admin/product (=> POST)
router.get('/add-product', (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product', 
        path: '/admin/add-product', 
        productCSS: true, 
        formsCSS: true, 
        activeProduct: true});
});

//.post will only respond to post requests
router.post('/product',(req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
});

exports.routes = router;
exports.products = products;
