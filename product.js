// const products = [];
const Product = require("../models/product");                                                                                 // This is for Admin logic

exports.getproduct = (req, res, next) => {
    //   res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    // Passing on add-product.pug
    // To made it active we use PATH
    res.render("add-product", { Pagetitle: "Add-product", path: '/admin/layouts' });
};

exports.postproduct = (req, res, next) => {
   const product = new Product(req.body.title, req.body.pay, req.body.color, req.body.size,req.body.image,req.body.message);
   product.save();
    // products.push({
    //     title: req.body.title,
    //     pay: req.body.pay,
    //     color: req.body.color,
    //     size: req.body.size,
    //     image: req.body.image,
    //     message: req.body.message
    // });
    res.redirect('/');
};

                                                                                       // This is for Shop logic

exports.shopProducts = (req, res, next) => {
    // const products = adminData.products;
    // As, Product is on the top
    //Here shop => shop.pug 
    const products = Product.fetchAll();
    res.render('shop',
        {
            prods: products,
            docTitle: 'Master Product'
        });
};


