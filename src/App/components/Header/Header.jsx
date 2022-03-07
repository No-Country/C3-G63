import React, { useContext, useState, useEffect } from "react";
import axios from "axios" 
import { Context } from "../../../store/auth-context";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const { user, logout } = useContext(Context);

  const [coin, setCoin] = useState([])
  const [search, setSearch] = useState("");
  const [highNav, setHighNav] = useState(true)

  

  const busqueda = async () => {
    await axios.get("https://crypto-app-b0955-default-rtdb.firebaseio.com/crypto.json")
    .then(response=>{
      setSearch(response.data)
    }).catch(error=>{
      console.log(error)
    })
  }
  
  const handleChange=e=>{
    setSearch(e.target.value)
    filtrar(e.target.value)
  }

  useEffect(() => {
    busqueda();
  }, [])
  
  const filtrar = (monedaBusqueda) => {

    var resultadoBusqueda = coin.height.filter((element) =>{
      if(element.height.toString().toLowerCase().includes(monedaBusqueda.toLowerCase())){
        return element;
      }
    })
    setCoin(resultadoBusqueda);
  }

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };


  return (
    <div className="header" id="header">
      <nav className="nav container__header">
        <Link to="/" className="nav__logo">
          <img
            src="Crypt-logo.png"
            alt="Logo Criptomoneda"
            className="nav__crypt-logo"
          />
        </Link>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/portfolio" className="nav__link">
                <i className="fas fa-coins fa-2x"></i>
                <span className="nav__name">Coins</span>
              </Link>
            </li>

            <li className="nav__item">
              <Link to="/" className="nav__link">
                <i className="fas fa-suitcase fa-2x"></i>
                <span className="nav__name">Portfolio</span>
              </Link>
            </li>

            <li className="nav__item">
              <a className="nav__link">
                <i onClick={""} className="fas fa-search fa-2x"></i>
                <span className="nav__name"
                  onChange={handleChange}
                  value={search}
                  
                
                > Search </span>
              </a>
            </li>
            {user && (
              <button className="nav__link exit__button" onClick={handleLogout}>
                <i className="fas fa-sign-out-alt fa-2x"></i>
                <span className="nav__name">Exit </span>
              </button>
            )}
          </ul>
        </div>

        <div className="nav__item nav__login">
          <Link to="/ingreso" href="#login" className="nav__link">
            {user ? <img src={user?.photoURL}/> :  <i className="fas fa-user  fa-2x"></i>}
            <span className="nav__name">{user ? ( user?.displayName|| user?.email) : "Login"}</span>
          </Link>
        </div>
      </nav>
    </div>

    
  );
};

export default Header;
