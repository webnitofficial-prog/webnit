import "./Hero.css";
import heroImage from "../assets/hero.png";

function Hero() {
  return (
    <section className="hero">
      {/* Left content */}
      <div className="hero-text">
        <h1>Don’t Have a Website? We’ll Build One for You.</h1>
        <p>Your business deserves to be online.</p>

        <div className="hero-buttons">
          <a href="#contact" className="btn primary">Get Your Website</a>
          <a href="https://wa.me/91XXXXXXXXXX" className="btn secondary">
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* Right image */}
      <div className="hero-image">
        <img src={heroImage} alt="Website design illustration" />
      </div>
    </section>
  );
}

export default Hero;
