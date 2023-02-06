import React from 'react';
import Button from '@mui/material/Button';
import './App.css';
import Navbar from './components/navbar';
import NewsTab from './components/landingPage/newsTab'
import CardComponent from './components/landingPage/cardComponent';
import theme from './styles/themes';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='content'>
        <NewsTab></NewsTab>
        <CardComponent />
      </div>
    </div>
  );
}

export default App;
