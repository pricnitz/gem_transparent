import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './About';  // Ensure correct import of About component
import Reachus from './Reachus';
import Home from './Home';
import Termsandcondition from './Termsandcondition';


const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About/>} />  
      <Route path='/reachus' element={<Reachus/>} />  
      <Route path='/terms Condition' element={<Termsandcondition/>} />  
    </Routes>
  );
};

export default AllRoutes;
