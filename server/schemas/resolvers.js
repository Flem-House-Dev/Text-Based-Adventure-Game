const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Game = require('../models/Game');
const UserProgress = require('../models/UserProgress');


require('dotenv').config();

const resolvers = {
  Query: {
    // Fetch single user by ID
    async user(_, { id }) {
      try {
        return await User.findById(id);
      } catch (error) {
        throw new Error('Error fetching user');
      }
    },

    // Fetch game
    async game() {
      try {
        return await Game.findOne(); 
      } catch (error) {
        throw new Error('Error fetching game');
      }
    },

    // Fetch user progress
    async progress(_, { userId }) {
      try {
        return await UserProgress.findOne({ userId });
      } catch (error) {
        throw new Error('Error fetching user progress');
      }
    }
  },

  Mutation: {
    // User login
    async login(_, { email, password }) {
        const user = await User.findOne({ email });
        if (!user) {
          throw new Error('User not found');
        }

        console.log(password);
        console.log(user);
        

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) {
          throw new Error('Invalid password');
        }
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return { token, user };
    },

    // Add a new user
    async addUser(_, { username, email, password }) {
      try {
        const user = new User({
          username,
          email,
          password
        });
        const result = await user.save();
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return { ...result._doc, password: null, token }; 
      } catch (error) {
        throw new Error('Error adding user');
      }
    },

    // Update user progress
    async updateProgress(_, { userId, currentSceneId }) {
      try {
        const progress = await UserProgress.findOneAndUpdate(
          { userId },
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