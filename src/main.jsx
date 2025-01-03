import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import App from './App.jsx'
import Error from './components/Error'
import Header from './components/custom/Header'
import CreateTrip from './components/create-trip'
import { GoogleOAuthProvider } from '@react-oauth/google'
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
    element: <CreateTrip/>,
    error: <Error/>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
      <Header />
      <RouterProvider router={appRouter}/>
    </GoogleOAuthProvider>
  </StrictMode>,
)
