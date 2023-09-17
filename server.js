//import express to use it in creating server
const express = require("express");

//create express server
const app = express();

//import cors for parsing url
const cors = require("cors");

//import body-parser for parsing json and url-encoded
const bodyparser = require("body-parser");

//import noteRouter
const noteRouter = require("./router/noteRouter");

//initialize port number
const port = 3000;

//use body-parser for parsing json and url-encoded
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//use cors
app.use(cors());

//routing
app.use("/note-app", noteRouter);

//listening on port 3000
app.listen(port, () => {
  console.log("listening on port 3000");
});
