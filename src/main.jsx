
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './components/About'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'
import PageNotFound from './components/PageNotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <About />
  },
  { 
    path: '/about-me',
    element: <About /> 
  },
  { 
    path: '/resume',
    element: <Resume /> 
  },
  { 
    path: '/projects',
    element: <Projects /> 
  },
  { 
    path: '/services',
    element: <Services /> 
  },
  { 
    path: '/contact',
    element: <Contact /> 
  },
  { 
    path: '*',
    element: <PageNotFound /> 
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
