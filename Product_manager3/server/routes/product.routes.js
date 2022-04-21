
const ProductController = require("../controllers/product.controller"); 

module.exports = (app)=>{
    
    app.post("/api/products", ProductController.createNewProduct);

    app.get("/api/products", ProductController.findAllProducts);

    app.get("/api/products/:productId", ProductController.findOneProduct);

    app.put("/api/products/:productId", ProductController.updateProduct);

    app.delete("/api/products/:productId", ProductController.deleteProduct);
}