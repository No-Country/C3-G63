import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page from '../Page/page';
import { AcreditarView } from '../components/Acreditar/acreditarView';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/acreditar" element={<AcreditarView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;