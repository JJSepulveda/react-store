import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { PayPalButtons } from "@paypal/react-paypal-js";
import "../styles/components/Payment.css";

const Payment = () => {
    const { state } = useContext(AppContext);
    const { cart } = state;

    return(
        <div className="Payment">
            <div className="Payment-content">
                <h3>Resumen del pedido</h3>
                {cart.map((item) => (
                    <div className="Payment-item" key={item.title}>
                        <div className="Payment-element">
                            <h4>{item.title}</h4>
                            <span>$ {item.price}</span>
                        </div>
                    </div>
                ))}
                <div className="Payment-button">
                    Bton de pago con paypal
                </div>
            </div>
            <div />
        </div>
    );
}

export default Payment;