import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SeoProvider } from './context/SeoContext';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Staff from './pages/Staff';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "academics",
        element: <Academics />,
      },
      {
        path: "staff",
        element: <Staff />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
], {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SeoProvider>
      <RouterProvider router={router} />
    </SeoProvider>
  </React.StrictMode>,
);