import React from 'react';
import './Moneda.scss';
import fondo from '../../../Assets/fondo.png';

export const MonedaView = ({ holis, Estadistica, array }) => {

  console.log(holis);
  console.log(Estadistica);
  console.log(array);

  return (
    <>
      <h1>{holis}ss</h1>
      <h1>{Estadistica}</h1>
    </>
  )
}