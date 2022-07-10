import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <div className="sidebar-brand-cont">
        <div className="sidebar-gif">
          <img
            src="https://i.pinimg.com/originals/33/6b/a2/336ba227b99cac98bdc63718e8cb881a.gif"
            alt="hii"
          />
          <span className="climber-heading">Climber</span>
        </div>
        <div className="sidebar-cont">
          <Link to="/habitlisting" className="display-flex">
            <i className="fa-solid fa-briefcase"></i>
            <div>All habits</div>
          </Link>
          <Link to="/archievelisting" className="display-flex">
            <i className="fa-solid fa-box-archive"></i>
            <div>Archieved</div>
          </Link>
          <Link to="/" className="display-flex">
            <i className="fa-solid fa-right-from-bracket"></i>
            <div>Logout</div>
          </Link>
        </div>
        <div className="motivatinal-quotes">
          <p>"Keep Doing Hard Work"</p>
        </div>
      </div>
    </>
  );
};

export { Sidebar };
