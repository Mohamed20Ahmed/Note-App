const generator = require("../Util/generator");
const memoryStorage = require("../Util/memoryStorage");
const Note = require("../model/noteModel").Note;

exports.getAllNotes = function (req, res) {
  let values = memoryStorage.getValues(memoryStorage.store);
  res.status(200).send(values);
};

exports.addNote = function (req, res) {
  let id = generator.generate();
  let note = new Note(
    id,
    req.body.title,
    req.body.content,
    req.body.createdBy,
    new Date()
  );

  if (!req.body.title || !req.body.content || !req.body.createdBy) {
    return res.status(404).send({ error: "Please Enter All Fields" });
  }
  memoryStorage.store.setItem(id, note);
  res.status(200).send("Note Added Successfully");
};

exports.updateNote = function (req, res) {
  res.send("Update Note");
};

exports.deleteNote = function (req, res) {
  res.send("Delete Note");
};
