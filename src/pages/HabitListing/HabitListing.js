import React from "react";
import "./habitlisting.css";
import { Sidebar } from "../../component/Sidebar/Sidebar";
import { Navbar } from "../../component/Navbar/Navbar";
import { HabitCard } from "../../component/Cards/HabitCard";
const HabitListing = () => {
  return (
    <>
      <Navbar />
      <div className="habit-cont">
        <Sidebar />
        <div className="habit-listing-cont">
          <HabitCard />
          <div className="habit-sec">No Habits Yet , Please Add New Habits</div>
        </div>
      </div>
    </>
  );
};

export { HabitListing };
