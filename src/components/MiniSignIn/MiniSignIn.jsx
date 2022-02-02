import React from "react";
import { Link } from "react-router-dom";
import usaflag from "../../template/images/usa-flag.png";
import "./MiniSignIn.scss";
import { useStateValue } from "../../StateProvider";

const MiniSignIn = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="minisignin">
      <div className="subMenu__list">
        <div className="subMenuR__button">
          <Link to="/signin">
            <button>{user ? "Sign Out" : "Sign In"}</button>
          </Link>
          
          <p>
            New customer?{" "}
            <Link className="start-here" to="/">
              Start here.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MiniSignIn;
