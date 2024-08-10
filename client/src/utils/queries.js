import { gql } from '@apollo/client';

// fetch user details based on username
export const QUERY_USER = gql`
  query User($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;


// fetch all characters
export const QUERY_CHARACTERS = gql`
  query GetCharacters {
    characters {
      _id
      name
      health
      inventory
    }
  }
`;

// fetch a single character by ID
export const QUERY_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      _id
      name
      health
      inventory
    }
  }
`;

// fetch the current user (assuming you have a session-based query)
export const QUERY_ME = gql`
  query Me {
    me {
      _id
      username
      email
    }
  }
`;

// fetch all games
export const QUERY_GAMES = gql`
  query GetGames {
    games {
      _id
      title
      description
      scenes {
        sceneId
        description
        actions {
          actionText
          nextSceneId
        }
      }
    }
  }
`;

// fetch a single game by ID
export const QUERY_GAME = gql`
  query GetGame($id: ID!) {
    game(id: $id) {
      _id
      title
      description
      scenes {
        sceneId
        description
        actions {
          actionText
          nextSceneId
        }
      }
    }
  }
`;

