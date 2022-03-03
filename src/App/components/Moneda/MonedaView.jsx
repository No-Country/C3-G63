import React, { useState } from 'react';
import './Moneda.scss';
import fondo from '../../../Assets/fondo.png';
import flecha from '../../../Images/flecha.png';

export const MonedaView = (props) => {
  const { array } = props;

  return (
    <>
      <div className='fondo'>
        <div className='vent-compra'>
          <h4>{`venta:4000$ (-1000) | Compra:42,000$(+100)`}</h4>
          <img src={fondo} alt="" />
        </div>
        <div className='btn-vent'>
          <button className='btn-venta'>Venta</button>
          <button className='btn-compra'>Compra</button>
        </div>
        <div className="container">
          <h1 className='h1E'>Estadistica</h1>
          {array.map((item, index) => {
            return (
              <div className="Container-Grid " key={index}>
                <div className="Moneda__item__name ">
                  <p>{item.name}</p>
                </div>
                <div className="Moneda__item__number">
                  <h2>{item.number}</h2>
                </div>
              </div>
            );
          })}
        </div>
        <div className='noticias'>
          <h1 className='h1N'>Noticias</h1>
          <div className='noticias-container'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className='noticias-images'>
              <img src={flecha} alt="" />
            </div>
          </div>
        </div>
        <div className='container-info'>
          <h4 className='h4'>Ver mas Informacion</h4>

        </div>
      </div>
    </>
  );
};