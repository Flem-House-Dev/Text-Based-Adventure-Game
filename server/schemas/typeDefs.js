const typeDefs = `
 type User {
    _id: ID!
    username: String!
    email: String!
  }

  # type Character {
  #   _id: ID!
 #    name: String!
  #   health: Number!
  # }

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
    user(id: ID!): User
    game(id: ID!): Game
    progress(userId: ID!, gameId: ID!): UserProgress
  }

  type Mutation {
    login(email: String!, password: String!): AuthPayload
    addUser(username: String!, email: String!, password: String!): User
    updateProgress(userId: ID!, gameId: ID!, currentSceneId: String!): UserProgress
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

  type AuthPayload {
  token: String!
  user: User!
  }
`;

module.exports = typeDefs;
