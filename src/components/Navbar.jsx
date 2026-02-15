import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">


      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li onClick={() => setMenuOpen(false)}>Home</li>
        <li onClick={() => setMenuOpen(false)}>About</li>
        <li onClick={() => setMenuOpen(false)}>Services</li>
        <li onClick={() => setMenuOpen(false)}>Portfolio</li>
        <li onClick={() => setMenuOpen(false)}>Contact</li>
      </ul>

      <button className="nav-btn">Hire Me</button>

      {/* Hamburger */}
      <div
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

    </nav>
  );
}

export default Navbar;
