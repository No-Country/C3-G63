import React from "react";
import styles from "./Cards.module.css";
import { optionsCard } from "../../helper/chart";
import Chart from "react-apexcharts";

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
              <div className={styles.graph}>
                <Chart
                  options={optionsCard}
                  series={[
                    {
                      name: "Price",
                      data: [
                        el.high,
                        el.low,
                        el.mid
                      ]
                    },
                  ]}
                  type="line"
                  width="140"
                  height="150"
                />
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
