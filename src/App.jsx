
import Bar from './Components/Bar';
import Nav from './Components/Nav'
import react, { useState } from 'react'
import Box from './Components/Box'
import Filters from './Components/Filters';
import Options from './Components/Options';


import { Card, Typography } from "@material-tailwind/react";





const App = () =>
 {
  const[search,setSearch] = useState('')
  console.log(search)
  return (
    <div className="bg-blue-50">
    <Bar/>
    <Nav/>
    <Box/>
     <Options/>
    <Filters/>
    </div>
  );
};

export default App;

