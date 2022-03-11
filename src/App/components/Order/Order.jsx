import {React, useState} from 'react';
import Header from "../Header/Header"
import "./Order.scss";

const Order = () => {

    // API para logos: https://cryptoicons.org
    // Clave: https://cryptoicons.org/api/:style/:currency/:size/:color
    const [coin, setCoin] = useState("eth")

    return (
        <div className="order">

            <form>

                {/* Header */}
                <div className="order__header">
                    <div className="header__img">
                        <img src={`https://cryptoicons.org/api/black/${coin}/100`} alt="bitcoin" className="order__img"/>
                    </div>
                    <span><input name="quantity" type="text" placeholder="0.002"/> BTC</span>
                </div>

                <hr/>

                {/* Payment info */}
                <div className="order__pagos">
                    <div className="pagos__elemento">
                        <p>Método de Pago</p>
                        <select name="payment-method" id="payment-method">
                            <option value="visa">Visa</option>
                            <option value="transferencia">Transferencia Electrónica</option>
                            <option value="crypto-wallet">Crypto Wallet</option>
                        </select>
                    </div>
                    <div className="pagos__elemento">
                        <p>Precio</p>
                        <p>$320.00</p>
                    </div>
                    <div className="pagos__elemento">
                        <p>Tarifa E-Crypt</p>
                        <p>$10.00</p>
                    </div>
                    <div className="pagos__elemento total">
                        <p>Total</p>
                        <p>$330.00</p>
                    </div>
                </div>


                {/* Buy button */}
                <button type="submit">Comprar Ahora</button>

            </form>

        </div>
    );

}

export default Order;