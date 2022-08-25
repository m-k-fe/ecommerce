const productModel = require("../models/productModel");
const getAllProducts = async (req, res) => {
  const products = await productModel.getAllProducts();
  res.send(products);
};
module.exports.getAllProducts = getAllProducts;
