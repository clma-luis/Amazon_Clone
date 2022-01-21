import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import { NavLink } from "react-router-dom";
import usaflag from "../../template/images/usa-flag.png";

import DropdownMenu from "../DropdownMenu/DropdownMenu";

import "./Header.scss";

const Header = () => {
  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(!state);
  };
  return (
    <div className="Header">
      <div className="header">
        <div className="header__menuIcon" onClick={handleClick}>
          <i>
            {state ? (
              <MenuOutlinedIcon className="icon" />
            ) : (
              <MenuOutlinedIcon className="icon" />
            )}
          </i>
        </div>

        <NavLink to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon_logo"
          />
        </NavLink>

        <div className="header__ubication">
          <LocationOnOutlinedIcon className="header__location" />
          <div className="header__one">
            <span className="header__optionLineOne">Delivery to</span>
            <span className="header__optionLineTwo">USA</span>
          </div>
        </div>

        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">
          <div className="header__option header__flag">
            <span className="header__optionLineOne ">
              <img className="header__flag-img" src={usaflag} alt="" />
            </span>
            <span className="header__optionLineTwo">
              <ArrowDropDownIcon className="arrow_icon" />
            </span>
          </div>

          <div className="header__option">
            <span className="header__optionLineOne">Hello Guest,</span>

            <span className="header__optionLineTwo">Sign In</span>
          </div>

          <div className="header__option return__orders">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>

          <div className="header__option">
            <div className="header__optionBasket">
              <ShoppingBasketIcon className="header__basketIcon" />
              <span className="header__basketCount">0</span>
            </div>
          </div>
        </div>
      </div>
      <div className={state ? "header__dropdown__menu active" : "header__dropdown__menu"}>
        
          <DropdownMenu actionToPerform={ handleClick }/>
        
      </div>
    </div>
  );
};

export default Header;
