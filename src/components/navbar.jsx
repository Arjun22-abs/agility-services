import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <span className="brand-name">Agility Services</span>
        <span className="tagline">We Render Intelligence</span>
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/book-appointment">Book Appointment</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;