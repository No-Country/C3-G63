import {React, useState} from 'react';
import './CardCheckout.scss';
import CardCheckoutCode from './CardCheckoutCode';


const CardCheckout = () => {

    /* Giro boton Formulario */

    const [botonGirado, setbotonGirado] = useState (true);

    const giroBoton = () => {
        setbotonGirado (!botonGirado);
        console.log(botonGirado);
    };

    /*<CardCheckoutCode />*/
    return (
    <div className='contenedor__checkout'>
        <section className="tarjeta" id="tarjeta"> {/* EL .active se hace con JS */}

        {/* TARJETA DELANTERA */}
        <div className="delantera">
            <div className="logo-marca">
                <img src="visa.png" alt="logo visa" />
            </div>
            <img src="chip-tarjeta.png" className="chip" alt="chip tarjeta" />

            <div className="datos">
                <div className="grupo" id="numero">
                    <p className="label">Número tarjeta</p>
                    <p className="numero">#### #### #### ####</p>
                </div>

                <div className="flexbox">
                    <div className="grupo" id="nombre">
                        <p className="label">Nombre Tarjeta</p>
                        <p className="nombre">Jhon Doe</p>
                    </div>

                    <div className="grupo" id="expiracion">
                        <p className="label">Expiracion</p>
                        <p className="expiracion">
                            <span className="mes">MM</span> / <span className="year">AA</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>


        {/* TARJETA TRASERA */}
        <div className="trasera">

            <div className="barra-magnetica"></div>

            <div className="datos">
                <div className="grupo" id="firma">
                    <p className="label">Firma</p>
                    <div className="firma">
                        <p></p>
                    </div>
                </div>
                <div className="grupo" id="ccv">
                    <p className="label">CCV</p>
                    <p className="ccv"></p>
                </div>
            </div>

            <p className="leyenda">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, nobis?
            </p>

            <a href="" className="link-banco">www.banco.com</a>
        </div>
        </section>


        {/* BOTON FORMULARIO */}
        <div className="contenedor-btn">
        <button className = { giroBoton ? 'btn-abrir-formulario active' : 'btn-abrir-formulario'} id="btn-abrir-formulario" onClick={giroBoton} >
            <i class="fas fa-plus"></i>
        </button>
        </div>


            {/* FORMULARIO */}
            <form action="" id="formulario-tarjeta" className = { giroBoton ? 'formulario-tarjeta active' : 'formulario-tarjeta'}>

            <div className="grupo">
                <label for="inputNumero">Número Tarjeta</label>
                <input type="text" id="inputNumero" maxlength="19" autocomplete="off" />
            </div>

            <div className="grupo">
                <label for="inputNombre">Nombre</label>
                <input type="text" id="inputNombre" maxlength="19" autocomplete="off" />
            </div>

            <div className="flexbox">

                <div className="grupo expira">
                    <label for="selectMes">Expiracion</label>
                    <div className="flexbox">
                        
                        <div className="grupo-select">
                            <select name="mes" id="selectMes">
                                <option disabled selected>Mes</option>
                            </select>
                            <img src="" alt="" />
                        </div>

                        <div className="grupo-select">
                            <select name="year" id="selectYear">
                                <option disabled selected>Año</option>
                            </select>
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>

                <div className="grupo ccv">
                    <label for="inputCCV">CCV</label>
                    <input type="text" id="inputCCV" maxlength="3" />
                </div>
            </div>

            <button type="submit" className="btn-enviar">Enviar</button>
            </form>
        </div>
    );
}

export default CardCheckout;