import React from "react";

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
        </section>

        <section className="govinfo-section">
          <h2>Latest Updates</h2>
          {/* Display latest updates */}
        </section>
      </div>

      {/* Footer */}
      <footer className="govinfo-footer">
        <p>
          &copy; {new Date().getFullYear()} KeepAccountable. All rights
          reserved.
        </p>
        <nav className="govinfo-footer-nav">
          <ul>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms">Terms of Service</a>
            </li>
            <li>
              <a href="/sitemap">Sitemap</a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}
