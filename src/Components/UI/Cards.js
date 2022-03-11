import React, { useContext, useState } from "react";
import styles from "./Cards.module.css";
import { optionsCard } from "../../helper/chart";
import Chart from "react-apexcharts";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { Context } from "../../store/auth-context";
import { doc, getDoc, updateDoc } from 'firebase/firestore'

const Cards = ({ data }) => {

  const navigate = useNavigate();

  // Contexto
  const context = useContext(Context);
  const db = context.db;

  // Moneda a vender
  const [monedaAVender, setMonedaAVender] = useState(null);

  // ===================
  // VENTA HANDLER
  // ===================
  
  const handleVenta = async () => {

    console.log(monedaAVender);

    // Se obtiene la data de todas las cryptos
    const fetchedData = await axios.get("https://nc-g63-default-rtdb.firebaseio.com/crypto.json");

    // Precio de la moneda a comprar
    let coinPrice = fetchedData.data[monedaAVender.toLowerCase()].price;

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
        if (moneda.name === monedaAVender) {
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
          navigate("/");
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
  
  
  return (
    <div className={styles.container}>
      {data.map((el) => {
        return (
            <div key={el.name} className={styles.cardCtn__info}>
              <div className={styles.cardCtn}>
                <div className={styles.cryptoCtn}>
                  <img src={el.logo} alt="Logo" />
                  <p>{el.name}</p>
                </div>
                <p className={styles.price}>
                  ${el.price} <br />
                  QTY: {el.quantity}
                </p>
                <div className={styles.graph}>
                  <Chart
                    options={optionsCard}
                    series={[
                      {
                        name: "Price",
                        data: [el.high, el.low, el.mid],
                      },
                    ]}
                    type="line"
                    width="110"
                    height="120"
                  />
                </div>
              </div>
              <div className={styles.btnCtn}>
                <button onClick={() => navigate(`/acreditar/${el.name}`)} className={styles.btnPrimary}><Link to={`/acreditar`}>Comprar</Link></button>
                <button className={styles.btnSecondary} onClick={ () => {
                  setMonedaAVender(el.name);
                  handleVenta();
                }}>Vender</button>
              </div>
            </div>
        );
      })}
    </div>
  );
};

export default Cards;
