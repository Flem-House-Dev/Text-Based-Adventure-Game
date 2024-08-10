const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Game = require('../models/Game');
const UserProgress = require('../models/UserProgress');
const Character = require('../models/Character'); 

const resolvers = {
  Query: {
    // // Fetch all characters
    // async getCharacters() {
    //   try {
    //     return await Character.find();
    //   } catch (error) {
    //     throw new Error('Error fetching characters');
    //   }
    // },

    // // Fetch a single character by ID
    // async getCharacter(_, { id }) {
    //   try {
    //     return await Character.findById(id);
    //   } catch (error) {
    //     throw new Error('Error fetching character');
    //   }
    // },

    // Fetch single users
    async user(_, { id }) {
      try {
        return await User.findById(id);
      } catch (error) {
        throw new Error('Error fetching user');
      }
    },

    async game(_, { id }) {
      try {
        return await Game.findById(id);
      } catch (error) {
        throw new Error('Error fetching game');
      }
    },

    async progress(_, { userId, gameId }) {
      try {
        return await UserProgress.findOne({ userId, gameId });
      } catch (error) {
        throw new Error('Error fetching user progress');
      }
    }
  },

  Mutation: {
    // // Create a new character
    // async createCharacter(_, { input }) {
    //   try {
    //     const character = new Character(input);
    //     return await character.save();
    //   } catch (error) {
    //     throw new Error('Error creating character');
    //   }
    // },

    // // Update an existing character by ID
    // async updateCharacter(_, { id, input }) {
    //   try {
    //     return await Character.findByIdAndUpdate(id, input, { new: true });
    //   } catch (error) {
    //     throw new Error('Error updating character');
    //   }
    // },

    // // Delete a character by ID
    // async deleteCharacter(_, { id }) {
    //   try {
    //     return await Character.findByIdAndRemove(id);
    //   } catch (error) {
    //     throw new Error('Error deleting character');
    //   }
    // },

    // login a user
    async login(_, { email, password }) {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          throw new Error('User not found');
        }
        const valid = await bcrypt.compare(password, user.password);
        if (!valid) {
          throw new Error('Invalid password');
        }
        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
        return { token, user };
      } catch (error) {
        throw new Error('Error logging in');
      }
    },

    // add a new user
    async addUser(_, { username, email, password }) {
      try {
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new User({
          username,
          email,
          password: hashedPassword
        });
        const result = await user.save();
        return { ...result._doc, password: null };
      } catch (error) {
        throw new Error('Error adding user');
      }
    },

    async updateProgress(_, { userId, gameId, currentSceneId }) {
      try {
        const progress = await UserGameProgress.findOneAndUpdate(
          { userId, gameId },
          { currentSceneId },
          { new: true, upsert: true }
        );
        return progress;
      } catch (error) {
        throw new Error('Error updating progress');
      }
    }
  }
};

module.exports = resolvers;
