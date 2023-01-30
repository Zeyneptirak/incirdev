import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./screen/HomePage";
import Design from './servicesPages/Design';
import Website from './servicesPages/Website'
import YazilimDestegi from './servicesPages/YazilimDestegi'
import Eticaret from './servicesPages/Eticaret'
import Mobil from './servicesPages/Mobil'
import Egitim from './servicesPages/Egitim'
function App() {
  return (
    <div className="bg-gradient-to-r from-card-bg to-right-bg px-[16px] bg-cover">
      
    
        <Router>
          <div className=''>
          
            <Routes>
              <Route path='/' element={<HomePage/>}></Route>
              <Route path='/design' element={<Design/>}></Route>
              <Route path='/website' element={<Website/>}></Route>
              <Route path='/yazilim' element={<YazilimDestegi/>}></Route>
              <Route path='/eticaret' element={<Eticaret/>}></Route>
              <Route path='/mobil' element={<Mobil/>}></Route>
              <Route path='/egitim' element={<Egitim/>}></Route>

            </Routes>
            
          </div>
        </Router>

    </div>
  );
}

export default App;
