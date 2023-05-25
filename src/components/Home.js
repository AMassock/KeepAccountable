import React from "react";
import Featured from "./Featured";
import "./styles/Home.css";

export default function Home() {
  return (
    <div className="home-container">
      {/* Main Content */}
      <div className="home-content">
        {/* Search Bar */}
        <div className="home-search-bar">
          <input type="text" placeholder="Search..." />
          <button className="home-button">Search</button>
        </div>

        {/* Content Sections */}
        <section className="home-section">
          <h2 className="home-featured">Featured Documents</h2>
          {/* Display featured documents */}
          <Featured />
        </section>

        <section className="home-section">
          <h2 className="home-update">Latest Updates</h2>
          {/* Display latest updates */}
        </section>
      </div>
    </div>
  );
}
