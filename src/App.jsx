import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Login from './assets/authentication/login'
import SignUp from './assets/authentication/SignUp'
import {createBrowserRouter,  RouterProvider} from 'react-router-dom'
import routes from './router/routes.jsx'

const router = createBrowserRouter([...routes])

function App() {

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
