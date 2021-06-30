const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
const helmet = require("helmet");

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Access-Control-Allow-Origin", "Content-Type"],
};
app.use(helmet());
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./app/routes/approutes")(app);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Order List backend." });
});

app.use(function (err, req, res, next) {
  console.error("Global error catch " + err.message);
  res.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
});

const PORT = process.env.PORT || 7070;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
