import { gql } from '@apollo/client';

// login user
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// add new user
export const ADD_USER = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;


// Update user progress
export const UPDATE_PROGRESS = gql`
  mutation UpdateProgress($userId: ID!, $gameId: ID!, $currentSceneId: String!) {
    updateProgress(userId: $userId, gameId: $gameId, currentSceneId: $currentSceneId) {
      _id
      userId
      gameId
      currentSceneId
    }
  }
`;

// add new game
export const ADD_GAME = gql`
  mutation AddGame($title: String!, $description: String!, $scenes: [SceneInput]) {
    addGame(title: $title, description: $description, scenes: $scenes) {
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

// update existing game
export const UPDATE_GAME = gql`
  mutation UpdateGame($id: ID!, $title: String, $description: String, $scenes: [SceneInput]) {
    updateGame(id: $id, title: $title, description: $description, scenes: $scenes) {
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

// delete existing game
export const DELETE_GAME = gql`
  mutation DeleteGame($id: ID!) {
    deleteGame(id: $id) {
      _id
      title
    }
  }
`;

// add new character
// export const ADD_CHARACTER = gql`
//   mutation AddCharacter($name: String!, $health: Int!, $inventory: [String]) {
//     addCharacter(name: $name, health: $health, inventory: $inventory) {
//       _id
//       name
//       health
//       inventory
//     }
//   }
// `;

// update existing character
// export const UPDATE_CHARACTER = gql`
//   mutation UpdateCharacter($id: ID!, $name: String, $health: Int, $inventory: [String]) {
//     updateCharacter(id: $id, name: $name, health: $health, inventory: $inventory) {
//       _id
//       name
//       health
//       inventory
//     }
//   }
// `;