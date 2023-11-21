
import Bar from './Components/Bar';
import Nav from './Components/Nav'
import react, { useState } from 'react'
import Box from './Components/Box'

import Modal from './Components/Modal';
import OptionTab from './Components/OptionTab'






const App = () =>
 {
  return (
    <div className="bg-blue-50">
    <Bar/>
    <Nav/>
    <Box/>
   <OptionTab/>
    <Modal/>
    
    </div>
  );
};

export default App;

