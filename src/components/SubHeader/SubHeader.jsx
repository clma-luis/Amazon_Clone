import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import DropdownMenuDesktop from "../DropdownMenuDesktop/DropdownMenuDesktop";
import "./SubHeader.scss";

const SubHeader = ({ inactiveScroll }) => {
  const [menuclick, setMenuclick] = useState(false);

  const handlebuttom = () => {
    setMenuclick(!menuclick);
  };

  return (
    <div className="SubHeader">
      <div className="SubHeader__margin">
        <div className="subheader__list1">
          <div className="all-menu">
            <Link to={"#"} className="isActive">
              <div
                className="SubHeader__menu MenuOutlinedIcon"
                onClick={handlebuttom}
              >
                <div onClick={inactiveScroll}>
                  <MenuOutlinedIcon className="icon" />
                  <span>All</span>
                </div>
              </div>
            </Link>
          </div>

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

        <div className="subheader__list2">
          <ul>
            <li>Deals</li>
            <li>Amazon Basics</li>
            <li>Best Basics</li>
            <li>Best Sellers</li>
            <li>Livestreams</li>
            <li>Video</li>
            <li>New Release</li>
            <li>Home</li>
            <li>Books</li>
            <li>Gift Cards</li>
            <li>Health & Household</li>
            <li>PC</li>
            <li>Music</li>
            <li>List</li>
          </ul>
        </div>
      </div>

      <div
        className={
          menuclick ? "header__dropdown__menu active" : "header__dropdown__menu"
        }
      >
        <DropdownMenuDesktop
          className="subheader-menu"
          actionToPerform={() => {
            setMenuclick(!menuclick);
          }}
          scroll= {inactiveScroll}
        />
      </div>

      <div onClick={inactiveScroll}>
        <div
          className={
            menuclick ? "background-hidden active" : "background-hidden"
          }
          onClick={() => {
            setMenuclick(false);
          }}
        ></div>
      </div>
    </div>
  );
};

export default SubHeader;
