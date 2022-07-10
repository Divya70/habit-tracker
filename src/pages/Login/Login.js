import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { Navbar } from "../../component/Navbar/Navbar";
const Login = () => {
  return (
    <>
      <div className="login-main-cont">
        <Navbar />
        <div className="center-login-cont">
          <div className="login-wrapper">LOGIN</div>
          <div className="input-fields">
            <input type="text" placeholder="Enter Your Email" />
            <input type="password" placeholder="Enter Password" />
          </div>
          <div className="btn-cont">
            <Link to="/habitlisting" className="login-btn">
              <button>Login With Test Credential</button>
            </Link>
            <Link to="/habitlisting" className="login-btn">
              <button className="btn">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export { Login };
