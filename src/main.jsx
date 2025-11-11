import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Analytics } from "@vercel/analytics/react"
import './index.css'
import Home from './routes/Home'
import MainHome from './routes/MainHome'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/dev",
    element: <MainHome />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Analytics />
  </React.StrictMode>
);
