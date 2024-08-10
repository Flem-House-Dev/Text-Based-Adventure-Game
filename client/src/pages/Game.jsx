import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_GAME } from '../utils/queries';

const Games = () => {
  const { loading, error, data } = useQuery(GET_GAME);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Games</h1>
      <ul>
        {data.games.map((game) => (
          <li key={game._id}>
            <h2>{game.title}</h2>
            <p>{game.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Games;
