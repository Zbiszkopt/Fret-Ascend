const express = require("express")
const verifyToken = require('../middleware/verifyToken'); 

const router = express.Router();

const chordController = require("../controller/chord")

router.post("/", chordController.addChord)

router.get("/", chordController.getAllChords)

router.get("/:id", chordController.getChordById)

router.delete("/:id", chordController.deleteChord)

module.exports = router
