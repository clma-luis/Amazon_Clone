import React from "react";
import { useParams } from "react-router-dom";
import "./CategoryProduct.scss";
import Product from "../../components/Product/Product";
import { useStateValue } from "../../StateProvider";

const CategoryProduct = () => {
  const [{ data }, dispatch] = useStateValue();
  const { id } = useParams();
  const index = data.findIndex((item) => item.id === id);

  return (
    <div className="computerAccesories">
      <div className="computerAccesories__header">
        <h1>{data[index].title}</h1>
        <span>{data[index].info}</span>
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/PayCode/FinalAssets/Desktop/English/AmazonExports_FIAT_OnSite_Concepts_R3_DesktopStripe_1500x120_v1.png"
          alt=""
        />
      </div>

      <div className="computerAccesories__products">
        {data[index].data_products.map((product) => {
          return (
            <Product
              key={product.id}
              route={id}
              id={product.id}
              title={product.title}
              price={product.price}
              brand={product.brand}
              image={product.image}
              rating={product.rating}
              votes={product.votes}
              answer_questions={product.answer_questions}
              get_it={product.get_it}
              shipping={product.price_shipping}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CategoryProduct;
