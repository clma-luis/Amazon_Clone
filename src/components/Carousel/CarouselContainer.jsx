import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./CarouselContainer.scss";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
const CarouselContainer = () => {


  return (
    <div className="carousel" id="">
      <div className="carousel__item" id="corousel__item-1">
        <Link to="/">
          <div className="carousel__img" id="carousel__img-1">
            <img
              src="https://m.media-amazon.com/images/I/61dmivPGQ8L._SX3000_.jpg"
              alt="carousel_img-1"
            />
          </div>
        </Link>

        <div className="carousel__rows">
          <a href="#corousel__item-5">
            <ArrowBackIosIcon className="icon" />
          </a>

          <a href="#corousel__item-2">
            <ArrowForwardIosIcon className="icon" />
          </a>
        </div>

        <div className="banner--fadeBottom"/>
      </div>

      <div className="carousel__item" id="corousel__item-2">
        <Link to="/">
          <div className="carousel__img" id="carousel__img-2">
            <img
              src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
              alt="carousel_img-2"
            />
          </div>
        </Link>
        <div className="carousel__rows">
          <a href="#corousel__item-1">
            <ArrowBackIosIcon className="icon" />
          </a>

          <a href="#corousel__item-3">
            <ArrowForwardIosIcon className="icon" />
          </a>
        </div>
        <div className="banner--fadeBottom"/>
      </div>

      <div className="carousel__item" id="corousel__item-3">
        <Link to="/">
          <div className="carousel__img" id="carousel__img-3">
            <img
              src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
              alt="carousel_img-3"
            />
          </div>
        </Link>
        <div className="carousel__rows">
          <a href="#corousel__item-2">
            <ArrowBackIosIcon className="icon" />
          </a>

          <a href="#corousel__item-4">
            <ArrowForwardIosIcon className="icon" />
          </a>
        </div>
        <div className="banner--fadeBottom"/>
      </div>

      <div className="carousel__item" id="corousel__item-4">
        <Link to="/">
          <div className="carousel__img" id="carousel__img-4">
            <img
              src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg"
              alt=""
            />
          </div>
        </Link>
        <div className="carousel__rows">
          <a href="#corousel__item-3">
            <ArrowBackIosIcon className="icon" />
          </a>

          <a href="#corousel__item-5">
            <ArrowForwardIosIcon className="icon" />
          </a>
        </div>
        <div className="banner--fadeBottom"/>
      </div>

      <div className="carousel__item" id="corousel__item-5">
        <Link to="/">
          <div className="carousel__img" id="carousel__img-5">
            <img
              src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
              alt=""
            />
          </div>
        </Link>
        <div className="carousel__rows">
          <a href="#corousel__item-4">
            <ArrowBackIosIcon className="icon" />
          </a>

          <a href="#corousel__item-1">
            <ArrowForwardIosIcon className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CarouselContainer;
