import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Login from './Components/Login.jsx'
import Crm from './Components/Crm.jsx'

 const router=createBrowserRouter([
  {
    path:'/',
    element : <Layout/>,
    children:[
      {
        path : 'Login',
        element : <Login/>,
      },
      {
        path : 'Crm',
        element : <Crm/>,
      },
    
    ]
  }
  
 ])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
