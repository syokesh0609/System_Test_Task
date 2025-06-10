const express = require("express");
const auth = require("../middlewares/authMiddleware");
const { report } = require("../controllers/productController");

const router = express.Router();
router.post("/report/campaign", auth, report("campaign_name"));
router.post("/report/adGroupID", auth, report("ad_group_id"));
router.post("/report/fsnID", auth, report("fsn_id"));
router.post("/report/productName", auth, report("product_name"));

module.exports = router;