import React from "react";
import { Link } from "react-router-dom";
import "./ProductsGroup.scss";
import { useStateValue } from "../../StateProvider";

const ProductsGroup = ({ start, end, title }) => {
  const [{ data }, dispatch] = useStateValue();

  const dataProductsGroup = data.slice(start, end);

  return (
    <div className="ProductsGroup">
      <div className="productpost__items">
        <h2>{title}</h2>
        <div className="box__container">
          <Link
            className="isActive"
            to={`categoryproduct/${dataProductsGroup[0].id}`}
          >
            <div className="product__item">
              <div className="box__image">
                <img
                src={dataProductsGroup[0].image}
                alt={dataProductsGroup[0].title}
              />
              </div>
              
              <span>{dataProductsGroup[0].title}</span>
            </div>
          </Link>

          <Link
            className="isActive"
            to={`categoryproduct/${dataProductsGroup[1].id}`}
          >
          <div className="product__item">
          <div className="box__image">
            <img
              src={dataProductsGroup[1].image}
              alt={dataProductsGroup[1].title}
            />
          </div>
            
            <span>{dataProductsGroup[1].title}</span>
          </div>
          </Link>
          <Link
            className="isActive"
            to={`categoryproduct/${dataProductsGroup[2].id}`}
          >
          <div className="product__item">
          <div className="box__image">
            <img
              src={dataProductsGroup[2].image}
              alt={dataProductsGroup[2].title}
            />
          </div>
            
            <span>{dataProductsGroup[2].title}</span>
          </div>
          </Link>
          <Link
            className="isActive"
            to={`categoryproduct/${dataProductsGroup[3].id}`}
          >
          <div className="product__item">
          <div className="box__image">
            <img
              src={dataProductsGroup[3].image}
              alt={dataProductsGroup[3].title}
            />
          </div>
            
            <span>{dataProductsGroup[3].title}</span>
          </div>
          </Link>
        </div>

        <Link className="isActive" to="/">
          <span className="see-more">See more</span>
        </Link>
      </div>
    </div>
  );
};

export default ProductsGroup;
