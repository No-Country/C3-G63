import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Acreditar.module.css";

const Acreditar = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.acreditarCtn}>
      <div className={styles.acreditarCtn__info}>
        <h2>Pay with:</h2>
        <button onClick={() => navigate("/checkout")}>Credit/Debit Card</button>
      </div>
    </div>
  );
};

export default Acreditar;
