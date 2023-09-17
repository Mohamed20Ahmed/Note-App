//import express
const express = require("express");

//use function router
const router = express.Router();

const noteController = require("../controller/noteController");

//routing
router.get("/notes", noteController.getAllNotes);
router.get("/addNote", noteController.addNote);
router.get("/updateNote", noteController.updateNote);
router.get("/deleteNote/:noteId", noteController.deleteNote);

module.exports = router;
