const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const app = express();
const productsRouter = require("./routes/productsRouter");
app.use(bodyParser.json());
app.use(cors());
app.use("/api/products", productsRouter);
const port = process.env.PORT;
const url = process.env.DB_URL;
app.listen(port, console.log(`Server Running On Port ${port}`));
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Mongo DB Connection Success"))
  .catch((err) => console.log("Connection Failed", err));
