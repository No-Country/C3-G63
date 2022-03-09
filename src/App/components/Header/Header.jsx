import React, { useContext, useState } from "react";
import { Context } from "../../../store/auth-context";
import { Link } from "react-router-dom";
import Profile from "../Profile/Profile";
import "./Header.scss";
import BackDrop from "./BackDrop";

const Header = () => {
  const { user, logout } = useContext(Context);
  const [toggleProfile, setToggleProfile] = useState(false);

  
  
  
  
  

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };

  const toggleHandler = () => {
    setToggleProfile(true);
    console.log(toggleProfile);
  };

  console.log(user)

  const closeProfileHandler = () => {
    setToggleProfile(false)
  }

  return (
    <>
    {toggleProfile && <BackDrop onClick={closeProfileHandler} /> }
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
              <Link to="/" className="nav__link">
                <i className="fas fa-coins fa-2x"></i>
                <span className="nav__name">Coins</span>
              </Link>
            </li>

            <li className="nav__item">
              <Link to="/portfolio" className="nav__link">
                <i className="fas fa-suitcase fa-2x"></i>
                <span className="nav__name">Portfolio</span>
              </Link>
            </li>

            <li className="nav__item">
              <button className="nav__link nav__search">
                <i className="fas fa-search fa-2x"></i>
                <span className="nav__name">Search</span>
              </button>
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
          {!user ? (
            <Link to="/ingreso" href="#login" className="nav__link">
              <i className="fas fa-user  fa-2x"></i>
              <span>Login</span>
            </Link>
          ) : (
            <div className="nav__link" onClick={toggleHandler}>
              <img src={user?.photoURL} />
              <span className="nav__name-user">
                {user?.displayName || user?.email}
              </span>
            </div>
          )}
          {toggleProfile && <Profile />}
        </div>
      </nav>
    </div>
    </>
  );
};

export default Header;
