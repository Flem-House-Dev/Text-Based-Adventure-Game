const mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  health: { type: Number, required: true },
  inventory: [{ type: String }], // Example: list of items
  // Add other fields as necessary
});

module.exports = mongoose.model('Character', CharacterSchema);