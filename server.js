const express = require("express");
const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(cors());

app.get("/", function (req, res) {
  res.send("Home page");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
