import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <div className="bg-[#e9ded6] font-serif h-screen">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
