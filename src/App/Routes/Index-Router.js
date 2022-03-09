import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../Home/Home";
import Checkout from "../components/Checkout/Checkout";
import FormEmail from "../components/SignUp/FormEmail";
import LoginEmail from "../components/Login/LoginEmail";


const Login = lazy(() => import('../components/Login/Login'));
const SignIn = lazy(() => import('../components/SignIn/SignIn'));
const SignUp = lazy(() => import('../components/SignUp/SignUp'));
const WalletPage = lazy(() => import('../../Pages/Wallet/WalletPage'));
const Moneda = lazy(() => import('../components/Moneda/Moneda'));
const Acreditar = lazy(() => import('../components/Acreditar/acreditar'));

export function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/acreditar" element={<Acreditar />} />
            <Route path="/portfolio" element={<WalletPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<SignUp />} />
            <Route path="/registroemail" element={<FormEmail />} />
            <Route path="/logincorreo" element={<LoginEmail />} />
            <Route path="/ingreso" element={<SignIn />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/ingreso" element={<SignIn />} />
            <Route path="/moneda" element={<Moneda />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
