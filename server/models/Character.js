const mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  health: { type: Number, required: true },
  inventory: [{ type: String }],
});

module.exports = mongoose.model('Character', CharacterSchema);