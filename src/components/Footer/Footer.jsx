import React from "react";
import { Link } from "react-router-dom";
import LanguageIcon from "@material-ui/icons/Language";
import ArrowDropDownSharpIcon from "@material-ui/icons/ArrowDropDownSharp";
import ArrowDropUpSharpIcon from "@material-ui/icons/ArrowDropUpSharp";
import usaflag from "../../template/images/usa-flag.png";
import { FooterData } from "./FooterData";

import "./Footer.scss";

const Footer = ({actionClickUp}) => {
  return (
    <div className="footer">
      <div className="footer__nav">
        <div className="footer__backtop">
          <span>Back to top</span>
        </div>

        <div className="footer__columsInfo">
          <div className="footer__getToKnowUs">
            <ul className="ul_1">
              <li>Get to Know Us</li>
              <li>Careers</li>
              <li>Blogs</li>
              <li>About Us</li>
              <li>Investor Relations</li>
              <li>Amazon Devices</li>
            </ul>
          </div>
          <div className="footer__makeMoney">
            <ul className="ul_2">
              <li>Make Money with Us</li>
              <li>Sell products on Amazon</li>
              <li>Sell on Amazon Business</li>
              <li>Sell on Amazon Business</li>
              <li>Sell apps on Amazon</li>
              <li>Become an Affiliate</li>
              <li>Advertise Yur Products</li>
              <li>Self-Publish with Us</li>
              <li>Host an Amazon Hub</li>
              <li>{">"} See More Make Money with Us</li>
            </ul>
          </div>
          <div className="footer__amazonPayment">
            <ul className="ul_3">
              <li>Amazon Payment Products</li>
              <li>Amazon Business Card</li>
              <li>Shop with Points</li>
              <li>Reload Your Balance</li>
              <li>Amazon Currency Converter</li>
            </ul>
          </div>
          <div className="footer__letUsHelpYou">
            <ul className="ul_4">
              <li>Let Us Help You</li>
              <li>Amazon and COVID-19</li>
              <li>Your Acount</li>
              <li>Your Orders</li>
              <li>Shipping Rates & Policies</li>
              <li>Returns & Replacements</li>
              <li>Manage Your Content and Devices</li>
              <li>Amazon Assistant</li>
              <li>Help</li>
            </ul>
          </div>
        </div>
        <div className="footer__amazon">
          <Link to="/">
            <div className="logo">
              <img
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt=""
              />
            </div>
          </Link>

          <div className="footer__amazon-boxes">
            <div className="lenguage">
              <span className="icon__worldlenguge">
                <LanguageIcon />
              </span>

              <span>English</span>

              <span className="icon_row_updown">
                <ArrowDropUpSharpIcon />
                <ArrowDropDownSharpIcon />
              </span>
            </div>
            <div className="footer__amazon-dolar">
              <span>$ USD - U.S. Dollar</span>
            </div>

            <div className="footer__amazon-flag">
              <span className="icon-usaflag">
                <img src={usaflag} alt="usa-flag" />
              </span>
              <span>&nbsp;&nbsp;&nbsp;United States</span>
            </div>
          </div>
        </div>
        <div className="footer__links">
          {FooterData.map((item, index) => {
            return (
              <div className="footer__item">
                <a href={item._url} target="_blank" rel="noreferrer">
                  <span className="title">{item.title}</span>
                  <span className="info">{item.info}</span>
                </a>
              </div>
            );
          })}
        </div>
         <div className="footer__endLink">
          <span>Condition of Use</span>
          <span>Privacy Notice</span>
          <span>Interest-Based Ads</span>
          <span className="copyrigth">© 1996-2022 <br/> Amazon.com, Inc. or its affiliates </span>
        </div> 
      </div>
    </div>
  );
};

export default Footer;
