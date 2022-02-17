import React from 'react';
import list from '../../../Images/list.png';
import './acreditar.scss';

export const AcreditarView = props => {
  const {
    acreditar,
    configuracion,
    logo,
    name,
    setAcreditar,
    setConfiguracion,
    setLogo,
    setName,
  } = props;

  return (
    <>
      <div className='Container-Acreditar'>
        <div className='Container-avatar'>
          <h6>name</h6>
          <img src={list} alt="" />
        </div>
        <div className='Container-info'>
          <h1>{name}Acredita a tu Cuenta</h1>
        </div>
        <div className='btn-1'>
          <button>
            firts
          </button>
        </div>
        <div className='btn-2'>
          <button>
            second
          </button>
        </div>
      </div>
    </>
  )
}