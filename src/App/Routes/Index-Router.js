import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../Home/Home";
import Checkout from "../components/Checkout/Checkout";
import FormEmail from "../components/SignUp/FormEmail";
import LoginEmail from "../components/Login/LoginEmail";
import ProtectedRoute from "./ProtectedRoute";

const Login = lazy(() => import('../components/Login/Login'));
const SignIn = lazy(() => import('../components/SignIn/SignIn'));
const SignUp = lazy(() => import('../components/SignUp/SignUp'));
const WalletPage = lazy(() => import('../../Pages/Wallet/WalletPage'));
const Moneda = lazy(() => import('../components/Moneda/Moneda'));
// const NoMatch = lazy(() => import('../components/NoMatch/NoMatch'));
const Acreditar = lazy(() => import('../components/Acreditar/acreditar'));

export function App() {

  // ===================
  // ROUTER
  // ===================

  // Si desean evitar que un usuario accese alguna ruta, solo se debe
  // encerrar al elemento dentro del componente "ProtectedRoute". Este
  // componente guarda la última ruta en la que estaba el usuario y lo 
  // redirige ahí luego de loguearse

  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/acreditar/:name_moneda" element={<ProtectedRoute><Acreditar /></ProtectedRoute>} />
            <Route path="/portfolio" element={<ProtectedRoute><WalletPage /></ProtectedRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<SignUp />} />
            <Route path="/registroemail" element={<FormEmail />} />
            <Route path="/logincorreo" element={<LoginEmail />} />
            <Route path="/ingreso" element={<SignIn />} />
            <Route path="/checkout/:name_moneda" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
            <Route path="/ingreso" element={<SignIn />} />
            <Route path="/moneda/:name_moneda" element={<ProtectedRoute><Moneda /></ProtectedRoute>}/>
            {/* <Route path="*" element={<NoMatch />}/> */}
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
