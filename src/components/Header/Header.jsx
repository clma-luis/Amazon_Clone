import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import { NavLink } from "react-router-dom";
import usaflag from "../../template/images/usa-flag.png";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import SubMenuL from "../SubMenuL/SubMenuL";
import SubMenuR from "../SubMenuR/SubMenuR";
import { app } from "../../firebase";

import { useStateValue } from "../../StateProvider";

import "./Header.scss";

const Header = ({ inactiveScroll }) => {
  const [click, setClick] = useState(false);
  const [hover, setHover] = useState(false);
  const [signHover, setSignHover] = useState(false);
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      app.auth().signOut();
    }
  };



  return (
    <div className="Header">
      <div className="header">
        <div onClick={inactiveScroll}>
          <div
            className="header__menuIcon"
            onClick={() => {
              setClick(!click);
            }}
          >
            <i>
              {click ? (
                <MenuOutlinedIcon className="icon" />
              ) : (
                <MenuOutlinedIcon className="icon" />
              )}
            </i>
          </div>
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
          <div
            className={
              hover || signHover
                ? "background-hidden active"
                : "background-hidden"
            }
          ></div>
          <div
            className="header__option header__flag"
            onMouseEnter={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
          >
            <span className="header__optionLineOne active">
              <img className="header__flag-img" src={usaflag} alt="" />
            </span>
            <span className="header__optionLineTwo active">
              <ArrowDropDownIcon className="arrow_icon" />
            </span>

            <span
              className={
                hover ? "submenu__lenguage active" : "submenu__lenguage"
              }
            >
              <SubMenuL />
            </span>
          </div>

          <div
            className="header__option"
            onMouseEnter={() => {
              setSignHover(!signHover);
            }}
            onMouseLeave={() => {
              setSignHover(false);
            }}
          >
            <NavLink to={user ? "" : "/signin"} className="isActive">
              <div className="authentication" onClick={handleAuthentication}>
                <span className="header__optionLineOne">
                  Hello {!user ? "Guest" : user.email.split('@')[0]},
                </span>

                <span className="header__optionLineTwo">
                  {user ? "Sign Out" : "Sign In"}
                </span>
              </div>
            </NavLink>

            <span
              className={
                signHover ? "submenu__SignIn active" : "submenu__SignIn"
              }
            >
              <SubMenuR />
            </span>
          </div>

          <div className="header__option return__orders">
            <NavLink to={user ? "/orders" : "/"} className="isActive">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </NavLink>
          </div>

          <div className="header__option">
            <NavLink to="/checkout" className="isActive">
              <div className="header__optionBasket">
                <ShoppingBasketIcon className="header__basketIcon" />
                <span className="header__basketCount">{basket?.length}</span>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      <div
        className={
          click ? "header__dropdown__menu active" : "header__dropdown__menu"
        }
      >
        <DropdownMenu
          actionToPerform={() => {
            setClick(!click);
          }}
          scroll={inactiveScroll}
        />
      </div>
    </div>
  );
};

export default Header;
