const typeDefs = `
type Character {
  id: ID!
  name: String!
  health: Int!
  inventory: [String!]!
}

type Query {
  getCharacter(id: ID!): Character
  listCharacters: [Character!]!
}

type Mutation {
  createCharacter(name: String!, health: Int!, inventory: [String!]!): Character
  updateCharacter(id: ID!, health: Int): Character
  deleteCharacter(id: ID!): Character
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
