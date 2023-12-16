const express = require("express");
const router = express.Router();
const shoesController = require("../controllers/shoes");

router.post("/", shoesController.createShoe);

module.exports = router;