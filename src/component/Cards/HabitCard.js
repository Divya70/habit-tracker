import React from "react";
import "../Cards/css/habitcard.css";
import { LineChart, Line } from "recharts";
const HabitCard = () => {
  return (
    <>
      <div className="habitcard-brand-cont">
        <div className="habit-card-sec">
          <div className="card-profile">
            <img
              src="https://c.tenor.com/ZxaSEXL0wB4AAAAM/cartoon-monkey.gif"
              alt="profile"
            />
          </div>
          <div className="card-user-name">
            <span>Name</span>
            <span>Date</span>
          </div>
          <div className="card-btn-sec">
            <button>Add to Archieve</button>
            <button>Delete</button>
            <button>Edit</button>
            <button>Done</button>
          </div>
        </div>
        <div className="stats-cont">
          <div className="pomodoro">
            <div className="pomodoro-timer">
              <span>Days</span>:<span>Hours</span>:<span>Minuts</span>:
              <span>Seconds</span>
            </div>
            <p>running</p>
            <button>Start</button>
            <button>Pause</button>
            <button>Reset</button>
          </div>
          <span>STAT : </span>
          <LineChart width={300} height={100} style={{ zIndex: "-2" }}>
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              strokeWidth={2}
            />
          </LineChart>
        </div>
      </div>
    </>
  );
};

export { HabitCard };
