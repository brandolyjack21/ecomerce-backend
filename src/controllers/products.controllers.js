const { Op } = require("sequelize");
const { Products } = require("../models");

const getAllProducts = async (req, res, next) => {
  try {
    // pedir todos los productos al modelo Products
    const products = await Products.findAll({
      where: {
        availableQty: {
          [Op.gt]: 0,
        },
      },
    });
    res.json(products);
  } catch (error) {
    next(error);
  }
};

const createNewProduct = async (req,res,next) => {
  try {
    
   const newProduct = req.body

   await Products.create(newProduct)

   res.status(201).send('creado con exito').end()

  } catch (error) {
    next()
  }
}

const updateProducts = async (req,res,next) => {
  try {

    const { id } = req.params
    
    const { userId, description } = req.body

    await Products.update({ description }, {
      where:{
        id,
        userId
      }
    })

    res.status(200).json('actualizacion exitosa')
  } catch (error) {
    
   next()

  }
};

module.exports = {
  getAllProducts,
  createNewProduct,
  updateProducts
};
