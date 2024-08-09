const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    thoughts: [Thought]!
  }

  type Thought {
    _id: ID
    thoughtText: String
    thoughtAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(thoughtId: ID!): Thought
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addThought(thoughtText: String!): Thought
    addComment(thoughtId: ID!, commentText: String!): Thought
    removeThought(thoughtId: ID!): Thought
    removeComment(thoughtId: ID!, commentId: ID!): Thought
  }
`;

module.exports = typeDefs;

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
