
import Bar from './Components/Bar';
import Login from './Components/Login';
import Nav from './Components/Nav'
import {Outlet} from 'react-router-dom'


const Layout = () => {
  return (
    <>
    
    <Bar/>
    <Nav/>
    
    <Outlet/>
    
   
    
    </>
  )
}

export default Layout