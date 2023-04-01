import React from 'react';
import SearchBox from './Components/SearchBox';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'

function App() {
  return (
    
    <div className='searchbar'>
      <center><h1>Hindustan Care</h1></center>
      <center><SearchBox /></center>
      
    </div>
    
  );
}

export default App;
