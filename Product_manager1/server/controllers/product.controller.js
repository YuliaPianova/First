
const Product = require("../models/product.model.js"); 

module.exports = {
    createNewProduct: (req, res) => { 
        Product.create(req.body) 
            .then((newProduct) => res.json(newProduct)) 
            .catch((err) => console.log(err));
    }
};