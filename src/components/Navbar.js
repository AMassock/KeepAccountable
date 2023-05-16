import React from "react";
import { Link, Route, Routes } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/bills">Bills</Link>
        </li>
        <li>
          <Link to="/amendments">Amendments</Link>
        </li>
        <li>
          <Link to="/congressMembers">Congress Members</Link>
        </li>
        <li>
          <Link to="/senateMembers">Senate Members</Link>
        </li>
      </ul>
    </nav>
  );
}
