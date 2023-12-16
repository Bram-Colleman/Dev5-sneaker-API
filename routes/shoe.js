const express = require("express");
const router = express.Router();
const shoesController = require("../controllers/shoesController");

router.post("/", shoesController.createShoe);


module.exports = router;