const express = require("express");
const upload = require("../middlewares/uploadMiddleware");
const productCtrl = require("../controllers/productController");

const router = express.Router();
router.post("/", upload.single("file"), productCtrl.uploadCSV);

module.exports = router;