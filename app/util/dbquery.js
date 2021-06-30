const QUERY = {
  PRODUCTS: `SELECT * FROM products`,
  CUSTOMERS: `SELECT * FROM customers`,
  ADD_ORDER: `INSERT INTO orders set ?`,
  ORDERS: `SELECT * FROM orders`
};

module.exports = QUERY;
