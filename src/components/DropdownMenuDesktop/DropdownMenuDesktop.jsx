import React from "react";
import { Link } from "react-router-dom";
import PermIdentityRoundedIcon from "@material-ui/icons/PermIdentityRounded";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import CloseIcon from "@material-ui/icons/Close";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import "./DropdownMenuDesktop.scss";
import { useStateValue } from "../../StateProvider";
import { app } from "../../firebase";

const DropdownMenuDesktop = ({ actionToPerform, scroll }) => {

  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      app.auth().signOut();
    }
  };

  return (
    <div className="dropdown__menudesktop">
      <div className="dropdown__menu-left">
        <div className="dropdown__menu-box1">
          <div className="dropdown__menu-item profile">
            <Link to={ !user  && "/signin"} className="isActive">
              <span  onClick={handleAuthentication}>Hello, {user ? "Sign Out" : "Sign In"}</span>

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
            <Link to="/categoryproduct/H02" style={{ textDecoration: 'none'}}>
            <span>Amazon Basic</span>
            </Link>
          </div>

          <div className="dropdown__menu-box4">
            <h3>Principal Categories</h3>
            <div className="menu-options">
              <Link to="/categoryproduct/H13" style={{ textDecoration: 'none'}}>
                <span>Popular Products</span>
              </Link>
              
              <Link to="/categoryproduct/H11" style={{ textDecoration: 'none'}}>
              <span>Home Products</span>
              </Link>
              <Link to="/categoryproduct/H15" style={{ textDecoration: 'none'}}>
              
              <span>Books</span>
              </Link>
              <Link to="/categoryproduct/H09" style={{ textDecoration: 'none'}}>
              <span>Laptops & Tablets</span>
              </Link>
              <Link to="/categoryproduct/H20" style={{ textDecoration: 'none'}}>
              <span className="menu active">
              Ideal TV
                <ArrowForwardIosOutlinedIcon className="row-icon" />
              </span>
              </Link>
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
