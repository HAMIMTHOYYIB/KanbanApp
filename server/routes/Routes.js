const express = require("express");
const router = express.Router();
const controller = require("../controllers/mainController");

router.post("/login",controller.login);
router.post("/signup",controller.signup);

module.exports = router;