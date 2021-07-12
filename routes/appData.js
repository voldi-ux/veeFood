const express = require("express");
const router = express.Router();
const { getData } = require("../controllers/appData.js");

router.get('/getData', getData)

module.exports = router;
