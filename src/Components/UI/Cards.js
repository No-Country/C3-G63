import React from "react";
import styles from "./Cards.module.css";

const Cards = ({ data }) => {
  console.log(data);

  return (
    <div className={styles.container}>
      <div className={styles.cardCtn}>
        <div className={styles.cryptoCtn}>
          <i className="fab fa-bitcoin fa-2x"></i>
          <p>Bitcoin</p>
        </div>
          <p>$41.000</p>
        <div>
          <p>grafico critpo</p>
        </div>
      </div>
      <div className={styles.btnCtn}>
        <button>Comprar</button>
        <button>Vender </button>
      </div>
      <div className={styles.cardCtn}>
        <div className={styles.cryptoCtn}>
          <i className="fab fa-ethereum fa-2x"></i>
          <p>Ethereum</p>
        </div>
          <p>$2.950</p>
        <div>
          <p>grafico critpo</p>
        </div>
      </div>
      <div className={styles.btnCtn}>
        <button>Comprar</button>
        <button>Vender </button>
      </div>
    </div>
  );
};

export default Cards;
