const express = require("express");
const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");
const noteRouter = require("./router/noteRouter");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(cors());

app.use("/api/v1", noteRouter);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
