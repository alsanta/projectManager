const productManager = require("../controllers/manager.controller")

module.exports = app =>{
    app.get("/api/products",productManager.getAllProducts);
    app.post("/api/products",productManager.createNewProduct);
    app.get("/api/products/:id",productManager.getById);
    app.delete("/api/products/:id",productManager.deleteProduct);
    app.put("/api/products/:id",productManager.updateProduct);
}