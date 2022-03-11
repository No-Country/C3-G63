import React from 'react';
import CardCheckout from '../CardCheckout/CardCheckout';
import './Checkout.module.scss';
import { useParams } from "react-router-dom";


const Checkout = () => {

  const { name_moneda } = useParams();

  return (
    <div>
        <CardCheckout name_moneda={ name_moneda }/>
    </div>
  )
}

export default Checkout;