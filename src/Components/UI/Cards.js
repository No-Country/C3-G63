import React from "react";
import styles from "./Cards.module.css";
import { optionsCard } from "../../helper/chart";
import Chart from "react-apexcharts";
import { useNavigate } from "react-router-dom";

const Cards = ({ data }) => {
  const navigate = useNavigate(

  )
  return (
    <div className={styles.container}>
      {data.map((el) => {
        return (
            <div key={el.name} className={styles.cardCtn__info}>
              <div className={styles.cardCtn}>
                <div className={styles.cryptoCtn}>
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
                <button onClick={() => navigate("/moneda")} className={styles.btnPrimary}>Comprar</button>
                <button className={styles.btnSecondary}>Vender </button>
              </div>
            </div>
        );
      })}
    </div>
  );
};

export default Cards;
