const connectionPool = require("../config/connectionPool");
const QUERY = require("../util/dbquery");

const Customer = function (data) {
  this.name = data.name;
  this.email = data.email;
  this.password = data.password;
  this.created_by = data.created_by;
  this.updated_by = data.updated_by;
  this.created_on = data.created_on;
  this.updated_on = data.updated_on;
};
//get all customers
Customer.getAllCustomer = (result) => {
  connectionPool.query(QUERY.CUSTOMERS, (err, res) => {
    if (err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

module.exports = { Customer };
