import React from "react";
import CheckoutProduct from "../../components/CheckoutProduct/CheckoutProduct";
import { useStateValue } from "../../StateProvider";
import "./Checkout.scss";

const Checkout = () => {

  const [{ basket }, dispatch] = useStateValue();

  console.log('hola soy el basket de checkout', basket);

  return (
    <div className="checkout">
      <h3>Shopping Cart</h3>
      <div className="checkout__container">
        <div className="checkout__product">

          {
            basket.map(item => {
              return(
                <div key={item.id}>
                <CheckoutProduct id={item.id} title={item.title} image={item.image} price={item.price}/>
                </div>

              )
            })
          }
         
        </div>
        
        <div className="checkout__subtotal">
          <div className="subtotal">
            Subtotal ({basket?.length} items): <span className="final-price">$51.50</span>
          </div>
          <button>Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
