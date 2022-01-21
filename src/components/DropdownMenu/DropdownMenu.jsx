import React from "react";
import PermIdentityRoundedIcon from "@material-ui/icons/PermIdentityRounded";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import CloseIcon from "@material-ui/icons/Close";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import "./DropdownMenu.scss";

const Dropdown_Menu = ({ actionToPerform }) => {
  return (
    <div className="dropdown__menu">
      <div className="dropdown__menu-left">
        <div className="dropdown__menu-box1">
          <div className="dropdown__menu-item profile">
            <span>Sign In</span>
            <PermIdentityRoundedIcon className="icon__profile" />
          </div>
          <div className="dropdown__menu-item title">
            <h1>
              <span>Browse</span> <br />
              Amazon
            </h1>
          </div>
        </div>

        <div className="dropdown__menu-box2">
          <h3>Amazon Home</h3>
          <HomeOutlinedIcon className="home-icon" />
        </div>

        <div className="dropdown__menu-box3">
          <h3>Trending</h3>
          <span>Movers & Shakers</span>
        </div>

        <div className="dropdown__menu-box4">
          <h3>Principal Categories</h3>
          <div className="menu-options">
            <span>Hogar</span>
            <span>Salud y productos para el Hogar</span>
            <span>Libros</span>
            <span>Pc</span>
            <span className="menu active">
              Ver todos los departamentos
              <ArrowForwardIosOutlinedIcon className="row-icon" />
            </span>
          </div>
        </div>
      </div>

      <div className="dropdown__menu-right">
        <span className="button-icon" onClick={actionToPerform}>
          <CloseIcon className="closeicon" />
        </span>
      </div>
    </div>
  );
};

export default Dropdown_Menu;
