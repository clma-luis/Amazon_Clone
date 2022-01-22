import React from "react";
import { Link } from "react-router-dom";
import "./SubMenuR.scss";

const SubMenuR = () => {
  return (
    <div className="subMenuR ">
      <div className="subMenuR__list">
        <div className="subMenuR__button">
          <button>Sign In</button>
          <p>
            New customer?{" "}
            <Link className="start-here" to="/">
              Start here.
            </Link>
          </p>
        </div>

        <div className="subMenuR__container">
          <div className="subMenuR__yourList">
            <span>Your List</span>
            <ul>
              <li>Create a List</li>
              <li>Find a List or Registry</li>
              <li>AmazonSmile Charity Lists</li>
            </ul>
          </div>

          <div className="subMenuR__yourAccount">
            <span>Your Account</span>
            <ul>
              <li>Account</li>
              <li>Orders</li>
              <li>Recommendations</li>
              <li>Browsing History</li>
              <li>Watchlist</li>
              <li>Video Purchases & Rentals</li>
              <li>Kindle Unlimited</li>
              <li>Content & Devices</li>
              <li>Subscribe & Save Items</li>
              <li>Memberships & Subscriptions</li>
              <li>Music Library</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubMenuR;
