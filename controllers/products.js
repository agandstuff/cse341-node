const Product = require('../models/product');

//exports the middleware function to import the Add Product page.
exports.getAddProductPage = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product', 
        path: '/admin/add-product', 
        productCSS: true, 
        formsCSS: true, 
        activeProduct: true
    });
}

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll();
    res.render('shop', {
        prods: products, 
        pageTitle: 'My Shop', 
        path: '/', 
        hasProducts: products.length > 0, 
        productCSS: true, 
        activeShop: true
        //, layout: false * Key that states you don't want the default layout * 
    });
};
