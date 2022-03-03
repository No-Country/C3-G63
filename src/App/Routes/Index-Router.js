import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const Login = lazy(() => import('../components/Login/Login'));
const SignIn = lazy(() => import('../components/SignIn/SignIn'));
const SignUp = lazy(() => import('../components/SignUp/SignUp'));
const WalletPage = lazy(() => import('../components/Wallet/WalletPage'));
const Moneda = lazy(() => import('../components/Moneda/Moneda'));
const Page = lazy(() => import('../Page/page'));
const AcreditarView = lazy(() => import('../components/Acreditar/acreditarView'));

export function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/acreditar" element={<AcreditarView />} />
          <Route path="/portfolio" element={<WalletPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<SignUp />} />
          <Route path="/ingreso" element={<SignIn />} />
          <Route path="/moneda" element={<Moneda />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;