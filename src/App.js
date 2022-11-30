import './App.css';
import Header from './component/Header.js';
import Mainboard from './component/Mainboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter,Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={ <Mainboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
