const QUERY = {
  PRODUCTS: `SELECT * FROM products`,
  CUSTOMERS: `SELECT * FROM customers`,
  ADD_ORDER: `INSERT INTO orders set ?`,
  ORDERS: `SELECT * FROM orders`,
  ORDER_BY_ID: `SELECT * FROM orders WHERE order_id=?`,
  UPDATE_ORDER: `UPDATE orders set ? WHERE order_id=?`,
};

module.exports = QUERY;
