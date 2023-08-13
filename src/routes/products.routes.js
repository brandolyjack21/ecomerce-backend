const { Router } = require("express");
const { getAllProducts, createNewProduct, updateProducts } = require("../controllers/products.controllers");
const { createNewProductValidator } = require("../validators/products.validators");
const authenticate = require("../middlewares/auth.middleware");

const router = Router();

router.get("/products", getAllProducts);
router.post("/products",authenticate,createNewProductValidator,createNewProduct)
router.put("/updateproducts/:id",authenticate,updateProducts)

module.exports = router;
