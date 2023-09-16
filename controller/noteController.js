const generator = require("../Util/generator");

exports.getAllNotes = function (req, res) {
  res.send("Get All Notes " + generator.generate());
};

exports.addNote = function (req, res) {
  res.send("Add Note");
};

exports.updateNote = function (req, res) {
  res.send("Update Note");
};

exports.deleteNote = function (req, res) {
  res.send("Delete Note");
};
