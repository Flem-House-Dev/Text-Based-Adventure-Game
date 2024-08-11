const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String!
  }

  # Uncomment and use Character type if needed in the future
  # type Character {
  #   _id: ID!
  #   name: String!
  #   health: Int!
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