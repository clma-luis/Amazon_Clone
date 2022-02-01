import React, {useState} from "react";
import "./Home.scss";
import ProductsGroup from "../../components/ProductsGroup/ProductsGroup";
import CarouselContainer from "../../components/Carousel/CarouselContainer";
import ProductPost from "../../components/ProductPost/ProductPost";
import { SliderData } from "../../components/Carousel/SliderData";
import SliderCategory from "../../components/SliderCategory/SliderCategory.jsx";
import { useStateValue } from "../../StateProvider";
import InformationPost from "../../components/InformationPost/InformationPost";

const Home = () => {
  const [{ data }, dispatch] = useStateValue();

  const OptionOne = data.slice(1, 5);
  const OptionTwo = data.slice(5, 8);




  return (
    <div className="home">
      <CarouselContainer slides={SliderData} />

      <div className="home__row">
        <ProductsGroup start={14} end={18} title={"Gaming Accesories"} />
        <ProductsGroup start={4} end={8} title={"Best Sellers"} />
        <ProductPost
          id={data[18].id}
          title={data[18].title}
          image={data[18].image}
          url={data[18].url}
          data_products={data[18].data_products}
        />
        <InformationPost />
      </div>

      <div className="home__row">
        {OptionOne.map((item, index) => {
          return (
            <ProductPost
              id={item.id}
              title={item.title}
              image={item.image}
              url={item.url}
              data_products={item.data_products}
            />
          );
        })}
      </div>

      <div className="slider_products">
        <h1>{data[11].title}</h1>
        <div className="slider__image">
          {data[11].data_products.map((product) => {
            return (
              <SliderCategory
              route={data[11].id}
                id={product.id}
                title={product.title}
                image={product.image}
              />
            );
          })}
        </div>
      </div>

      <div className="slider_products">
        <h1>{data[9].title}</h1>
        <div className="slider__image">
          {data[9].data_products.map((product) => {
            return (
              <SliderCategory
                route={data[9].id}
                id={product.id}
                title={product.title}
                image={product.image}
              />
            );
          })}
        </div>
      </div>

      <div className="home__row">
        <ProductPost
          id={data[14].id}
          title={data[14].title}
          image={data[14].image}
          url={data[14].url}
          data_products={data[14].data_products}
        />
        <ProductsGroup start={10} end={14} title={"Best Price"} />
      
        <ProductPost
          id={data[9].id}
          title={data[9].title}
          image={data[9].image}
          url={data[9].url}
          data_products={data[9].data_products}
        />
        <ProductsGroup start={2} end={6} title={"On the Top"} />
      </div>

      <div className="home__row">
        {OptionTwo.map((item, index) => {
          return (
            <ProductPost
              id={item.id}
              title={item.title}
              image={item.image}
              url={item.url}
              data_products={item.data_products}
            />
          );
        })}

        <ProductPost
          id={data[18].id}
          title={data[18].title}
          image={data[18].image}
          url={data[18].url}
          data_products={data[18].data_products}
        />
      </div>

      <div className="slider_products">
        <h1>{data[10].title}</h1>
        <div className="slider__image">
          {data[10].data_products.map((product) => {
            return (
              <SliderCategory
              route={data[10].id}
                id={product.id}
                title={product.title}
                image={product.image}
              />
            );
          })}
        </div>
      </div>

      <div className="slider_products">
        <h1>{data[12].title}</h1>
        <div className="slider__image">
          {data[12].data_products.map((product) => {
            return (
              <SliderCategory
              route={data[12].id}
                id={product.id}
                title={product.title}
                image={product.image}
              />
            );
          })}
        </div>
      </div>

      <div className="home__row">
      <ProductPost
          id={data[1].id}
          title={data[1].title}
          image={data[1].image}
          url={data[1].url}
          data_products={data[1].data_products}
        />
        <ProductsGroup start={14} end={18} title={"Gaming Accesories"} />
        <ProductPost
          id={data[0].id}
          title={data[0].title}
          image={data[0].image}
          url={data[0].url}
          data_products={data[0].data_products}
        />
        <ProductsGroup start={4} end={8} title={"Best Sellers"} />
      </div>

      <div className="slider_products">
        <h1>{data[13].title}</h1>
        <div className="slider__image">
          {data[13].data_products.map((product) => {
            return (
              <SliderCategory
              route={data[13].id}
                id={product.id}
                title={product.title}
                image={product.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
