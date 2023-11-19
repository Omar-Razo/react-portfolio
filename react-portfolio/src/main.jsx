import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App';
import ErrorPage from './pages/ErrorPage';
import AboutMePage from './pages/AboutMePage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ResumePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutMePage />,
      },
      {
        path: 'Portfolio',
        element: <PortfolioPage />,
      },
      {
        path: 'Contact',
        element: <ContactPage />,
      },
      {
        path: 'Resume',
        element: <ResumePage />,
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
