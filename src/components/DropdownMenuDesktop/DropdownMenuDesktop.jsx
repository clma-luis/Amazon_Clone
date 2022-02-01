import React from "react";
import { Link } from "react-router-dom";
import PermIdentityRoundedIcon from "@material-ui/icons/PermIdentityRounded";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import CloseIcon from "@material-ui/icons/Close";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import "./DropdownMenuDesktop.scss";

const DropdownMenuDesktop = ({ actionToPerform, scroll }) => {
  return (
    <div className="dropdown__menudesktop">
      <div className="dropdown__menu-left">
        <div className="dropdown__menu-box1">
          <div className="dropdown__menu-item profile">
            <Link to="/signin" className="isActive">
              <span>Hello, Sign In</span>

              <PermIdentityRoundedIcon className="icon__profile" />
            </Link>
          </div>
        </div>
        <div className="scroll">
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
      </div>
      <div onClick={scroll}>
        <div className="dropdown__menu-right">
          <span className="button-icon" onClick={actionToPerform}>
            <CloseIcon className="closeicon" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenuDesktop;
