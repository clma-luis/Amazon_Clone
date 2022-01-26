import React from "react";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import star from "../../template/images/star.png";
import "./Product.scss";

const Product = ({
  id,
  title,
  price,
  image,
  rating,
  votes,
  get_it,
  shipping
}) => {

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

  return (
    <div className="product">
      
        <div className="product__post">
          <Link className="isActive" to="/">
          <img
            className="product__img"
            src={image}
            alt=""
          />
          <p className="product__title">
            {truncate(title, 145 )}
          </p>
          </Link>
          <div className="product__rating">
            <span className="star">
              {Array(rating).fill().map((_, i) => (
                  <img key={i} className="star-img" src={star} alt="rating-star" />
              ))}

            
            </span>
            <span className="arrow-vote">
              <KeyboardArrowDownIcon className="arrow-icon"/>
              <span className="vote">
                {votes}
              </span>
              
            </span>
          </div>
          <span className="price">$ {price}</span>
          <p>
            Get it as soon as &nbsp; 
            <span>{get_it}</span>
          </p>
          <p>${shipping} shipping</p>
        </div>
    
    </div>
  );
};

export default Product;
