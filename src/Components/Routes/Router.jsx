import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Root/Root';
import Home from '../HomePage/Home';
import AllCategories from '../AllCategory/AllCategories';

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
      }
    ]
  },
]);

export default router;