// src/components/Games.jsx
import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_GAME } from '../utils/queries';
import { ADD_GAME } from '../utils/mutations';

const Games = () => {
  const { loading, error, data } = useQuery(GET_GAME);
  const [addGame] = useMutation(ADD_GAME);
  const [selectedGame, setSelectedGame] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleAddGame = async () => {
    try {
      await addGame({ variables: { title, content } });
      setTitle('');
      setContent('');
    } catch (err) {
      console.error('Error adding game:', err);
    }
  };

  const handleUpdateGame = async (id) => {
    try {
      await updateGame({ variables: { id, title, content } });
      setTitle('');
      setContent('');
      setSelectedGame(null);
    } catch (err) {
      console.error('Error updating game:', err);
    }
  };

  return (
    <div>
      <h1>Games</h1>
      <ul>
        {data.games.map((game) => (
          <li key={game.id}>
            <h2>{game.title}</h2>
            <p>{game.content}</p>
            <button onClick={() => setSelectedGame(game)}>Edit</button>
          </li>
        ))}
      </ul>

      <h2>{selectedGame ? 'Edit Game' : 'Add New Game'}</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        onClick={() =>
          selectedGame ? handleUpdateGame(selectedGame.id) : handleAddGame()
        }
      >
        {selectedGame ? 'Update Game' : 'Add Game'}
      </button>
    </div>
  );
};

export default Games;
