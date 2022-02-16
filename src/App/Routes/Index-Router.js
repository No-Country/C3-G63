import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../components/Acreditar/Login/Login';
import Page from '../Page/page';

export function App() {
  return (
    <BrowserRouter>
    <Login/>
      <Routes>
        <Route path="/" element={<Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;