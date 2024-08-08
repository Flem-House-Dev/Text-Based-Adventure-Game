import React, { useState, useEffect } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';

const GET_GAME = gql`
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

const GET_USER_PROGRESS = gql`
  query GetUserProgress($userId: ID!, $gameId: ID!) {
    userProgress(userId: $userId, gameId: $gameId) {
      currentSceneId
    }
  }
`;

const UPDATE_USER_PROGRESS = gql`
  mutation UpdateUserProgress($userId: ID!, $gameId: ID!, $currentSceneId: String!) {
    updateUserProgress(userId: $userId, gameId: $gameId, currentSceneId: $currentSceneId) {
      currentSceneId
    }
  }
`;

const Game = ({ match }) => {
  const [currentScene, setCurrentScene] = useState(null);
  const userId = localStorage.getItem('userId'); // Replace with actual userId logic
  const gameId = match.params.id;

  const { loading, error, data } = useQuery(GET_GAME, {
    variables: { id: gameId },
  });

  const { loading: progressLoading, error: progressError, data: progressData } = useQuery(GET_USER_PROGRESS, {
    variables: { userId, gameId },
  });

  const [updateUserProgress] = useMutation(UPDATE_USER_PROGRESS);

  useEffect(() => {
    if (data && progressData) {
      const game = data.game;
      const userProgress = progressData.userProgress;
      const initialScene = userProgress ? game.scenes.find(scene => scene.sceneId === userProgress.currentSceneId) : game.scenes[0];
      setCurrentScene(initialScene);
    }
  }, [data, progressData]);

  const handleAction = async (nextSceneId) => {
    const nextScene = data.game.scenes.find(scene => scene.sceneId === nextSceneId);
    setCurrentScene(nextScene);
    await updateUserProgress({ variables: { userId, gameId, currentSceneId: nextSceneId } });
  };

  if (loading || progressLoading) return <p>Loading...</p>;
  if (error || progressError) return <p>Error :(</p>;

  return (
    <div>
      <h1>{data.game.title}</h1>
      <p>{currentScene.description}</p>
      <ul>
        {currentScene.actions.map((action, index) => (
          <li key={index} onClick={() => handleAction(action.nextSceneId)}>
            {action.actionText}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Game;
