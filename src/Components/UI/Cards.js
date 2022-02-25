import React from "react";
import styles from "./Cards.module.css";

const Cards = ({ data }) => {
  console.log(data);

  return (
    <div className={styles.container}>
      {data.map((el) => {
        return (
          <>
            <div key={el.name} className={styles.cardCtn}>
              <div className={styles.cryptoCtn}>
                <img src={el.logo} />
                <p>{el.name}</p>
              </div>
              <p>{el.price}</p>
              <div>
                <p>grafico critpo</p>
              </div>
            </div>
            <div className={styles.btnCtn}>
              <button>Comprar</button>
              <button>Vender </button>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Cards;
