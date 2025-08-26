import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Acceuil from './composants/acceuil.jsx'
import Contact from './composants/contact.jsx'
import Infos from './composants/infos.jsx'
import Projet from './composants/projet.jsx'

const route = createBrowserRouter([
  { path: "/", element: <Acceuil />  },
  { path: "/acceuil", element: <Acceuil /> },
  { path: "/contact", element: <Contact /> },
  { path: "/infos", element: <Infos /> },
  { path: "/projets", element: <Projet /> }, // ← le carousel
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)  