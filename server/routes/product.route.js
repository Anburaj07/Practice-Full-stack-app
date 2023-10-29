const express = require("express");
const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  res.status(200).json({ msg: "Products..." });
});

module.exports = { productRouter };
