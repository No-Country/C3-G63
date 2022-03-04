import React from 'react';
import { Link } from 'react-router-dom';
import './TablaRegistro.scss';

const TablaRegistro = () => {
    return (
    <div>
        <main>
        <section className="container section section__height">
            <h2 className="section__title">Ranking Cryptos</h2>
            
            <div className="table">
                <div className="table__container">

                    {/* Fila 1 */}
                    <div className='r1 c1 magic'>
                        1
                    </div>
                    <div className='r1 c2'>
                        <i className="fab fa-bitcoin fa-3x"></i>
                    </div>
                    <div className='r1 c3'>
                        Bitcoin
                    </div>
                    <div className='r1 c4 magic'>
                        <i className="fas fa-chart-line fa-2x"></i>
                    </div>
                    <div className='r1 c5 down'>
                        <i class="fas fa-angle-double-down fa-2x"></i>
                    </div>
                    <div className='r1 c6'>
                        4.696.203,30 ARS
                    </div>
                    <div className='r1 c7 magic'>
                        +4,58 %
                    </div>
                    <div className='r1 c8 magic'>
                        <Link to={`/ingreso`}>Buy</Link>
                    </div>

                    {/* Fila 2 */}
                    <div className='r2 c1 magic'>
                        2
                    </div>
                    <div className='r2 c2'>
                        <i class="fab fa-ethereum fa-3x"></i>
                    </div>
                    <div className='r2 c3'>
                        Ethereum
                    </div>
                    <div className='r2 c4 magic'>
                        <i class="fas fa-chart-line fa-2x"></i>
                    </div>
                    <div className='r2 c5 up'>
                        <i class="fas fa-angle-double-up fa-2x"></i>
                    </div>
                    <div className='r2 c6'>
                        33.228,86 ARS
                    </div>
                    <div className='r2 c7 magic'>
                        +7,41 %
                    </div>
                    <div className='r2 c8 magic'>
                        <Link to={`/ingreso`}>Buy</Link>
                    </div>

                    {/* Fila 3 */}
                    <div className='r3 c1 magic'>
                        3
                    </div>
                    <div className='r3 c2'>
                        <i class="fab fa-bitcoin fa-3x"></i>
                    </div>
                    <div className='r3 c3'>
                        Cardano
                    </div>
                    <div className='r3 c4 magic'>
                        <i class="fas fa-chart-line fa-2x"></i>
                    </div>
                    <div className='r3 c5 up'>
                        <i class="fas fa-angle-double-up fa-2x"></i>
                    </div>
                    <div className='r3 c6'>
                        116,08 ARS
                    </div>
                    <div className='r3 c7 magic'>
                        +5,20 %
                    </div>
                    <div className='r3 c8 magic'>
                        <Link to={`/ingreso`}>Buy</Link>
                    </div>

                    {/* Fila 4 */}
                    <div className='r4 c1 magic'>
                        4
                    </div>
                    <div className='r4 c2'>
                        <i class="fab fa-bitcoin fa-3x"></i>
                    </div>
                    <div className='r4 c3'>
                        Solana
                    </div>
                    <div className='r4 c4 magic'>
                        <i class="fas fa-chart-line fa-2x"></i>
                    </div>
                    <div className='r4 c5 down'>
                        <i class="fas fa-angle-double-down fa-2x"></i>
                    </div>
                    <div className='r4 c6'>
                        10.814,38 ARS
                    </div>
                    <div className='r4 c7 magic'>
                        +7.51 %
                    </div>
                    <div className='r4 c8 magic'>
                        <Link to={`/ingreso`}>Buy</Link>
                    </div>
                </div>
            </div>

        </section>
    </main>
    </div>
    )
}

export default TablaRegistro