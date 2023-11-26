import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Login from './Components/Login.jsx'

 const router=createBrowserRouter([
  {
    path : '/',
    element : <Layout/>,
    children:[
      {
        path:'/Login',
       element : <Login/>
      },
    ]
  }
  
 ])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
