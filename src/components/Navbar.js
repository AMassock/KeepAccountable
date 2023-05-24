import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar-nav">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/bills">Bills</Link>
        </li>
        <li className="navbar-item">
          <Link to="/amendments">Amendments</Link>
        </li>
        <li className="navbar-item">
          <Link to="/congressMembers">Congress Members</Link>
        </li>
        <li className="navbar-item">
          <Link to="/senateMembers">Senate Members</Link>
        </li>
        <li className="navbar-item">
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
}
