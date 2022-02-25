import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header" id="header">
      <nav className="nav container__header">
        <a className="nav__logo">
          <img src="Crypt-logo.png" alt="Logo Criptomoneda" className="nav__crypt-logo" />
        </a>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a className="nav__link">
                <i className="fas fa-coins fa-2x"></i>
                <span className="nav__name">Coins</span>
              </a>
            </li>

            <li className="nav__item">
              <a className="nav__link">
                <i className="fas fa-suitcase fa-2x"></i>
                <span className="nav__name">Portfolio</span>
              </a>
            </li>

            <li className="nav__item">
              <a className="nav__link">
                <i className="fas fa-search fa-2x"></i>
                <span className="nav__name">Search</span>
              </a>
            </li>

            <li className="nav__item">
              <a className="nav__link">
                <i className="fas fa-sign-out-alt fa-2x"></i>
                <span className="nav__name">Exit </span>
              </a>
            </li>
          </ul>
        </div>

        <div className="nav__item">
          <Link to="/ingreso" href="#login" className="nav__link">
            <i className="fas fa-user  fa-2x"></i>
            <span className="nav__name">Login </span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;