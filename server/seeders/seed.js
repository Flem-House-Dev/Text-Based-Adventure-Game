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
    const usersWithHashedPasswords = await Promise.all(userSeeds.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 12);
      return { ...user, password: hashedPassword };
    }));
    await User.create(usersWithHashedPasswords);

    // seed game data
    await Game.create(gameSeeds);
    
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('All done!');
  process.exit(0);
});
