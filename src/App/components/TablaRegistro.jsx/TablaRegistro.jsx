import { useState, useEffect } from "react";
import axios from "../../../Components/api/apicrypto";
import { Link } from "react-router-dom";
import "./TablaRegistro.scss";

const TablaRegistro = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await axios.get(
        "https://nc-g63-default-rtdb.firebaseio.com/crypto.json"
      );

      const loadedCrypto = [];

      for (const key in fetchedData.data) {
        loadedCrypto.push({
          name: fetchedData.data[key].name,
          low: fetchedData.data[key].low,
          mid: fetchedData.data[key].mid,
          high: fetchedData.data[key].high,
          logo: fetchedData.data[key].logo,
          price: fetchedData.data[key].price,
        });
      }
      setData(loadedCrypto);
    };
    fetchData();
  }, []);
  console.log(data);

  return (
    <div>
      <main>
        <section className="section section__height">
          <h2 className="section__title">Ranking Cryptos</h2>

          <div className="table">
            {data.map((el) => {
              return (
                <div key={el.name} className="table__container">
                  <div className="cryptoCtn">
                    <img src={el.logo} alt={el.name} />
                    <div className="r1 c3">{el.name}</div>
                  </div>
                  
                  <div className="r1 c4 magic">
                    <i className="fas fa-chart-line fa-2x"></i>
                  </div>
                  <div className="r1 c5 down">
                    <i class="fas fa-angle-double-down fa-2x"></i>
                  </div>
                  <div className="r1 c6">${el.price}</div>
                  <div className="r1 c8 magic">
                    <Link to={`/ingreso`}>Buy</Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
};

export default TablaRegistro;
