const mongoose = require('mongoose');

const sceneSchema = new mongoose.Schema({
  sceneId: { type: String, required: true },
  description: { type: String, required: true },
  actions: [{
    actionText: { type: String, required: true },
    nextSceneId: { type: String, required: true }
  }]
});

const gameSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  scenes: [sceneSchema]
});

module.exports = mongoose.model('Game', gameSchema);
