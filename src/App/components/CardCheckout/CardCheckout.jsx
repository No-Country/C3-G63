import { React, useState, useContext } from 'react';
import './CardCheckout.scss';
import { Context } from "../../../store/auth-context";
import { doc, updateDoc, getDoc } from 'firebase/firestore'
import { useNavigate } from "react-router-dom";
import axios from "axios";


const CardCheckout = (props) => {

    const { name_moneda } = props;
    const navigate = useNavigate();

    const [number, setNumber] = useState("")
    const [buttonTurned, setButtonTurned] = useState(true)
    const [turnCard, setTurnCard] = useState(true);
    const [cardInfoName, setCardInfoName] = useState("")
    const [month, setMonth] = useState("")
    const [myYear, setMyYear] = useState("")
    const [myCode, setMyCode] = useState("")

    // ===================
    // PAY HANDLER
    // ===================

    const context = useContext(Context);
    const db = context.db;

    const enviarHandler = async (event) => {

        // Evitar que haga submit al form
        event.preventDefault();
        
        // Se obtiene la data de todas las cryptos
        const fetchedData = await axios.get("https://nc-g63-default-rtdb.firebaseio.com/crypto.json");
        
        // Precio de la moneda a comprar
        let coinPrice = fetchedData.data[name_moneda.toLowerCase()].price;
        
        // Convierte el precio en un número si está dado por un string
        if (typeof coinPrice == "string") {

            // Intercambio: Si tiene ambos caracteres
            if (coinPrice.includes(".") && coinPrice.includes(",")) {
                coinPrice = coinPrice.replace(/[.,]/g, (element) => element === ',' ? '.' : ',');
            }

            // Reemplazo: Si solo incluye coma
            else if (!coinPrice.includes(".") && coinPrice.includes(",")) {
                coinPrice = coinPrice.replace(/[,]/g, '.');
            }
            
            // Eliminación comas
            coinPrice = Number(coinPrice.replace(/[,]/g, ''));

        }

        // Datos del usuario
        const docRef = doc(db, "user_profile", context.user.uid);
        const docSnap = await getDoc(docRef);

        // Se extraen los datos útiles
        if (docSnap.exists()) {

            // Se extraen las monedas y los fondos del usuario
            const fondos = docSnap.data().fondos;
            const monedas = docSnap.data().monedas;

            // Se revisa si el usuario tiene la moneda
            let userOwnsCoin = false;
            let coinIdx = -1;
            monedas.forEach( (moneda, idx) => {
                if (moneda.name === name_moneda) {
                    userOwnsCoin = true;
                    coinIdx = idx;
                }
            })

            // Se agrega la moneda al inventario del usuario
            if (userOwnsCoin) {
                monedas[coinIdx].quantity += 1;
            }
            else {
                monedas.push({ name: name_moneda, quantity: 1});
            }

            // Se intenta actualizar el documento
            try {
                await updateDoc(doc(db, "user_profile", context.user.uid), {
                    fondos: fondos - coinPrice,
                    monedas: monedas
                })

                // Se redirige al portafolio
                navigate("/portfolio");
            }
            catch (err) {
                console.log(err);
            }


        }
        else {
            console.log("Error: No document found!")
        }

    }

    // ===================
    // HANDLERS TARJETA
    // ===================

    const numberHandler = (event) => {

        // Guardar el valor de la tarjeta
        let numTarjeta = event.target.value;

        // Elimina los espacios del string para re-aplicarlos luego
        numTarjeta = numTarjeta.replace(/\s/g, '');

        // Solo permitir números en el input
        numTarjeta = numTarjeta.replace(/[^0-9]/g, '');

        // Insertar (Usando expresiones regulares), cada 4 caracteres un espacio.
        let numTarjetaFormateado = numTarjeta.replace(/.{4}/g, '$& ');

        // Eliminar los "trailing spaces" si hay más de 19 caracteres
        if (numTarjetaFormateado.length > 19) {
            numTarjetaFormateado = numTarjetaFormateado.trim()
        }

        // Cambiar el valor a mostrar en la tarjeta
        setNumber(numTarjetaFormateado);
    }

    const nameCardHandler = (event) => {

        const nombreTarjeta = event.target.value;
        setCardInfoName(nombreTarjeta.replace(/[0-9]|[-.@><,:;]/g, ''))
    }

    const monthHandler = (event) => {
        setMonth(event.target.value)
    }

    const yearHandler = (event) => {
        setMyYear(event.target.value)
    }

    const codeHandler = (event) => {

        // Guardar el valor del código
        let ccv = event.target.value;

        // Solo permitir números en el input
        ccv = ccv.replace(/[^0-9]/g, '');

        // Cambiar el valor
        setMyCode(ccv);
    }

    /* Turn Button / Form */
    const myButton = () => {
        setButtonTurned(!buttonTurned)
    };
    const turnButton = buttonTurned ? 'btn-abrir-formulario active' : 'btn-abrir-formulario'

    /* Turn Card */
    const myCard = () => {
        setTurnCard(!turnCard)
    }
    const cardTurned = turnCard ? 'tarjeta' : 'tarjeta active'


    return (
        <div className='contenedor__checkout'>
            <section className={cardTurned} onClick={myCard} >

                {/* TARJETA DELANTERA */}
                <div className="delantera">
                    <div className="logo-marca">
                        <img src="/visa.png" alt="logo visa" />
                    </div>
                    <img src="/chip-tarjeta.png" className="chip" alt="chip tarjeta" />

                    <div className="datos">
                        <div className="grupo" id="numero">
                            <p className="label">Número tarjeta</p>
                            <p className="numero">{number ? number : "#### #### #### ####"}</p>
                        </div>

                        <div className="flexbox">
                            <div className="grupo" id="nombre">
                                <p className="label">Nombre Tarjeta</p>
                                <p className="nombre">{cardInfoName ? cardInfoName : "Jhon Doe"}</p>
                            </div>

                            <div className="grupo" id="expiracion">
                                <p className="label">Expiracion</p>
                                <p className="expiracion">
                                    <span className="mes">{month ? month : "MM"}</span> / <span className="year">{myYear ? myYear : "AA"}</span>
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
                                <p>{cardInfoName ? cardInfoName : "Jhon Doe"}</p>
                            </div>
                        </div>
                        <div className="grupo" id="ccv">
                            <p className="label">CCV</p>
                            <p className="ccv">{myCode ? myCode : ""}</p>
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
                <button className={turnButton} onClick={myButton} >
                    <i className="fas fa-plus"></i>
                </button>
            </div>


            {/* FORMULARIO */}
            <form action="" id="formulario-tarjeta" className={buttonTurned ? 'formulario-tarjeta active' : 'formulario-tarjeta'}>

                <div className="grupo">
                    <label for="inputNumero">Credit / Debit Card Number</label>
                    <input value={number.replace(/\s/g, '')} onChange={numberHandler} type="text" id="inputNumero" maxLength="16" autoComplete="off" />
                </div>

                <div className="grupo">
                    <label for="inputNombre">Name</label>
                    <input type="text" id="inputNombre" maxLength="19" autoComplete="off" value={cardInfoName} onChange={nameCardHandler} />
                </div>

                <div className="flexbox">

                    <div className="grupo expira">
                        <label for="selectMes">Exp.</label>
                        <div className="flexbox">

                            <div className="grupo-select">
                                <select name="mes" id="selectMes" value={month} onChange={monthHandler} >
                                    <option disabled selected>Month</option>
                                    <option value="01">January</option>
                                    <option value="02">February</option>
                                    <option value="03">March</option>
                                    <option value="04">April</option>
                                    <option value="05">May</option>
                                    <option value="06">June</option>
                                    <option value="07">July</option>
                                    <option value="08">August</option>
                                    <option value="09">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                </select>
                                <img src="" alt="" />
                            </div>

                            <div className="grupo-select">
                                <select name="year" id="selectYear" value={myYear} onChange={yearHandler}>
                                    <option disabled selected>Year</option>
                                    <option value="22">2022</option>
                                    <option value="23">2023</option>
                                    <option value="24">2024</option>
                                    <option value="25">2025</option>
                                    <option value="26">2026</option>
                                    <option value="27">2027</option>
                                    <option value="28">2028</option>
                                </select>
                                <img src="" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="grupo ccv">
                        <label for="inputCCV">CCV</label>
                        <input type="text" id="inputCCV" maxLength="3" value={myCode} onChange={codeHandler} />
                    </div>
                </div>

                <button type="submit" className="btn-enviar" onClick={enviarHandler} >Enviar</button>
            </form>
        </div>
    );
}

export default CardCheckout;