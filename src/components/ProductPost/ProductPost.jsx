import React from "react";
import { Link } from "react-router-dom";
import "./ProductPost.scss";

import { useStateValue } from "../../StateProvider";

const ProductPost = ({id, title, image, url, data_products}) => {
  // eslint-disable-next-line no-unused-vars
  const [{ categories }, dispatch] = useStateValue();





  return (
    <div className="productpost">
      <div className="productpost__items" >
            

            <Link className="isActive" to={`categoryproduct/${id}`}>
            <h2>{title}</h2>
            <img
                src={image}
                alt={title}
            />
            </Link>

            <Link className="isActive" to={`categoryproduct/${id}`}>
            <span>See more</span>
            </Link>
      </div>
    </div>
  );
};

export default ProductPost;
