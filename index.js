const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 4000;
const MONGO_URI = "mongodb://127.0.0.1:27017/veeEat";
const AuthRoutes = require("./routes/AuthRoutes.js");
const dataRoutes = require("./routes/appData.js");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const { FoodCategories } = require("./data.js");
const Product = require("./models/Product.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// app.get("/addProducts", (resq, resp) => {
//   // FoodCategories.forEach(async (food) => {
//   //   const product = await new Product(food);
//   //   console.log(product);
//   //   await product.save();
//   // });

//   return resp.send(FoodCategories.length)
// });

app.use("/images", express.static(path.join(__dirname, "images")));
app.use(AuthRoutes);
app.use(dataRoutes);


mongoose
  .connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    app.listen(port);
    console.log("connected to the server");
  })
  .catch(() => console.log("could not connect to the mongo server"));
