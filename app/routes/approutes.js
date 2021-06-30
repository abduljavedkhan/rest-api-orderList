// for error handling
const use = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

//API routes
module.exports = (app) => {
  const controllers = require("../controllers/appController");
  const router = require("express").Router();

  router.get("/products", use(controllers.getAllProduct));
  router.get("/customers", use(controllers.getCustomer));
  router.get("/orders", use(controllers.getOrders));
  router.get("/orders/:id", use(controllers.getOrderById));
  router.patch("/orders/:id", use(controllers.updateOrderById));
  router.post("/orders/add", use(controllers.addOrders));

  app.use("/api/", router);
};
