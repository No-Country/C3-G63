import { MonedaView } from "./MonedaView";

const Moneda = () => {
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
  console.log("🚀 ~ file: Moneda.js ~ line 32 ~ Moneda ~ array", array)
  return (<MonedaView array={array} />);
}

export default Moneda;
