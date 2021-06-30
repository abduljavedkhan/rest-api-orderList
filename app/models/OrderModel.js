const connectionPool = require("../config/connectionPool");
const QUERY = require("../util/dbquery");

const Order = function (data) {
  this.customer_id = data.customer_id;
  this.status = data.status;
  this.line_total = data.line_total;
  this.quantity = data.quantity;
  this.product_id = data.product_id;
  this.created_on = data.created_on;
  this.updated_on = data.updated_on;
};

//add order
Order.addOrder = (newOrder, result) => {
  connectionPool.query(QUERY.ADD_ORDER, newOrder, (err, res) => {
    if (err) {
      console.log("Error DB Service Order Creation ", err);
      result(err, null);
    } else {
      console.log("DB Service Order Created with Id ", res.insertId);
      result(null, { OrderId: res.insertId });
    }
  });
};

//get all orders
Order.getAllOrders = (result) => {
  connectionPool.query(QUERY.ORDERS, (err, res) => {
    if (err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

module.exports = { Order };
