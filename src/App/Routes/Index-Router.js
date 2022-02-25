import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../components/Login/Login';
import SignIn from '../components/SignIn/SignIn';
import SignUp from '../components/SignUp/SignUp';
import WalletPage from '../../Pages/Wallet/WalletPage';


import Home from '../Home/Home';
import { AcreditarView } from '../components/Acreditar/acreditarView';
import Checkout from '../components/Checkout/Checkout';
import FormEmail from '../components/SignUp/FormEmail';
import LoginEmail from '../components/Login/LoginEmail';

export function App() {
  return (
    <BrowserRouter>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acreditar" element={<AcreditarView />} />
        <Route path="/portfolio" element={<WalletPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<SignUp />} />
        <Route path='/registroemail' element={<FormEmail />} />`
        <Route path='/longinCorreo' element={<LoginEmail />} />
        <Route path="/ingreso" element={<SignIn />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;