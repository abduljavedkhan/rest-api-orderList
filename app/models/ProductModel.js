const connectionPool = require("../config/connectionPool");
const QUERY = require("../util/dbquery");

const Product = function (data) {
  this.product_name = data.product_name;
  this.description = data.description;
  this.product_url = data.product_url;
  this.sku_id = data.sku_id;
  this.price = data.price;
  this.status = data.status;
  this.created_on = data.created_on;
  this.updated_on = data.updated_on;
};

//get all products
Product.getAllProduct = (result) => {
  connectionPool.query(QUERY.PRODUCTS, (err, res) => {
    if (err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

module.exports = { Product };
