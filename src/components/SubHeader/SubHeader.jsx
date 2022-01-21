import React from "react";
import { Link } from "react-router-dom";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import "./SubHeader.scss";

const SubHeader = () => {
  return (
    <div className="SubHeader">
      <div className="SubHeader__margin">
        <Link to={"#"} className="isActive">
          <div className="SubHeader__menu MenuOutlinedIcon ">
            <MenuOutlinedIcon className="icon" />
            <span>All</span>
          </div>
        </Link>

        <Link to={"#"} className="isActive">
          <div className="SubHeader__menu">
            <span>Today's Deals</span>
          </div>
        </Link>

        <Link to={"#"} className="isActive">
          <div className="SubHeader__menu">
            <span>Customer Service</span>
          </div>
        </Link>

        <Link to={"#"} className="isActive">
          <div className="SubHeader__menu">
            <span>Registry</span>
          </div>
        </Link>

        <Link to={"#"} className="isActive">
          <div className="SubHeader__menu">
            <span>Gift Card</span>
          </div>
        </Link>

        <Link to={"#"} className="isActive">
          <div className="SubHeader__menu">
            <span>Sell</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SubHeader;
