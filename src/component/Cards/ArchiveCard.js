import React from "react";
import "../Cards/css/habitcard.css";
const ArchiveCard = () => {
  return (
    <>
      <div className="habit-card-sec">
        <div className="card-profile">
          <img
            src="https://c.tenor.com/ZxaSEXL0wB4AAAAM/cartoon-monkey.gif"
            alt="profile"
          />
        </div>
        <div className="card-user-name">
          <span>Name</span>
          <span>Goal</span>
        </div>
        <div className="card-btn-sec">
          <button>Delete</button>
          <button>Restore</button>
        </div>
      </div>
    </>
  );
};

export { ArchiveCard };
