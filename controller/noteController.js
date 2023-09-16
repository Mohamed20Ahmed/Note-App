const generator = require("../Util/generator");
const memorystorage = require("../Util/memoryStorage");

exports.getAllNotes = function (req, res) {
  let id1 = generator.generate();
  memorystorage.store.setItem(id1, "Fisrt");
  let id2 = generator.generate();
  memorystorage.store.setItem(id2, "Second");

  let keys = memorystorage.getKeys(memorystorage.store);
  let values = memorystorage.getValues(memorystorage.store);
  console.log(JSON.stringify(values));
  res.send("Get All Notes " + JSON.stringify(keys));
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
