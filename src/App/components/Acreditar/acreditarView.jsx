import React from 'react';
import flecha from '../../../Images/flecha.png';
import logo from '../../../Images/logo.png';
import usuario from '../../../Images/usuario.png';
import './acreditar.scss';

export const AcreditarView = props => {
  const {
    acreditar,
    configuracion,

    name,
    setAcreditar,
    setConfiguracion,
    setLogo,
    setName,
  } = props;

  return (
    <>
      <div className='Container-Acreditar'>
        <div className='Container-HEADER'>
          <div className='Container-Acreditar-Left'>
            <img src={flecha} alt="" />
            <img className='logo' src={logo} alt="" />
          </div>
          <div className='Container-avatar'>
            <h6>Arleys Gatica</h6>
            <img src={usuario} alt="" />
          </div>
        </div>
        <div className='Container-info'>
          <h1>Acredita a tu Cuenta</h1>
        </div>
        <div className='Container-buttons'>
          <div className='btn-1'>
            <button> Tarjeta de Crédito/Débito</button>
          </div>
          <div className='btn-2'>
            <button> Crypto Wallet</button>
          </div>
        </div>
      </div>
    </>
  )
}