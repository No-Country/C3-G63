import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../components/Acreditar/Login/Login';
import Home from '../Home/Home';

export function App() {
  return (
    <BrowserRouter>
    <Login/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;