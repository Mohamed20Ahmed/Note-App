const express = require("express");
const app = express();

const cors = require("cors");

const bodyparser = require("body-parser");

const noteRouter = require("./router/noteRouter");

const port = 3000;

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(cors());

app.use("/note-app", noteRouter);

app.listen(port, () => {
  console.log("listening on port 3000");
});
