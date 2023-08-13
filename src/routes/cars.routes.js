const { Router } = require("express");
const {
  addProductToCar,
  buyProductsInCar,
  getAllProductsInCar,
} = require("../controllers/car.controllers");
const { addProductToCarValidator, buyProductsInCarValidator } = require("../validators/car.validators");
const authenticate = require("../middlewares/auth.middleware");

const router = Router();

router.post("/products/car/:id",authenticate,addProductToCarValidator, addProductToCar);
router.post("/products/order/",authenticate,buyProductsInCarValidator, buyProductsInCar);
router.get('/products/car/:id',getAllProductsInCar )

module.exports = router;
