import React from 'react';
import './Moneda.scss';
import fondo from '../../../Assets/fondo.png';
import flecha from '../../../Images/flecha.png';
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Chart from "react-apexcharts";

export const MonedaView = (props) => {

  const { array } = props;

  // Parametros de URL
  const { name_moneda } = useParams();

  // Estado para la data de las monedas
  const [cryptoData, setCryptoData] = useState({});

  // Obtener la data de firebase de las crypto monedas cuando se carga la pantalla
  useEffect( async () => {

    // ===================
    // DATA FIREBASE
    // ===================

    // Se obtiene la data de todas las cryptos
    const fetchedData = await axios.get(
      "https://nc-g63-default-rtdb.firebaseio.com/crypto.json"
    );

    // Se extrae la data solo de la crypto seleccionada (En minúscula dentro de firebase)
    let data = fetchedData.data[name_moneda.toLowerCase()];

    console.log("DATA", data);

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

        console.log(data[property]);
      
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

    
  }, []);

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
          <button className='btn btn-venta'><Link to={`/acreditar`}>Venta</Link></button>
          <button className='btn btn-compra'><Link to={`/acreditar`}>Compra</Link></button>
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
                  <h2>{item.number}</h2>
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
              <p id='p-noti'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit voluptates ex unde hic iste corrupti nostrum incidunt fuga asperiores, totam voluptatibus dolorum itaque quasi blanditiis, pariatur veritatis sed est natus corporis? Vero, minus quisquam veritatis quibusdam officiis, quod blanditiis pariatur accusamus dolores iure ab facere!</p>
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