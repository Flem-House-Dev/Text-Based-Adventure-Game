import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    getCharacter(id: $id) {
      id
      name
      health
      inventory
    }
  }
`;

const Character = ({ id }) => {
  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { name, health, inventory } = data.getCharacter;

  return (
    <div>
      <h2>{name}</h2>
      <p>Health: {health}</p>
      <ul>
        {inventory.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Character;
