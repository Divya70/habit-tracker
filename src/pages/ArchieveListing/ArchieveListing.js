import React from "react";
import "./archievelisting.css";
import { Navbar } from "../../component/Navbar/Navbar";
import { Sidebar } from "../../component/Sidebar/Sidebar";
import { ArchiveCard } from "../../component/Cards/ArchiveCard";
const ArchieveListing = () => {
  return (
    <>
      <Navbar />
      <div className="archive-cont">
        <Sidebar />
        <div className="archive-listing-cont">
          <ArchiveCard />
          <div className="archive-sec">No Habits in Archive Yet.</div>
        </div>
      </div>
    </>
  );
};

export { ArchieveListing };
