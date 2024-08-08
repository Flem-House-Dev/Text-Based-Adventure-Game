import React from 'react';
import { useParams } from 'react-router-dom';
import Character from '../components/Character';

const CharacterPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Character Details</h1>
      <Character id={id} />
    </div>
  );
};

export default CharacterPage;
