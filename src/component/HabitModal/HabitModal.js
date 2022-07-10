import React from "react";
import "./habitmodal.css";
const HabitModal = (props) => {
  return (
    <div className="habitmodal-brand-cont">
      <div className="habitmodal-sec">
        <div className="modal-heading">New Habit</div>
        <div className="habit-name">
          <span>Name</span>
          <input type="text" placeholder="Achiver" name="name" />
        </div>
        <div className="habit-name">
          <span>Goal Start</span>
          <input type="date" placeholder="14-04-2022" name="date" />
        </div>
        <div className="habit-name">
          <span>Reminder</span>
          <input type="text" placeholder="You can do it" name="reminder" />
        </div>

        <div className="modal-btn-sec">
          <button onClick={() => props.openModal(false)}>Cancel</button>
          <button>Save</button>
        </div>
      </div>
    </div>
  );
};

export { HabitModal };
