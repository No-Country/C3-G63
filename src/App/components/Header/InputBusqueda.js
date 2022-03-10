import { async } from '@firebase/util';
import axios from 'axios';
import {useState, useEffect} from 'react'
import "./Header.scss"
const InputBusqueda = () => {

  const [coins, setCoins] = useState([]);
  const [busqueda, setBusqueda] = useState("")
  const [data, setData] = useState([])

  
  useEffect(() => {
    const fetchData = async () => {
        const fetchedData = await axios.get("https://nc-g63-default-rtdb.firebaseio.com/crypto.json");
        
        const loadedCrypto = [];

        for (const key in fetchedData.data) {
            loadedCrypto.push({
                name: fetchedData.data[key].name,
                low: fetchedData.data[key].low,
                mid: fetchedData.data[key].mid,
                high: fetchedData.data[key].high,
                logo: fetchedData.data[key].logo,
                price: fetchedData.data[key].price,
            })
        }
        setData(loadedCrypto);
        
    }
    fetchData()
}, [])

  const handleChange=e=>{
    setBusqueda(e.target.value);
    filtrar("busqueda: "+e.targett.value)
  }
  
  const filtrar=(terminoBusqueda)=>{
    var resultadosBusqueda=coins.filter((elemento)=>{
     if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      || elemento.company.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      ){
        return elemento;
      }
    });
    setCoins(resultadosBusqueda);
  }

  
  return (
    <div className='header'>
        <div className="containerInput">
          <input
            className="form-control inputBuscar"
            value={busqueda}
            placeholder="Búsqueda moneda"
            onChange={handleChange}
          />
          <button className="btn btn-success">
            
          </button>
        </div>

        <div className='table-responsive'>
         <table className='table table-sm table-bordered'>
            <thead>
              <tr>
                <th>Logo</th>
                <th>Nombre</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              {
              data.map((coin) =>{
                return<tr className='nav__logo' key={coin.name}>
                  <img className='' src={coin.logo} alt={coin.name}/>
                  <td>{coin.name}</td>
                  <td>{coin.price}</td>
                </tr>
                

              })}
            </tbody>
         </table>
        </div>
    </div>
  )
}

export default InputBusqueda