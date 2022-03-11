import React from 'react'
import { optionsCard } from "../../../helper/chart";
import Chart from "react-apexcharts";
import "./CardsMercado.module.scss"



 const CardsMercado = ({ data }) => {
  
  return (
    <div className="container">
      {data.map((el) => {
        return (
            <div key={el.name} className="cardCtn__info">
              <div className="cardCtn">
                <div className="cryptoCtn">
                  <img src={el.logo} />
                  <p>{el.name}</p>
                </div>
                <p className="price">${el.price}</p>
                <div className="graph">
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
              
            </div>
        );
      })}
    </div>
  );
};


export default CardsMercado