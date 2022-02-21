import React from 'react';
import './TablaRegistro.scss';

const TablaRegistro = () => {
    return (
    <div>
        <main>
        <section className="container section section__height">
            <h2 className="section__title">Ranking Cryptos</h2>
            
            <table className="table">
                <colgroup></colgroup>
                <thead>
                    <tr>
                        <th className="first-column">#</th>
                        <th className="second-column">Image</th>
                        <th className="third-column">Name</th>
                        <th className="forth-column">Up/Down</th>
                        <th className="fifth-column">Price</th>
                        <th className="six-column">Change</th>
                        <th className="seven-column">Graph</th>
                        <th className="eight-column">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="first-column">1</td>
                        <td className="second-column">
                            <img src="" alt=""/>
                        </td>
                        <td className="third-column">Bitcoin</td>
                        <td className="forth-column">
                            <img src="" alt=""/>
                        </td>
                        <td className="fifth-column">4.696.203,30 ARS</td>
                        <td className="six-column">+4,58 %</td>
                        <td className="seven-column">
                            <img src="" alt=""/>
                        </td>
                        <td className="eight-column">
                            <a>BUY</a>
                        </td>
                    </tr>
                    <tr>
                        <td className="first-column">2</td>
                        <td className="second-column">
                            <img src="" alt=""/>
                        </td>
                        <td className="third-column">Ethereum</td>
                        <td className="forth-column">
                            <img src="" alt=""/>
                        </td>
                        <td className="fifth-column">33.228,86 ARS</td>
                        <td className="six-column">+7,41 %</td>
                        <td className="seven-column">
                            <img src="" alt=""/>
                        </td>
                        <td className="eight-column">
                            <a>BUY</a>
                        </td>
                    </tr>
                    <tr>
                        <td className="first-column">3</td>
                        <td className="second-column">
                            <img src="" alt=""/>
                        </td>
                        <td className="third-column">Cardano</td>
                        <td className="forth-column">
                            <img src="" alt=""/>
                        </td>
                        <td className="fifth-column">116,08 ARS</td>
                        <td className="six-column">+5,20 %</td>
                        <td className="seven-column">
                            <img src="" alt=""/>
                        </td>
                        <td className="eight-column">
                            <a>BUY</a>
                        </td>
                    </tr>
                    <tr>
                        <td className="first-column">4</td>
                        <td className="second-column">
                            <img src="" alt=""/>
                        </td>
                        <td className="third-column">Solana</td>
                        <td className="forth-column">
                            <img src="" alt=""/>
                        </td>
                        <td className="fifth-column">10.814,38 ARS</td>
                        <td className="six-column">+7.51 %</td>
                        <td className="seven-column">
                            <img src="" alt=""/>
                        </td>
                        <td className="eight-column">
                            <a>BUY</a>
                        </td>
                    </tr>
                </tbody>
            </table>
            
        </section>
    </main>
    </div>
    )
}

export default TablaRegistro