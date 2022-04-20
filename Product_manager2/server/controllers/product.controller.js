const Product = require("../models/product.model.js"); 

module.exports = {
    createNewProduct: (req, res) => { 
        Product.create(req.body)   // body = stuff the client type in forms on frontend
            .then((newProduct) => res.json(newProduct)) 
            .catch((err) => console.log(err));
    },

    findAllProducts: (req, res) => {
        Product.find({})
        .then((allProducts)=> res.json(allProducts))
    
        .catch((err) => console.log(err));
    },

    findOneProduct: (req, res) => {
        Product.findOne({ _id: req.params.productId }) // -id = automatically created field in mongoDB( mongoose.Schema) along with updated at and created at.
                                                       // productId = request parameter id (could be called whatever we want), must match name in routes
        
            .then((oneProduct) => res.json(oneProduct))
            .catch((err) => console.log(err));
    },




};