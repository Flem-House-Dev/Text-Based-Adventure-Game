const typeDefs = `
 type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
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

  type Query {
    user(id: ID!): User
    game(id: ID!): Game
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User
    createGame(title: String!, description: String!, scenes: [SceneInput!]!): Game
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
