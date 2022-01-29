import React from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import "./CheckoutProduct.scss";

const CheckoutProduct = () => {
  return (
    <div className="checkoutProduct">
      <div className="checkoutProduct__container">
        <div className="checkoutProduct__image">
          <img
            src="https://m.media-amazon.com/images/I/91jb08nas1L._AC_AA180_.jpg"
            alt=""
          />
        </div>
        <div className="checkoutProduct__info">
          <span className="productProduct__title">
            Amazon Basics Kids Bedding Nap Set with Dinosaur Pillow and Fleece
            Throw BlanketAmazon Basics Kids Bedding Nap Set with Dinosaur Pillow
            and Fleece Throw Blanket
          </span>
          <span className="in-stock">In Stock</span>
          <span className="gift-option">
            Gift options not available.{" "}
            <span className="learn-more">Learn more</span>
          </span>
        
          <div className="checkoutProduct__price">$12.44</div>
        </div>
        
      </div>
    </div>
  );
};

export default CheckoutProduct;
