import React from "react";
import {Link} from 'react-router-dom'
import "./SliderCategory.scss";
// eslint-disable-next-line no-unused-vars
import { useStateValue } from "../../StateProvider";

const SliderCategory = ({route,id ,title, image}) => {
  return (
    <div className="sliderCategory">

      <Link to={`/product/${route}/${id}`}>
        <img
        src={image}
        alt={title}
      />
      </Link>
      
    </div>
  );
};

export default SliderCategory;
