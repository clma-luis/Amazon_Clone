import React from "react";
import CheckoutProduct from "../../components/CheckoutProduct/CheckoutProduct";

import "./Checkout.scss";

const Checkout = () => {
  return (
    <div className="checkout">
      <h3>Shopping Cart</h3>
      <div className="checkout__container">
        <div className="checkout__product">
          <CheckoutProduct />
        </div>
        
        <div className="checkout__subtotal">
          <div className="subtotal">
            Subtotal (2 items): <span className="final-price">$51.50</span>
          </div>
          <button>Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
