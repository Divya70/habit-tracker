import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import { Navbar } from "../../component/Navbar/Navbar";
const Signup = () => {
  return (
    <>
      <div className="signup-main-cont">
        <Navbar />
        <div className="center-signup-cont">
          <div className="signup-wrapper">SIGN UP</div>
          <div className="input-fields">
            <input type="text" placeholder="Enter Your Email" />
            <input type="password" placeholder="Enter Password" />
            <input type="password" placeholder="Enter Confirm Password" />
          </div>
          <div className="btn-cont">
            <Link to="/signup" className="login-btn">
              <button className="btn">Create Account</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export { Signup };
