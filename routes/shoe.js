const express = require("express");
const router = express.Router();
const shoesController = require("../controllers/shoes");

router.post("/", shoesController.createShoe);
router.delete("/:id", shoesController.deleteShoe);
router.put("/:id", shoesController.updateStatus);
router.get("/", shoesController.getShoes);

module.exports = router;