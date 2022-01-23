import React, { useState } from "react";
import { SliderData } from "./SliderData";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "./CarouselContainer.scss";

const CarouselContainer = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;


  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="carousel">
      <div className="carousel__arrowBack" onClick={prevSlide}>
        <ArrowBackIosIcon className="icon" />
      </div>

      <div className="carousel__arrowForward" onClick={nextSlide}>
        <ArrowForwardIosIcon className="icon" />
      </div>

      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            
            {index === current && (
              <img
                className="carousel-images"
                src={slide.image}
                alt={slide.info}
              />
            )}
            ;
          </div>
        );
      })}
    </div>
  );
};

export default CarouselContainer;
