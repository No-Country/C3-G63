import React from 'react';
import flecha from '../../../Images/flecha.png';
import usuario from '../../../Images/usuario.png';
import './acreditar.scss';
import swal from 'sweetalert';

export const AcreditarView = props => {
  const alertClick = () => {
    swal({
      title: "¿Estas seguro?",
      text: "Una vez acreditado no podras revertir el cambio",
      icon: "warning",
      buttons: ["NO", "Aceptar"],
      dangerMode: true,
    })
  }

  return (
    <>
      <div className='Container-Acreditar'>
        <div className='Container-HEADER'>
          <div className='Container-Acreditar-Left'>
            <img src={flecha} alt="" />
          </div>
          <div className='Container-avatar'>
            <h6>Arleys Gatica</h6>
            <img src={usuario} alt="" />
          </div>
        </div>
        <div className='Container-info'>
          <h1> {city} Acredita a tu Cuenta</h1>
        </div>
        <div className='Container-buttons'>
          <div className='btn-1'>
            <button> Tarjeta de Crédito/Débito</button>
          </div>
          <div className='btn-2' onClick={alertClick}>
            <button> Crypto Wallet</button>
          </div>
        </div>
      </div>
    </>
  )
}