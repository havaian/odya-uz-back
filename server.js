const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const db = require("./app/models/index.js");
require('dotenv').config();

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const mchimp_controllers = require('./app/controllers/mchimp.controller');

const app = express();
var corsOptions = {
  origin: process.env['front_url']
};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ 
    message: `It's working! 🙌`
  });
});

app.post("/add-email", (req, res) => {
  mchimp_controllers.addEmail(req, res);
});

// set port, listen for requests
const port = process.env['port'] || 8080;
app.listen(port, () => {
  console.log(`Port: ${ port } ✅`);
});

// db.mongoose.connect(db.url, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => {
//   console.log("MongoDB ✅");
// })
// .catch(err => {
//   console.log("MongoDB ❌", err);
//   process.exit();
// });