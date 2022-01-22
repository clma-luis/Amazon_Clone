import React from "react";
import { Link } from "react-router-dom";
import usaflag from "../../template/images/usa-flag.png";
import "./SubMenuL.scss";

const SubMenuL = () => {
  return (
    <div className="subMenuL ">
      <div className="subMenu__list">
        <div className="subMenu__item">
          <span className="changeLenguage">Change language</span>
          <Link className="learnMore" to="#">
            <span>Learn more</span>
          </Link>
        </div>
        <div className="subMenu__lenguages ">
          <div className="subMenu__lenguages-items active">
            <input type="radio" id="en" name="english" value="en" checked />
            <label for="en">English - EN</label>
          </div>

          <div className="subMenu__lenguages-items">
            <input type="radio" id="es" name="espanish" value="es" />
            <label for="es">Español - ES</label>
          </div>

          <div className="subMenu__lenguages-items">
            <input type="radio" id="es" name="espanish" value="es" />
            <label for="es">简体中文 - ZH</label>
          </div>

          <div className="subMenu__lenguages-items">
            <input type="radio" id="es" name="espanish" value="es" />
            <label for="es">Deutsch - DE</label>
          </div>

          <div className="subMenu__lenguages-items">
            <input type="radio" id="es" name="espanish" value="es" />
            <label for="es">Português - PT</label>
          </div>

          <div className="subMenu__lenguages-items">
            <input type="radio" id="es" name="espanish" value="es" />
            <label for="es">繁體中文 - ZH</label>
          </div>

          <div className="subMenu__lenguages-items">
            <input type="radio" id="es" name="espanish" value="es" />
            <label for="es">한국어 - KO</label>
          </div>

          <div className="subMenu__lenguages-items">
            <input type="radio" id="es" name="espanish" value="es" />
            <label for="es">עברית - HE</label>
          </div>

          <div className="subMenu__lenguages-items">
            <input type="radio" id="es" name="espanish" value="es" />
            <label for="es">العربية - AR</label>
          </div>
        </div>

        <div className="subMenu__item active1">
          <span className="changeLenguage">Change currency</span>
          <Link className="learnMore" to="#">
            <span>Learn more</span>
          </Link>
        </div>

        <div className="subMenu__item active2">
          <span className="changeLenguage">$ - USD - US Dollar</span>
          <Link className="learnMore" to="#">
            <span>Change</span>
          </Link>
        </div>

        <div className="subMenu__item active3">
          <span>
            {" "}
            <i>
              <img className="usa-flag" src={usaflag} alt="usa-flag" />
            </i>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; You are
            shopping on <br />
            Amazon.com
          </span>
        </div>

        <div className="subMenu__item active4">
          <Link className="change-country" to="#">
            <span>Change country/region.</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubMenuL;
