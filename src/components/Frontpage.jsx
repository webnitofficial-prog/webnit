import "./Frontpage.css";

function Frontpage() {
  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="navbar-logo">
        <img src="/logo.png" alt="Business Logo" />
        <span>MyBusiness</span>
      </div>

      {/* Right: Menu */}
      <ul className="navbar-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Frontpage;
