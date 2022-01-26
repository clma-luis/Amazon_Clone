import React from "react";
import "./ComputerAccesories.scss";
import Product from "../../components/Product/Product";
import { HomeData } from "../Home/Data/HomeData";

const ComputerAccesories = () => {
  const DataProduct = HomeData[0].data_products;
  console.log(DataProduct);

  return (
    <div className="computerAccesories">
      <div className="computerAccesories__header">
        <h1>Computers, Tablets and IT Accessories</h1>
        <span>
          Shop laptops, desktops, monitors, tablets, PC gaming, hard drives and
          storage, accessories and more
        </span>
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/PayCode/FinalAssets/Desktop/English/AmazonExports_FIAT_OnSite_Concepts_R3_DesktopStripe_1500x120_v1.png"
          alt=""
        />
      </div>

      <div className="computerAccesories__products">
        {DataProduct.map((product) => {
          return <Product 
          id = {product.id}
           title = {product.title}
           price = {product.price}
           image = {product.image}
           rating = {product.rating}
           votes = {product.votes}
           get_it= {product.get_it}
           shipping={product.price_shipping}
            />;
        })}
      </div>
    </div>
  );
};

export default ComputerAccesories;
