const path = require('path');

const express = require('express');

const router = express.Router();

const rootDir = require('../util/path');

const adminData = require('./admin');

router.get('/', (req, res, next) => {
    const products = adminData.products;
    res.render('shop', {
        prods: products, 
        pageTitle: 'My Shop', 
        path: '/', 
        hasProducts: products.length > 0, 
        productCSS: true, 
        activeShop: true
        //, layout: false * Key that states you don't want the default layout * 
    });
});

module.exports = router;