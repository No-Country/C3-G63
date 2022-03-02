import React from 'react';
import { AcreditarView } from '../components/Acreditar/acreditarView';
import './page.scss';
import { Moneda } from '../components/Moneda/Moneda';
import WalletPage from '../components/Wallet/WalletPage';

const Page = () => {
  return (
    <div className='body'>
      <AcreditarView />
      <Moneda />
      <WalletPage />
    </div>
  );
};

export default Page;