const express = require("express");
const router = express.Router();
const authCtrl = require("../controllers/authController");

router.post("/", authCtrl.login);

module.exports = router;