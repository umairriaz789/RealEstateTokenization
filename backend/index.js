const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const register = require("./routes/register");
const login = require("./routes/login");
const orders = require("./routes/orders");
const stripe = require("./routes/stripe");
const users = require("./routes/users");
const productsRoute = require("./routes/products");
const {Property} = require("./models/personal");
const personaldb = require("./routes/personaldb");
const propertydb = require("./routes/propertiesdb")
// const savedProperty = require("./routes/propreg")
// const products = require("./products");
// const propreg = require("./properties");

const app = express();
require("dotenv").config();

app.use(express.json({extended: true, parameterLimit: 100000000, limit:"50000mb"}));
app.use(cors());
// app.use(express.urlencoded({extended: true, parameterLimit: 100000000, limit:"50000mb"}));



app.use("/api/register", register);
app.use("/api/login", login);
app.use("/api/orders", orders);
app.use("/api/stripe", stripe);
app.use("/api/products", productsRoute);
app.use("/api/users", users);
app.use("/api/personaldb", personaldb);
app.use("/api/propertiesdb", propertydb);

app.get("/", (req, res) => {
  res.send("Welcome our to online shop API...");
});

console.log(Property);


app.get("/products", (req, res) => {
  res.send(products);
});

app.get("/personaldb", (req, res) => {
  res.send(personaldb);
});

app.get("/propertiesdb", (req, res) => {
  res.send(propertiesdb);
});
const uri = process.env.DB_URI;
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}...`);
});

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection established..."))
  .catch((error) => console.error("MongoDB connection failed:", error.message));
