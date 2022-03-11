import React from "react";
import Header from "./";
import { moneda } from "../../Pages/moneda.png";

const Noticias = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="container">
        <h1>Los traders supieron de las grandes subidas de RUNE, FUN, WAVES y KNC la semana pasada por esto</h1>
        <img src={moneda} alt="moneda de noticia" />
        <p>
          La subida del precio de un activo digital rara vez surge de la nada.
          Antes de que el valor de mercado del token se dispare, entran en
          acción algunas fuerzas colaterales. El activo puede atraer
          repentinamente una atención en línea anormalmente alta, su volumen de
          operaciones puede aumentar drásticamente, o puede hacerse pública
          alguna información que mueva el mercado y desencadene los dos primeros
          ejemplos.
        </p>
      </div>
    </div>
  );
};

export default Noticias;
