import React, { useEffect, useRef } from "react";
import "./Hero.css";
import logo from "../assets/unnamed.jpg";

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const elements = heroRef.current.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach(el => observer.observe(el));
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-left">

        <h2 className="reveal delay-1">We Build Modern Websites</h2>

        <p className="reveal delay-2">
          High-performance web solutions designed to help your business
          grow online with speed, security, and scalability.
        </p>

        <div className="hero-buttons reveal delay-3">
          <button className="primary-btn">View Our Work</button>
          <button className="secondary-btn">Get Started</button>
        </div>
      </div>

      <div className="hero-right reveal delay-4">
        <div className="logo-box">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
