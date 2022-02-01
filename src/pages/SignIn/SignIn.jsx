import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignIn.scss";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const SignIn = () => {
  const [needHelp, setNeedHelp] = useState(false);
  const [register, setRegister] = useState(false);

  const DownMenu = () => {
    setNeedHelp(!needHelp);
  };
  const RegisterForm = () => {
    setRegister(!register);
  };

  const signInButton = (e) => {
    e.preventDefault();
  }

  const registerButton = (e) => {
    e.preventDefault();
  }

  return (
    <div className="signIn">
      <div className="signIn__logo">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            alt="amazon_logo"
          />
        </Link>
      </div>
      <div className="sigIn__container">
        <span className="signIn__title">
          {" "}
          {register ? "Create account" : "Sign-In"}
        </span>
        <div className="signIn__box">
          <form className="signIn__form">
            <span className={register ? "signIn__name active" : "signIn__name"}>
              Name
            </span>
            <input
              type="text"
              className={
                register ? "signIn__input-name active" : "signIn__input-name"
              }
            />
            <span className="signIn__email">Email</span>
            <input type="text" className="signIn__input-email" />
            <span className="signIn__password">Password</span>
            <input
              type="password"
              className="signIn__input-password"
              placeholder={register ? "At least 6 characters" : ""}
            />

            <button  type="submit" className= {register ? "signIn__continue-button active" : "signIn__continue-button" } onClick={signInButton}>Continue</button>
            <button type="submit" className={register ? "create__continue-button active" : "create__continue-button"} onClick={registerButton}>Continue</button>
          </form>

          <span className="signIn__info">
            By continuing, you agree to Amazon's{" "}
            <span className="info-conditions">Conditions of Use </span> and{" "}
            <span className="info-privacy">Privacy Notice.</span>
          </span>

          <div className="signIn__needhelp">
            <ArrowRightIcon className="signIn__needhelp-icon" />
            <div className="signIn__needHelp-box">
              <div className="need-help" onClick={DownMenu}>
                <span>Need help?</span>
              </div>

              <div
                className={
                  needHelp
                    ? "signIn__needhelp-minimenu active"
                    : "signIn__needhelp-minimenu"
                }
              >
                <span className="forgot-password">Forgot your password?</span>
                <br />
                <span className="other-issues">Other issues with Sign-In</span>
              </div>
            </div>
          </div>
          <div className={register ? "newToAmazon active" : "newToAmazon"}>
            <span className="newToAmazonTitle">New to Amazon?</span>
            <button className="newAmazonButton" onClick={RegisterForm}>
              Create your Amazon account
            </button>
          </div>
          <div className={register ? "linkToSignIn active" : "linkToSignIn"}>
            <span className="ready">
              Already have an account?<span className="signIn" onClick={RegisterForm}>Sign-In</span>
            </span>
            <br />
            <span className="freeBusiness">
              Buying for work?{" "}
              <span className="createAccount">
                Create a free business account
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className="SignIn__footer">
        <div className="info__footer">
          <span className="conditon-footer">Condition of Use</span>
          <span className="privacy-footer">Privacy Notice</span>
          <span className="help-footer">Help</span>
        </div>
        <div className="byAmazon-footer">
          <span>© 1996-2022, Amazon.com, Inc. or its affiliates</span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
