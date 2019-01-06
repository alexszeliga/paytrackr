const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.static("./public"));
// (optional) only made for logging and
// body-parser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/paytrackr");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connected to paytrackr db");
});

// app.get("/", function(req, res) {
//   res.send("Hello World");
// });

app.listen(3000);
