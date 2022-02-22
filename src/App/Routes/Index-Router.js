import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../components/Login/Login';
import SignIn from '../components/SignIn/SignIn';
import SignUp from '../components/SignUp/SignUp';


export function App() {
  return (
    <BrowserRouter>

      
      <Routes>
        
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<SignUp />} />
        <Route path="/ingreso" element={<SignIn />}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;