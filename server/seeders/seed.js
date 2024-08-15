const db = require('../config/connection');
const { User, Game } = require('../models/index');
const userSeeds = require('./userSeeds.json');
const gameSeeds = require('./gameSeeds.json');
const cleanDB = require('./cleanDB');
const bcrypt = require('bcrypt');

db.once('open', async () => {
  try {
    // clear existing data
    await cleanDB('Game', 'games');
    await cleanDB('User', 'users');

    // seed user data
    await User.create(userSeeds);

    // seed game data
    await Game.create(gameSeeds);
    
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('All done!');
  process.exit(0);
});
