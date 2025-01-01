import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import App from './App.jsx'
import Error from './components/Error'
import Header from './components/custom/Header'
import path from 'path'
import { element } from 'prop-types'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    error: <Error />,
  },
  {
    path:'/create-trip',
    element: <div>Create-trip</div>,
    error: <Error/>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <RouterProvider router={appRouter}/>
  </StrictMode>,
)
