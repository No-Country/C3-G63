import React from "react";
import styles from "./Cards.module.css";

const Cards = ({ data }) => {
 

  return (
    <div className={styles.container}>
      {data.map((el) => {
        return (
          <>
            <div className={styles.cardCtn}>
              <div key={el.name} className={styles.cryptoCtn}>
                <img src={el.logo} />
                <p>{el.name}</p>
              </div>
              <p className={styles.price}>${el.price}</p>
              <div>
                <p>grafico critpo</p>
              </div>
            </div>
            <div className={styles.btnCtn}>
              <button className={styles.btnPrimary}>Comprar</button>
              <button className={styles.btnSecondary}>Vender </button>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Cards;
