const Product = require("../models/product");

exports.uploadCSV = async (req, res) => {
  const fs = require("fs");
  const path = require("path");
  const csv = require("csv-parser");
  // console.log(req)

  const formatHeader = (header) => header.toLowerCase().replace(/\s+/g, '_');

  let results = [];
  fs.createReadStream(req.file.path)
    .pipe(csv({
      mapHeaders: ({ header }) => formatHeader(header)
    }))
    .on("data", (data) => results.push(data))
    .on("end", async () => {
      try {
        await Product.bulkCreate(results);
        res.json({ message: "CSV data uploaded successfully" });
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    });
};


exports.report = (filterKey) => async (req, res) => {
  try {
    const { campaign_name, ad_group_id, fsn_id, product_name } = req.body;
    // console.log("---->", req.body, campaign_name)
    let where = {};
    if (campaign_name) where.campaign_name = campaign_name;
    if (ad_group_id) where.ad_group_id = ad_group_id;
    if (fsn_id) where.fsn_id = fsn_id;
    if (product_name) where.product_name = product_name;
    console.log(where, filterKey)

    if (Object.keys(where).length !== 0) {
      const products = await Product.findAll({ where });
      // console.log(products)
      const report = products.map((p) => {
        // console.log("value---->", p)
        const totalRevenue = p.direct_revenue + p.indirect_revenue;
        const totalOrders = p.direct_units + p.indirect_units;
        return {
          [filterKey]: p[filterKey],
          adSpend: p.ad_spend,
          views: p.views,
          clicks: p.clicks,
          ctr: p.views ? (p.clicks / p.views) * 100 : 0,
          totalRevenue,
          totalOrders,
          roas: p.ad_spend ? totalRevenue / p.ad_spend : 0,
        };
      });
      res.json(report);
    } else {
      res.status(400).json({ "message": "Pleas Send the Filter Data, Example, Body:{'campaign_name': 'PLA-KW-NB-Dalda Kachi Ghani -1L Pouch-WB GW HR UP'}" });

    }

  } catch (err) {
    console.log("Issue in Fetch data", err)
    res.status(400).json({ message: err.message });
  }
};
