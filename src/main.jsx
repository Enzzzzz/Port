import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './routes/Home'
import Page2 from './routes/Page2'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/page2",
    element: <Page2 />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
