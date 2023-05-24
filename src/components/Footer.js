import React from "react";

export default function Footer() {
  {
    /* Footer */
  }
  <div className="footer-container">
    <footer className="footer-footer">
      <p>
        &copy; {new Date().getFullYear()} KeepAccountable. All rights reserved.
      </p>
      <nav className="footer-nav">
        <ul className="footer-list">
          <li className="footer-item">
            <a href="/privacy" className="footer-link">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/terms" className="footer-link">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="/sitemap" className="footer-link">
              Sitemap
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  </div>;
}
