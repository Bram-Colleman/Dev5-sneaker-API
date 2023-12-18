const express = require("express");
const router = express.Router();
const userController = require("../controllers/users");
const jwt = require("../middleware/jwt");

router.post("/register", userController.createUser);
router.post("/login", userController.loginUser);
router.get("/", jwt.authenticateToken, userController.getInfo);


module.exports = router;