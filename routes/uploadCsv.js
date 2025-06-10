const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const productCtrl = require("../controllers/productController");

const router = express.Router();
router.post("/", upload.single("file"), productCtrl.uploadCSV);

module.exports = router;