const mongoose = require('mongoose');

const chordSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  soundUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Chord', chordSchema);
