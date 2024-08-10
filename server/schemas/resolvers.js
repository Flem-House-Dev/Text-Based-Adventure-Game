const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Game = require('../models/Game');
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

    // Create a new user
    async createUser(_, { username, email, password }) {
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
        throw new Error('Error creating user');
      }
    },

    async createGame(_, { title, description, scenes }) {
      try {
        const game = new Game({
          title,
          description,
          scenes
        });
        return await game.save();
      } catch (error) {
        throw new Error('Error creating game');
      }
    }
  }
  }
};

module.exports = resolvers;
