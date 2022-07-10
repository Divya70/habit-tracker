import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { HabitModal } from "../HabitModal/HabitModal";
const Navbar = () => {
  const [isModal, setIsModal] = useState(false);
  return (
    <div className="navbar-main-div">
      <Link to="/" className="site-name">
        <div>Habitracker</div>
      </Link>
      <div className="login-cont">
        <Link to="/signup" className="signup-div text-decoration">
          <div>Signup</div>
        </Link>
        <Link to="/login" className="login-div text-decoration">
          <div>Login</div>
        </Link>
        <div
          className="habit-div text-decoration"
          onClick={() => setIsModal(true)}
        >
          <div>
            <i className="fa-solid fa-plus"></i> Add Habits
          </div>
        </div>
        {isModal && <HabitModal openModal={(isModal) => setIsModal(isModal)} />}
      </div>
    </div>
  );
};

export { Navbar };
