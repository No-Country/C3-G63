import React, { useContext } from "react";
import './Moneda.scss';
import flecha from '../../../Images/flecha.png';
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Chart from "react-apexcharts";
import { Context } from "../../../store/auth-context";
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore'

export const MonedaView = (props) => {

  const { array } = props;

  // Redirección desde javascript
  const navigate = useNavigate();

  // Parametros de URL
  const { name_moneda } = useParams();

  // Estado para la data de las monedas
  const [cryptoData, setCryptoData] = useState({});

  // ===================
  // POST FIREBASE
  // ===================

  const context = useContext(Context);
  const db = context.db;
  
  // Crear un nuevo documento
  const submitDocument = async (event) => {
    
    event.preventDefault()

    try {
      await setDoc(doc(db, "user_profile", context.user.uid), {
        fondos: 50000,
        monedas: [
          {name: "Ethereum", quantity: 2},
          {name: "Doge", quantity: 1}
        ]
      })
    } 
    catch (err) {
      console.log(err);
    }
  }

  // Crear un nuevo documento
  const updateDocument = async (event) => {
    
    event.preventDefault()

    try {
      await updateDoc(doc(db, "user_profile", context.user.uid), {
        fondos: 69000
      })
    } 
    catch (err) {
      console.log(err);
    }
  }

  // Obtener los datos del usuario
  const getDocument = async (event) => {

    const docRef = doc(db, "user_profile", context.user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data: ", docSnap.data());
    }
    else {
      console.log("Error: No document found!")
    }

  }

  // ===================
  // COMPRA / VENTA HANDLES
  // ===================

  const handleCompra = (event) => {
    navigate(`/acreditar/${name_moneda}`);
  }

  const handleVenta = async (event) => {

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
      monedas.forEach((moneda, idx) => {
        if (moneda.name === name_moneda) {
          userOwnsCoin = true;
          coinIdx = idx;
        }
      })

      // Se agrega la moneda al inventario del usuario
      if (userOwnsCoin) {
        monedas[coinIdx].quantity -= 1;

        // Se intenta actualizar el documento
        try {
          await updateDoc(doc(db, "user_profile", context.user.uid), {
            fondos: fondos + coinPrice,
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
        console.log("Error: Trying to sell a coin that the user doesnt have");
      }

    }
    else {
      console.log("Error: No document found!")
    }

  }

  // ===================
  // INICIALIZACIÓN
  // ===================

  // Obtener la data de firebase de las crypto monedas cuando se carga la pantalla
  useEffect(() => {

    async function processData() {

      // ===================
      // DATA FIREBASE
      // ===================

      // Se obtiene la data de todas las cryptos
      const fetchedData = await axios.get(
        "https://nc-g63-default-rtdb.firebaseio.com/crypto.json"
      );

      // Se extrae la data solo de la crypto seleccionada (En minúscula dentro de firebase)
      let data = fetchedData.data[name_moneda.toLowerCase()];
      
      // Propiedades numéricas a reformatear
      const numProperties = ["high", "low", "mid", "price"];

      // Se reformatea cada propiedad numérica
      // (Se intercambian las comas con los puntos y se eliminan las comas)
      numProperties.forEach( (property) => {

        // Convierte a número solo las propiedades numéricas que vienen
        // expresadas en string
        if (typeof data[property] == "string") {

          // Intercambio: Si tiene ambos caracteres
          if (data[property].includes(".") && data[property].includes(",")) {
            data[property] = data[property].replace(/[.,]/g, (element) => element === ',' ? '.' : ',');
          }

          // Reemplazo: Si solo incluye coma
          else if (!data[property].includes(".") && data[property].includes(",")) {
            data[property] = data[property].replace(/[,]/g, '.');
          }
        
          // Eliminación comas
          data[property] = Number(data[property].replace(/[,]/g, ''));

        }

      })

      // Se guardan los cambios
      setCryptoData(data);

      // ===================
      // APEX CHART GRAPH DATA
      // ===================

      // Generar la tendencia general de gráfica
      const intercepto = data.low;
      const pendiente = (data.high - data.low) / data.price;
      const sequence = Array.from(Array(40).keys()); 

      // Generar el ruido de la gráfica
      const ruido = Array.from({length: 40}, () => (2*Math.random() - 1) * (data.price * 0.1) );
      
      // A la secuencia base le aplicamos el intercepto y la pendiente
      // y luego le agregamos un poco de ruido
      const dataGrafica = sequence.map( (num, idx) => (num * pendiente + intercepto) + ruido[idx]);
      setGraphData(dataGrafica);
    }

    // Llamamos a la función "processData"
    processData();
    
  }, [name_moneda]);

  // ===================
  // APEX CHARTS CONFIG
  // ===================

  // Generar los datos del gráfico
  const [graphData, setGraphData] = useState([]);

  // Options for the chart
  const graphOptions = {

    xaxis: {
      axisTicks: {color: "#fff"},
      axisBorder: {color: "#fff"},
      tickAmount: 6,
      labels: {
        style: {colors: "#fff"},
        hideOverlappingLabels: true
      }
    },
    grid: {
      show: false
    },
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: ["#fff"],
    stroke: {
      width: "8",
    },
    yaxis: {
      axisTicks: {color: "#fff"},
      axisBorder: {color: "#fff"},
      labels: {
        style: {colors: "#fff"},
        hideOverlappingLabels: true,
        formatter: (value) => value.toFixed(2)
      }
    }

  };

  // ===================
  // HTML
  // ===================

  return (
    <>
      <div className='fondo'>

        <div className='vent-compra'>
          <h1>{ name_moneda }</h1>
          <h4 id='venta'>{`Venta: $ ${cryptoData.price - cryptoData.price * 0.3} | Compra: $ ${cryptoData.price}`}</h4>
          <div className="grafica">

            {/* Gráfica */}
            <Chart
              options={graphOptions}
              series={[
                {
                  name: "Price",
                  data: graphData,
                },
              ]}
              type="line"
              width="100%"
              height="100%"
            />
          </div>
        </div>
        
        <div className='btn-vent'>

          <button className = "btn btn-compra" onClick={handleCompra}>
            Compra
          </button>
          <button className = "btn btn-venta" onClick={handleVenta}>
            Venta
          </button>
          
        </div>
        
        <div className="estadisticas">
          <h1>Estadísticas</h1>

          {array.map((item, index) => {
            return (
              <div className="Container-Grid" key={index}>
                <div className="Moneda__item__name ">
                  <p>{item.name}</p>
                </div>
                <div className="Moneda__item__number">
                  <h2>{ Math.floor(Math.random() * 500) }</h2>
                </div>
              </div>
            );
          })}

        </div>

        <div className='noticias'>
          <div className='noticias-container'>

            {/* Texto de la noticia */}
            <div className="noticias-text">
              <h1>Noticias</h1><br />
              <p id='p-noti'>
              La subida del precio de un activo digital rara vez surge de la nada.
          Antes de que el valor de mercado del token se dispare, entran en
          acción algunas fuerzas colaterales. El activo puede atraer
          repentinamente una atención en línea anormalmente alta, su volumen de
          operaciones puede aumentar drásticamente, o puede hacerse pública
          alguna información que mueva el mercado y desencadene los dos primeros
          ejemplos.
              </p>
            </div>

            {/* Imagen de flecha */}
            <div className='noticias-images'>
              <Link to={`/noticias`}><img src={flecha} alt="arrow" /></Link>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};