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
      _id
      username
      email
    }  }
`;


// Update user progress
export const UPDATE_PROGRESS = gql`
  mutation UpdateProgress($userId: ID!, $currentSceneId: String!) {
    updateProgress(userId: $userId, currentSceneId: $currentSceneId) {
      _id
      userId
      currentSceneId
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