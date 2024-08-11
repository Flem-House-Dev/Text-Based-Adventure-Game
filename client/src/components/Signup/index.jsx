import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../mutations';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [addUser, { error }] = useMutation(ADD_USER);
  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      if (data) {
        localStorage.removeItem('id_token'); // Clear any existing tokens
        navigate('/login'); // Redirect to login page
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        name="username"
        type="text"
        placeholder="Your username"
        value={formState.username}
        onChange={handleChange}
      />
      <input
        name="email"
        type="email"
        placeholder="Your email"
        value={formState.email}
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        placeholder="Your password"
        value={formState.password}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
      {error && <div>Error signing up</div>}
    </form>
  );
};

export default Signup;