import React from "react";
import { Bills } from "../pages/index";

export default function Home() {
  return (
    <div className="govinfo-container">
      {/* Main Content */}
      <div className="govinfo-content">
        {/* Search Bar */}
        <div className="govinfo-search-bar">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>

        {/* Content Sections */}
        <section className="govinfo-section">
          <h2>Featured Documents</h2>
          {/* Display featured documents */}
          <Bills limit="5" />
        </section>

        <section className="govinfo-section">
          <h2>Latest Updates</h2>
          {/* Display latest updates */}
        </section>
      </div>
    </div>
  );
}
