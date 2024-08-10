const typeDefs = `
 type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
  }

  type Action {
    actionText: String!
    nextSceneId: String!
  }

  type Scene {
    sceneId: String!
    description: String!
    actions: [Action!]!
  }

  type Game {
    _id: ID!
    title: String!
    description: String!
    scenes: [Scene!]!
  }

  type UserProgress {
    _id: ID!
    userId: ID!
    gameId: ID!
    currentSceneId: String!
  }

  type Query {
    users: [User!]!
    games: [Game!]!
    game(id: ID!): Game
    userProgress(userId: ID!, gameId: ID!): UserProgress
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User
    createGame(title: String!, description: String!, scenes: [SceneInput!]!): Game
    updateUserProgress(userId: ID!, gameId: ID!, currentSceneId: String!): UserProgress
  }

  input ActionInput {
    actionText: String!
    nextSceneId: String!
  }

  input SceneInput {
    sceneId: String!
    description: String!
    actions: [ActionInput!]!
  }
`;

module.exports = typeDefs;
