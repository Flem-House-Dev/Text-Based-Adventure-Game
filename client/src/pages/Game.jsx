import { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_GAME } from '../utils/queries';
import { UPDATE_PROGRESS } from '../utils/mutations';

const Game = () => {
  const { loading, error, data } = useQuery(GET_GAME);
  const [updateProgress] = useMutation(UPDATE_PROGRESS);
  const [currentSceneId, setCurrentSceneId] = useState(null);

  useEffect(() => {
    if (data && data.game) {
      setCurrentSceneId(data.game.scenes[0].sceneId);
    }
  }, [data]);

  const handleAction = async (nextSceneId) => {
    setCurrentSceneId(nextSceneId);
    try {
      await updateProgress({ variables: { userId: 'USER_ID', currentSceneId: nextSceneId } });
    } catch (err) {
      console.error('Error updating progress:', err.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const currentScene = data.game.scenes.find(scene => scene.sceneId === currentSceneId);

  return (
    <div>
      <h1>{data.game.title}</h1>
      <p>{currentScene.description}</p>
      <div>
        {currentScene.actions.map(action => (
          <button key={action.nextSceneId} onClick={() => handleAction(action.nextSceneId)}>
            {action.actionText}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Game;
