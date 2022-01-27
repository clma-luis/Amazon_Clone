import React from "react";
import { Link } from "react-router-dom";
import "./InformationPost.scss";

const InformationPost = () => {
  return (
    <div className="InformationPost">
      
        <div className="box">
          <h1>Sign in for the best experience</h1>
          <Link className="isActive" to="/">
              <button>Sign in securely</button>
          </Link>
          
        </div>

        <Link className="isActive" to="/">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg"
          alt=""
        />
        </Link>
        
      
    </div>
  );
};

export default InformationPost;
