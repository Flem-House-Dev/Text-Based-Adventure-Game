const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String!
    token: String!
  }

  type Action {
    actionText: String!
    nextSceneId: String!
  }

  type Scene {
    sceneId: String!
    description: String!
    image: String
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
    currentSceneId: String!
  }

  type Query {
    user(id: ID!): User
    game: Game
    progress(userId: ID!): UserProgress
  }

  type Mutation {
    login(email: String!, password: String!): AuthPayload
    addUser(username: String!, email: String!, password: String!): User
    updateProgress(userId: ID!, currentSceneId: String!): UserProgress
  }

  type AuthPayload {
    token: String!
    user: User!
  }
`;

module.exports = typeDefs;