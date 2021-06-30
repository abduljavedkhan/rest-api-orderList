const validateRequest = require("./../models/ValidateRequest/ValidateRequest");
const { Product } = require("../models/ProductModel");
const { Order } = require("../models/OrderModel");
const { Customer } = require("../models/CustomerModel");

//get all products
exports.getAllProduct = (req, res) => {
  Product.getAllProduct((err, result) => {
    console.log("Controller: getAllProducts ");
    if (err) {
      console.log("error " + err.message);
      res.status(500).json({
        status: "error",
        message: "Unable To Fetch records",
      });
    } else {
      res.status(200).json(result);
    }
  });
};

//get all customers
exports.getCustomer = (req, res) => {
  Customer.getAllCustomer((err, result) => {
    console.log("Controller: GET Customer ");
    if (err) {
      console.log("error " + err.message);
      res.status(500).json({
        status: "error",
        message: "Unable To Fetch customer records",
      });
    } else {
      res.status(200).json(result);
    }
  });
};

//get all orders
exports.getOrders = (req, res) => {
  Order.getAllOrders((err, result) => {
    console.log("Controller: GET Orders ");
    if (err) {
      console.log("error " + err.message);
      res.status(500).json({
        status: "error",
        message: "Unable To Fetch order records",
      });
    } else {
      res.status(200).json(result);
    }
  });
};

exports.addOrders = (req, res) => {
  if (
    !validateRequest([
      req.body.customer_id,
      req.body.status,
      req.body.product_id,
      req.body.quantity,
    ])
  ) {
    res.status(400).json({
      status: "error",
      message: "Missing Required Parameters",
    });
  } else {
    Order.addOrder(req.body, (err, result) => {
      console.log("Controller: add Order ");
      if (err) {
        console.log("error " + err.message);
        res.status(500).json({
          status: "error",
          message: "Unable To add Orders",
        });
      } else {
        res.status(200).json({
          message: `order added successfully`,
          orderId: ` ${result.OrderId}`,
        });
      }
    });
  }
};
