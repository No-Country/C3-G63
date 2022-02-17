import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from '../components/SignUp/SignUp';
import FormLogin from '../Login/formLogin';
import Ingresa from '../Login/Ingresa';
import Page from '../Page/page';

export function App() {
  return (
    <BrowserRouter>
    <Ingresa />
      <Routes>
        <Route path="/" element={<Page />} />
      </Routes>
      <Routes>
        <Route exact path="/formLogin" element={<FormLogin/>} />
      </Routes>
      <Routes>
        <Route exact path ="/Registro" element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;