const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Product = sequelize.define("Product", {
  campaign_name: DataTypes.STRING,
  ad_group_id: DataTypes.STRING,
  fsn_id: DataTypes.STRING,
  product_name: DataTypes.STRING,
  ad_spend: DataTypes.FLOAT,
  views: DataTypes.INTEGER,
  clicks: DataTypes.INTEGER,
  direct_revenue: DataTypes.FLOAT,
  indirect_revenue: DataTypes.FLOAT,
  direct_units: DataTypes.INTEGER,
  indirect_units: DataTypes.INTEGER,
});

module.exports = Product;