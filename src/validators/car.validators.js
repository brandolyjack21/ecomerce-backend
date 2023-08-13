const { check } = require("express-validator");
const validateResult = require("../middlewares/validate.middleware");

const addProductToCarValidator = [
    check("productId", "Error con el productId")
    .exists()
    .withMessage("Falta el campo de productId")
    .notEmpty()
    .withMessage("El productId no debe estar vacio")
    .isInt()
    .withMessage("El productId no es un entero"),
  check("quantity", "Error con el quantity")
    .exists()
    .withMessage("Falta el campo de quantity")
    .notEmpty()
    .withMessage("El quantity no debe estar vacio")
    .isInt()
    .withMessage("el quantity no es un entero"),
  check("price", "Error con el price")
    .exists()
    .withMessage("Falta el campo de price")
    .notEmpty()
    .withMessage("El price no debe estar vacio")
    .isNumeric()
    .withMessage("el price no es un numero valido"),
  validateResult,
]

const buyProductsInCarValidator = [
    check("userId", "Error con el userId")
    .exists()
    .withMessage("Falta el campo de userId")
    .notEmpty()
    .withMessage("El userId no debe estar vacio")
    .isInt()
    .withMessage("El userId no es un entero"),
  check("products", "Error con el products")
    .exists()
    .withMessage("Falta el campo de products")
    .notEmpty()
    .withMessage("El products no debe estar vacio")
    .isArray()
    .withMessage("el products no es un arreglo"),
  validateResult,
]

module.exports = {
    addProductToCarValidator,
    buyProductsInCarValidator,
}