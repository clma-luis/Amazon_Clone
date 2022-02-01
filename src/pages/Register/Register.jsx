import React from 'react';
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import './Register.scss'

const Register = () => {

  return (
    <div className="register">
      <div className="register__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon_logo"
        />
      </div>
      <div className="register__container">
        <span className="register__title">Register</span>
        <div className="register__box">
          <form className="register__form">
            <span className="signIn__email">Email</span>
            <input type="text" className="signIn__input-email" />
            <span className="signIn__password">Password</span>
            <input type="password" className="signIn__input-password"  />

            <button className="signIn__continue-button">Continue</button>
          </form>

          <span className="signIn__info">
            By continuing, you agree to Amazon's{" "}
            <span className="info-conditions">Conditions of Use </span> and{" "}
            <span className="info-privacy">Privacy Notice.</span>
          </span>

          <div className="signIn__needhelp">
            <ArrowRightIcon className="signIn__needhelp-icon" />
            <div className="signIn__needHelp-box">
              <div className="need-help" >
                <span>Need help?</span>
              </div>

              <div
                className="signIn__needhelp-minimenu" >
                <span className="forgot-password">Forgot your password?</span>
                <br />
                <span className="other-issues">Other issues with Sign-In</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Register;
