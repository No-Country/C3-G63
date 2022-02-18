import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <div className="header" id="header">
            <nav  className="nav container">
                <a href="#" className="nav__logo">
                    <img src="" alt="" />
                </a>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">

                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                <img src="" alt=""/>
                                <span className="nav__name">Coins</span>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                <img src="" alt=""/>
                                <span className="nav__name">Portfolio</span>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                <img src="" alt=""/>
                                <span className="nav__name">Search</span>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                <img src="" alt=""/>
                                <span className="nav__name">Exit </span>
                            </a>
                        </li>

                    </ul>
                </div>

                <div className="nav__item">
                    <a href="#login" className="nav__link">
                        <img src="" alt=""/>
                        <span className="nav__name">Login </span>
                    </a>
                </div>

            </nav>
        </div>
    )
}

export default Header