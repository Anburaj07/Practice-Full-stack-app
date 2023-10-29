const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();

const port = process.env.PORT;
const cors = require("cors");
const { userRouter } = require("./routes/user.route");
const { productRouter } = require("./routes/product.route");
const { connection } = require("./db");
app.use(
  cors({
    origin: "*",
  })
);

app.use("/users", userRouter);
app.use('/products',productRouter)

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Welcome to Base point!" });
});

app.listen(port, async () => {
  try {
    await connection
    console.log("Connected to DB");
    console.log(`Server is Running at ${port}`);
  } catch (error) {
    console.log("Error while connecting server");
    console.log(error);
  }
});
