import { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_GAME } from '../utils/queries';
import { UPDATE_PROGRESS } from '../utils/mutations';

const Game = () => {
  // retrieve game data, updating progress mutation, and set scenes
  const { loading, error, data } = useQuery(GET_GAME);
  const [updateProgress] = useMutation(UPDATE_PROGRESS);
  const [currentSceneId, setCurrentSceneId] = useState(null);

  useEffect(() => {
    // if there is data, a game, and scenes
    if (data && data.game && data.game.scenes.length > 0) {
      // sets the current scene to first scene
      setCurrentSceneId(data.game.scenes[0].sceneId);
    }
  }, [data]);

  const handleAction = async (nextSceneId) => {
    // sets the current scene as the next scene
    setCurrentSceneId(nextSceneId);
    try {
      // update user progress by matching userid with current scene
      await updateProgress({ variables: { userId: 'USER_ID', currentSceneId: nextSceneId } });
    } catch (err) {
      console.error('Error updating progress:', err.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // if there is data, find the scene, else make null (safety check)
  const currentScene = data && data.game && data.game.scenes
    ? data.game.scenes.find(scene => scene.sceneId === currentSceneId)
    : null;

  return (
    <div>
      {/* (safety check) */}
      <h1>{data.game ? data.game.title : 'No Game Data'}</h1>
      {currentScene ? (
        <>
          <p>{currentScene.description}</p>
          <div>
            {currentScene.actions.map(action => (
              <button key={action.nextSceneId} onClick={() => handleAction(action.nextSceneId)}>
                {action.actionText}
              </button>
            ))}
          </div>
        </>
      ) : (
        // (safety check)
        <p>No scene data available</p>
      )}
    </div>
  );
};

export default Game;
