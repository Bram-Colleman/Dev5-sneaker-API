const express = require("express");
const router = express.Router();
const shoesController = require("../controllers/shoes");

router.post("/", shoesController.createShoe);
router.delete("/:id", shoesController.deleteShoe);

module.exports = router;