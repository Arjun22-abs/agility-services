import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      
      {/* CLICKABLE LOGO */}
      <Link to="/" className="logo">
        <h2>Agility Services</h2>
        <p>We Render Intelligence</p>
      </Link>

      {/* NAVIGATION LINKS */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/bookappointment">Book Appointment</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;