import React from "react";
import { useParams } from "react-router-dom";
import star from "../../template/images/star.png";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { useStateValue } from "../../StateProvider";

import "./ProductPage.scss";

const ProductPage = () => {
  const [{data}, dispatch] = useStateValue();

    const {product} = useParams(); 
    const {category} = useParams();

    console.log(`Hola yo soy el product: ${product} y yo soy el ${category}`);

    const indexcategory = data.findIndex((item) => item.id === category);
    
    const indexproduct = data[indexcategory].data_products.find((item) => item.id ===product)
    console.log('hola hola hola', indexproduct);


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
            src={indexproduct.image}
            alt={indexproduct.title}
          />
        </div>

        <div className="productPage__info">
          <h1>
          {indexproduct.title}
          </h1>
          <span className="productPage__by">By {indexproduct.brand}</span>
          <div className="product__rating">
            <span className="star">
              {Array(indexproduct.rating)
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
              {indexproduct.votes} ratings | {indexproduct.answer_questions} answered questions
              </span>
            </span>
            <div className="space"></div>
            <div className="logo-amazon">

             
              <span className="amazon-choice">Amazon's <span className="choice">Choice</span> </span>
            
            </div>
            
            <span className="price">
              <span className="price__info">
                Price: &nbsp; <h4>${indexproduct.price}</h4>
              </span>

              <p>${indexproduct.price_shipping} Shipping & import Fees Deposit to USA</p>
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
              <h4>${indexproduct.price}</h4>
              <p className="shipping">
              ${indexproduct.price_shipping} Shipping & import Fees Deposit to USA
              </p>
              <p className="datemtime">
                Delivery <span className="delivery">{indexproduct.get_it}</span>
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
