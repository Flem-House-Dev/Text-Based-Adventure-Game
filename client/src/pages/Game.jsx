import { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_GAME } from '../utils/queries';
import { UPDATE_PROGRESS } from '../utils/mutations';

const Game = () => {
  // Retrieve game data, update progress mutation, and set scenes
  const { loading, error, data } = useQuery(GET_GAME);
  const [updateProgress] = useMutation(UPDATE_PROGRESS);
  const [currentSceneId, setCurrentSceneId] = useState(null);

  useEffect(() => {
    // If there is data, a game, and scenes
    if (data && data.game && data.game.scenes.length > 0) {
      // Set the current scene to the first scene
      setCurrentSceneId(data.game.scenes[0].sceneId);
    }
  }, [data]);

  const handleAction = async (nextSceneId) => {
    // Set the current scene as the next scene
    setCurrentSceneId(nextSceneId);
    try {
      // Update user progress by matching userId with the current scene
      await updateProgress({ variables: { userId: 'USER_ID', currentSceneId: nextSceneId } });
    } catch (err) {
      console.error('Error updating progress:', err.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // If there is data, find the scene; else make null (safety check)
  const currentScene = data && data.game && data.game.scenes
    ? data.game.scenes.find(scene => scene.sceneId === currentSceneId)
    : null;

  return (
    <div className="game-container">
      {/* Safety check */}
      <h1 className="game-title">{data.game ? data.game.title : 'No Game Data'}</h1>
      {currentScene ? (
        <>
          <p className="game-description">{currentScene.description}</p>
          <div className="choices-container">
            {currentScene.actions.map(action => (
              <button
                key={action.nextSceneId}
                className="choice-button"
                onClick={() => handleAction(action.nextSceneId)}
              >
                {action.actionText}
              </button>
            ))}
          </div>
        </>
      ) : (
        // Safety check
        <p className="game-description">No scene data available</p>
      )}
    </div>
  );
};

export default Game;