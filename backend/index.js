const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = new express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI);
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB connection established successfully");
});


app.get("/", (req, res) => {
  res.json("Server is alive");
});



app.listen("8080", () => {
  console.log("Started server on 8080");
});
