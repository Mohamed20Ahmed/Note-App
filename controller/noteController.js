const generator = require("../Util/generator");
const memoryStorage = require("../Util/memoryStorage");
const Note = require("../model/noteModel").Note;

//function to get all notes in store
exports.getAllNotes = function (req, res) {
  //get all notes from store using memory storage
  let values = memoryStorage.getValues(memoryStorage.store);

  //send results
  res.status(200).send(values);
};

//function to add note in store
exports.addNote = function (req, res) {
  //generate id for note
  let id = generator.generate();
  //create note object
  let note = new Note(
    id,
    req.body.title,
    req.body.content,
    req.body.createdBy,
    new Date()
  );

  //check validity of fields
  if (!note.title || !note.content || !note.createdBy) {
    return res.status(404).send({ error: "Please Enter All Fields" });
  }

  //add note to store
  memoryStorage.store.setItem(id, note);
  res.status(201).send("Note Added Successfully");
};

//function to update note exist in store
exports.updateNote = function (req, res) {
  //create note object
  let note = new Note(
    req.body.id,
    req.body.title,
    req.body.content,
    req.body.createdBy,
    new Date()
  );

  //check validity of fields
  if (!note.id || !note.title || !note.content || !note.createdBy) {
    return res.status(404).send({ error: "Please Enter All Fields" });
  }

  //check existence of notes
  let noteExistence = memoryStorage.store.getItem(note.id);
  if (!noteExistence) {
    return res.status(404).send({ error: "Id Is Not Exist" });
  }

  //update note
  memoryStorage.store.setItem(note.id, note);
  res.status(200).send("Note Updated Successfully");
};

exports.deleteNote = function (req, res) {
  //get id from params
  let id = req.params.noteId;

  //check if id exists in params or not
  if (!id) {
    return res.status(404).send({ error: "Please Enter Note Id" });
  }

  //check if id exists in store or not
  let noteExistence = memoryStorage.store.getItem(id);
  if (!noteExistence) {
    return res.status(404).send({ error: "Id Is Not Exist" });
  }

  //delete note
  memoryStorage.store.removeItem(id);
  res.status(200).send("Note Deleted Successfully");
};
