import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormLogin from '../Login/formLogin';
import Login from '../Login/Login';
import Page from '../Page/page';

export function App() {
  return (
    <BrowserRouter>
    <Login/>
      <Routes>
        <Route path="/" element={<Page />} />
      </Routes>
      <Routes>
        <Route exact path="/formLogin" element={<FormLogin/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;