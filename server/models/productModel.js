const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  name: String,
  description: String,
  oldprice: String,
  newprice: String,
  category: String,
  image: String,
});
const Product = mongoose.model("product", productSchema);
const getAllProducts = async () => {
  const products = await Product.find({});
  return products;
};
module.exports.getAllProducts = getAllProducts;
