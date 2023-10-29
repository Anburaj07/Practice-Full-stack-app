const express = require("express");
const { ProductModel } = require("../models/product.model");
const { auth } = require("../middlewares/auth.middleware");
const productRouter = express.Router();

productRouter.use(auth)
productRouter.get("/", async (req, res) => {
  res.status(200).json({ msg: "Products..." });
});

productRouter.post('/add-product',async(req,res)=>{
    const payload=req.body;
    try {
        const product=new ProductModel(payload)
        await product.save()
        res.status(200).json({msg:"A new post has been created"})        
    } catch (error) {
        res.status(400).json({error})
    }
})

module.exports = { productRouter };
