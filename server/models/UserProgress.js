const mongoose = require('mongoose');

const UserProgressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  currentSceneId: { type: String, required: true },
});

module.exports = mongoose.model('UserProgress', UserProgressSchema);
