import React from 'react';

const CardCheckoutCode = () => {

  
    const tarjeta = document.querySelector('#tarjeta'),
    btnAbrirFormulario = document.querySelector('#btn-abrir-formulario'),
    formulario = document.querySelector('#formulario-tarjeta');


    /* Giro Tarjeta */
    tarjeta.addEventListener('click', () => {
        tarjeta.classList.toggle('active');
    });

    /* Giro boton Formulario */
    btnAbrirFormulario.addEventListener('click', () => {
        btnAbrirFormulario.classList.toggle('active');
        formulario.classList.toggle('active');
    });
;
}

export default CardCheckoutCode;