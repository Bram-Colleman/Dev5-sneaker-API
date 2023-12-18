const express = require("express");
const router = express.Router();
const shoesController = require("../controllers/shoes");
const jwt = require("../middleware/jwt");

router.post("/", shoesController.createShoe);
router.delete("/:id", jwt.authenticateToken , shoesController.deleteShoe);
router.put("/:id", jwt.authenticateToken , shoesController.updateStatus);
router.get("/", shoesController.getShoes);
router.get("/:id", shoesController.getShoeById);

module.exports = router;