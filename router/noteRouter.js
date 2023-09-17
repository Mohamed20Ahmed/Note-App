const express = require("express");
const router = express.Router();

const noteController = require("../controller/noteController");

router.get("/notes", noteController.getAllNotes);
router.get("/addNote", noteController.addNote);
router.get("/updateNote", noteController.updateNote);
router.get("/deleteNote", noteController.deleteNote);

module.exports = router;
