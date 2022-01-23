import React from "react";
import { Link } from "react-router-dom";
import "./ProductPost.scss";

const ProductPost = ({id,title, image, _url}) => {
  return (
    <div className="productpost">
      <div className="productpost__items">
            <h2>{title}</h2>

            <Link className="isActive" to={_url}>
        
            <img
                src={image}
                alt={title}
            />
            </Link>

            <Link className="isActive" to={_url}>
            <span>See more</span>
            </Link>
      </div>
    </div>
  );
};

export default ProductPost;
