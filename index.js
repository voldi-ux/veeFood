const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 4000;
const MONGO_URI = "mongodb://127.0.0.1:27017/veeEat";
const AuthRoutes = require('./routes/AuthRoutes.js')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())
 
app.use(AuthRoutes)


mongoose
  .connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
      app.listen(port);
      console.log('connected to the server')
  })
  .catch(() => console.log("could not connect to the mongo server"));
