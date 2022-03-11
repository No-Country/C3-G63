import { MonedaView } from "./MonedaView";

const Moneda = () => {
  const array = [
    {
      id: 1,
      name: 'Subida',
      number: 500,
    },
    {
      id: 2,
      name: 'Bajada',
      number: 20,
    },
    {
      id: 3,
      name: 'Expectativa',
      number: 30,
    },
    {
      id: 4,
      name: 'Internacional',
      number: 300,
    },
    {
      id: 5,
      name: 'Local',
      number: 10,
    },
  ];
  console.log("🚀 ~ file: Moneda.js ~ line 32 ~ Moneda ~ array", array)
  return (<MonedaView array={array} />);
}

export default Moneda;
