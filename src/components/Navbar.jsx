import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">WebCompany</div>

      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>

      <button className="nav-btn">Hire Me</button>
    </nav>
  );
}

export default Navbar;
