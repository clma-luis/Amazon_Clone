import React from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import "./CheckoutProduct.scss";

const CheckoutProduct = ({id, title, image, price}) => {
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
          <span className="in-stock">In Stock</span>
          <span className="gift-option">
            Gift options not available.{" "}
            <span className="learn-more">Learn more</span>
          </span>
          <div className="price_delete">
            
          <div className="checkoutProduct__price">${price}&nbsp;&nbsp;</div>
          <span className="delete">
           Delete
            </span>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default CheckoutProduct;
