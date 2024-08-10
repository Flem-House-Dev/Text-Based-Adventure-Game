const mongoose = require('mongoose');

const UserProgressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  gameId: { type: mongoose.Schema.Types.ObjectId, ref: 'Game', required: true },
  currentSceneId: { type: String, required: true },
});

module.exports = mongoose.model('UserProgress', UserProgressSchema);
