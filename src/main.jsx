import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import App from './App.jsx'
import Error from './components/Error'
import Header from './components/custom/Header'
import CreateTrip from './components/create-trip'
import ViewTrip from './components/view-trip/[tripId]'
import { GoogleOAuthProvider } from '@react-oauth/google'
import path from 'path'
import { element } from 'prop-types'
import Footer from './components/custom/Footer'
import MyTrips from './components/my-trips'

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
  {
    path:'/view-trip/:tripId',
    element: <ViewTrip/>,
    errorElement: <Error/>
  },
  {
    path:'/my-trips',
    element: <MyTrips/>,
    errorElement: <Error/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <RouterProvider router={appRouter} />
      </div>
      <Footer/>
    </div>
    </GoogleOAuthProvider>
  </StrictMode>,
)
