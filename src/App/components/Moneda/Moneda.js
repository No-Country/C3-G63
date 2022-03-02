import { useState } from "react";
import { MonedaView } from "./MonedaView";

export const Moneda = () => {
  const holis = 'holis';
  const [Estadistica, setEstadistica] = useState([]);
  const array = [
    {
      id: 1,
      name: 'Desempeño',
      number: 500,
    },
    {
      id: 2,
      name: 'Inteligencia',
      number: 20,
    },
    {
      id: 3,
      name: 'Sabiduria',
      number: 30,
    },
    {
      id: 4,
      name: 'Agilidad',
      number: 300,
    },
    {
      id: 5,
      name: 'Vision',
      number: 10,
    },
  ];

  return (
    <MonedaView
      holis={holis}
      Estadistica={Estadistica}
      array={array}
    />
  );
}