import React from 'react';
import CardCheckout from '../CardCheckout/CardCheckout';
import Header from '../Header/Header';
import './Checkout.module.scss';


const Checkout = () => {
  return (
    <div>
        <Header />
        <CardCheckout />
    </div>
  )
}

export default Checkout;