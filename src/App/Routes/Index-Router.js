import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../components/Login/Login';
import SignIn from '../components/SignIn/SignIn';
import SignUp from '../components/SignUp/SignUp';
import WalletPage from '../components/Wallet/WalletPage';
import { MonedaView } from '../components/Moneda/MonedaView';
import Page from '../Page/page';
import { AcreditarView } from '../components/Acreditar/acreditarView';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/acreditar" element={<AcreditarView />} />
        <Route path="/portfolio" element={<WalletPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<SignUp />} />
        <Route path="/ingreso" element={<SignIn />} />
        <Route path="/moneda" element={<MonedaView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;