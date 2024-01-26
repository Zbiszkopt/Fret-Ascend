const express = require('express');
const router = express.Router();
const Chord = require('../models/chord'); // Import modelu akordu

// Pobieranie wszystkich akordów
exports.getAllChords = async (req, res) => {
  try {
    const chords = await Chord.find();
    res.json(chords);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Dodawanie nowego akordu
exports.addChord = async (req, res) => {
  const chord = new Chord({
    name: req.body.name,
    imageUrl: req.body.imageUrl,
    soundUrl: req.body.soundUrl,
  });

  try {
    const newChord = await chord.save();
    res.status(201).json(newChord);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Pobieranie konkretnego akordu
exports.getChordById = async (req, res) => {
  try {
    const chord = await Chord.findById(req.params.id);
    if (!chord) {
      return res.status(404).json({ message: 'Cannot find chord' });
    }
    res.json(chord);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Usuwanie konkretnego akordu
exports.deleteChord = async (req, res) => {
  try {
    const chord = await Chord.findById(req.params.id);
    if (!chord) {
      return res.status(404).json({ message: 'Cannot find chord' });
    }
    await chord.remove();
    res.json({ message: 'Deleted chord' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};