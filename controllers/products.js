const Product = require('../models/product');

//exports the middleware function to import the Add Product page.
exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product', 
        path: '/admin/add-product', 
        productCSS: true, 
        formsCSS: true, 
        activeAddProduct: true
    });
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
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
};
