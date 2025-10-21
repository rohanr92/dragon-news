import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Root/Root';
import Home from '../HomePage/Home';
import AllCategories from '../AllCategory/AllCategories';
import Auth from '../Auth/Auth';
import Login from '../Auth/Login';
import Register from '../Auth/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        Component: Home,
      },
            {
        path: '/all-categories/:id',
        Component: AllCategories,
      },
  
    ]
  },
  {
    path: "/auth",
    element: <Auth></Auth>,
    children: [
      {
        path: "login", // → /auth/login
        Component: Login,
      },
      {
        path: "register", // → /auth/register
        Component: Register,
      },
    ],
  },
]);

export default router;