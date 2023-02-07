import React from 'react';
import './App.css';
import Navbar from './components/navbar';


import Footer from './components/footer/footer';
import { Route, Routes } from 'react-router-dom'
import { Aktuelles } from './components/pages/Aktuelles';
import { About } from './components/pages/About';
import { Home } from './components/pages/home';
import { Termine } from './components/pages/Termine';




function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <Navbar />
      </div>


      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Aktuelles" element={<Aktuelles />}></Route>
        <Route path="/About" element={<About />}> </Route>
        <Route path="/Termine" element={<Termine />}> </Route>
      </Routes>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
}



export default App;
