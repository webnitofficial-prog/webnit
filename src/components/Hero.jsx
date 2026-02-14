import React from "react";
import "./Hero.css";
import logo from "../assets/unnamed.jpg"; 
// replace path with your actual logo file location

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
     

        <h2>We Build Modern Websites</h2>

        <p>
          High-performance web solutions designed to help your business
          grow online with speed, security, and scalability.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">View Our Work</button>
          <button className="secondary-btn">Get Started</button>
        </div>
      </div>
<div className="hero-right">
  <div className="logo-box">
    <img src={logo} alt="unnamed.jpg" />
  </div>
</div>

    </section>
  );
}

export default Hero;
