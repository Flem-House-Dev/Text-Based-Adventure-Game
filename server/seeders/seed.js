const db = require('../config/connection');
const { User, Game } = require('../models');
const userSeeds = require('./userSeeds.json');
const gameSeeds = require('./gameSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    // clear existing data
    await cleanDB('Game', 'games');
    await cleanDB('User', 'users');

    // seed user data
    await User.create(userSeeds);

    // seed game data
    for (let i = 0; i < gameSeeds.length; i++) {
      const game = gameSeeds[i];
      const createdGame = await Game.create(game);
    }
    
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
