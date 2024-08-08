import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css'; // Import custom CSS

import App from './App';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import SingleThought from './pages/SingleThought';
import Profile from './pages/Profile';
import ErrorPage from './pages/ErrorPage';

// Create the router instance with routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      }, 
      {
        path: '/login',
        element: <Login />
      }, 
      {
        path: '/signup',
        element: <Signup />
      }, 
      {
        path: '/profiles/:username',
        element: <Profile />
      }, 
      {
        path: '/me',
        element: <Profile />
      }, 
      {
        path: '/thoughts/:thoughtId',
        element: <SingleThought />
      }
    ]
  }
]);

// Render the application using React 18+ createRoot API
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
