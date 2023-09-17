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

  if (!note.title || !note.content || !note.createdBy) {
    return res.status(404).send({ error: "Please Enter All Fields" });
  }

  memoryStorage.store.setItem(id, note);
  res.status(201).send("Note Added Successfully");
};

exports.updateNote = function (req, res) {
  let note = new Note(
    req.body.id,
    req.body.title,
    req.body.content,
    req.body.createdBy,
    new Date()
  );

  if (!note.id || !note.title || !note.content || !note.createdBy) {
    return res.status(404).send({ error: "Please Enter All Fields" });
  }

  let noteExistence = memoryStorage.store.getItem(note.id);
  if (!noteExistence) {
    return res.status(404).send({ error: "Id Is Not Exist" });
  }

  memoryStorage.store.setItem(note.id, note);
  res.status(200).send("Note Updated Successfully");
};

exports.deleteNote = function (req, res) {
  let id = req.params.noteId;
  if (!id) {
    return res.status(404).send({ error: "Please Enter Note Id" });
  }

  let noteExistence = memoryStorage.store.getItem(id);
  if (!noteExistence) {
    return res.status(404).send({ error: "Id Is Not Exist" });
  }

  memoryStorage.store.removeItem(id);
  res.status(200).send("Note Deleted Successfully");
};
