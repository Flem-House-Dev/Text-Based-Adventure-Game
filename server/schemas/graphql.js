const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
  }
  type Game {
    _id: ID!
    title: String!
    description: String!
    actions: [String!]!
  }
  type Query {
    users: [User!]!
    games: [Game!]!
  }
  type Mutation {
    createUser(username: String!, email: String!, password: String!): User
    createGame(title: String!, description: String!, actions: [String!]!): Game
  }
`);
