const path = require('path');

const express = require('express');

const router = express.Router();

const rootDir = require('../util/path');

//routes below are accessed through /admin/add-product (=> get) & /admin/product (=> POST)
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

//.post will only respond to post requests
router.post('/product',(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;