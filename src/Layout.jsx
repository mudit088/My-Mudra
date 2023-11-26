
import Bar from './Components/Bar';
import Nav from './Components/Nav'
import Box from './Components/Box'
import Modal from './Components/Modal';
import OptionTab from './Components/OptionTab'
import {Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <>
    
    <Bar/>
    <Outlet/>
    <Nav/>
    <Box/>
   <OptionTab/>
    <Modal/>
    
    </>
  )
}

export default Layout