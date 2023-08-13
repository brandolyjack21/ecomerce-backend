const { check } = require("express-validator");
const validateResult = require("../middlewares/validate.middleware");

const createNewProductValidator = [
    check("name", "Error con el name")
    .exists()
    .withMessage("Falta el campo de name")
    .notEmpty()
    .withMessage("El name no debe estar vacio")
    .isString()
    .withMessage("El name no es un string"),
  check("availableQty", "Error con el avalableQty")
    .exists()
    .withMessage("Falta el campo de availableQty")
    .notEmpty()
    .withMessage("El availableQty no debe estar vacio")
    .isInt()
    .withMessage("el availableQty no es un entero"),
  check("userId", "Error con el userId")
    .exists()
    .withMessage("Falta el campo de userId")
    .notEmpty()
    .withMessage("El userId no debe estar vacio")
    .isInt()
    .withMessage("el userId no es un entero"),
  check("productImage", "Error con el productImage")
    .exists()
    .withMessage("Falta el campo de productImage")
    .notEmpty()
    .withMessage("El productImage no debe estar vacio")
    .isString()
    .withMessage("el productImage no es un string"),
  validateResult,
]

module.exports = {
    createNewProductValidator,
}