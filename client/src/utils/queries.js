import { gql } from '@apollo/client';

// fetch user details based on username
export const GET_USERS = gql`
  query User($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

// fetch the current user
export const GET_ME = gql`
  query Me {
    me {
      _id
      username
      email
    }
  }
`;

// fetch game
export const GET_GAME = gql`
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

// fetch all characters
// export const QUERY_CHARACTERS = gql`
//   query GetCharacters {
//     characters {
//       _id
//       name
//       health
//       inventory
//     }
//   }
// `;

// fetch a single character by ID
// export const QUERY_CHARACTER = gql`
//   query GetCharacter($id: ID!) {
//     character(id: $id) {
//       _id
//       name
//       health
//       inventory
//     }
//   }
// `;