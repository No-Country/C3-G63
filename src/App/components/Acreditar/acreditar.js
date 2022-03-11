import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Acreditar.module.css";

const Acreditar = (props) => {

  const { name_moneda } = useParams();
  console.log(name_moneda);

  const navigate = useNavigate();

  return (
    <div className={styles.acreditarCtn}>
      <div className={styles.acreditarCtn__info}>
        <h2>Pay with:</h2>
        <button onClick={() => navigate(`/checkout/${name_moneda}`)}>Credit/Debit Card</button>
      </div>
    </div>
  );
};

export default Acreditar;
