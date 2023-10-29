const mongoose = require("mongoose");
const productSchema = mongoose.Schema(
  {
    title: String,
    body: String,
    userID: String,
    userName: String,
  },
  {
    versionKey: false,
  }
);

const ProductModel = mongoose.model("product", productSchema);
module.exports = { ProductModel };
