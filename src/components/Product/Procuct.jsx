import React from 'react';
 import { Link } from 'react-router-dom'

const Procuct = ({id, title, price, brand, image, rating, votes, get_it}) => {
  return (
    <div className="productpost">
        <div className="productpost__item">
            <Link to="/">
                <img src={image} alt="" />
            </Link>
            <h3>{title}</h3>
            <span></span>

        </div>
  </div>
  )
};

export default Procuct;
