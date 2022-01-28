import React from "react";
import star from "../../template/images/star.png";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

import "./ProductPage.scss";

const ProductPage = () => {
  return (
    <div className="productPage">
      <div className="productPage__img">
        <img
          className="productPage__poster-img"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Launches/ILM/Fuji_ILM_Ship_en_US._CB665226464_.png"
          alt=""
        />
      </div>

      <div className="productPage__container">
        <div className="productPage__image">
          <img
            src="https://m.media-amazon.com/images/I/81tjLksKixL._AC_SL1500_.jpg"
            alt=""
          />
        </div>

        <div className="productPage__info">
          <h1>
            Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for
            PC, Mac, PlayStation, & Xbox - 1-Year Rescue Service (STGX2000400)
          </h1>
          <span className="productPage__by">By Seteage Store</span>
          <div className="product__rating">
            <span className="star">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <img
                    key={i}
                    className="star-img"
                    src={star}
                    alt="rating-star"
                  />
                ))}
            </span>
            <span className="arrow-vote">
              <KeyboardArrowDownIcon className="arrow-icon" />
              <span className="vote">
                175,305 ratings | 1000 answered questions
              </span>
            </span>
            <div className="space"></div>
            <div className="logo-amazon">

             
              <span className="amazon-choice">Amazon's <span className="choice">Choice</span> </span>
            
            </div>
            
            <span className="price">
              <span className="price__info">
                Price: &nbsp; <h4>$59</h4>
              </span>

              <p>$26.6 Shipping & import Fees Deposit to USA</p>
              <span className="details">
                Details
                <KeyboardArrowDownIcon className="arrow-icon" />
              </span>
            </span>
          </div>
        </div>

        <div className="productPage__addtocard">
          <div className="ProductPage__addtocard-container">
            <div className="productPage__price-addtocard">
              <h4>$59.99</h4>
              <p className="shipping">
                $26.6 Shipping & import Fees Deposit to USA
              </p>
              <p className="datemtime">
                Delivery <span className="delivery">Thursday, February 10</span>
              </p>
            </div>
            <div className="productPage__delivery">
              <LocationOnOutlinedIcon className="icon-location" />
              <span>Delivery to USA</span>
            </div>
            <div className="button_card">
              <button className="add_to_cart">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
