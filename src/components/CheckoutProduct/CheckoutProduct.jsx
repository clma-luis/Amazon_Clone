import React from "react";
import "./CheckoutProduct.scss";
import { useStateValue } from "../../StateProvider";

const CheckoutProduct = ({id, title, image, price, hidden}) => {
const [{basket}, dispatch] = useStateValue();

const removeToBasket = () => {
  dispatch({
    type: "REMOVE_FROM_BASKET",
    id
  })
}

  return (
    <div className="checkoutProduct">
      <div className="checkoutProduct__container">
        <div className="checkoutProduct__image">
          <img
            src={image}
            alt={title}
          />
        </div>
        <div className="checkoutProduct__info">
          <span className="productProduct__title">
            {title}
          </span>
          <span className="in-stock"> {hidden ? "" : "In Stock"}</span>
          <span className="gift-option">
          {hidden ? "" : "Gift options not available."}{" "}
            <span className="learn-more">{hidden ? "" : "Learn more"} </span>
          </span>
          <div className="price_delete">
            
          <div className="checkoutProduct__price">${price}&nbsp;&nbsp;</div>
          <span className="delete" onClick={removeToBasket}>
          {hidden ? "" : "Delete"} 
            </span>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default CheckoutProduct;
