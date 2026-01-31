import { NavLink } from "react-router-dom";
import "./Header.css"


export default function Header() {
  return (
    <header className="header sticky top-0 z-50 bg-cream">
      {/* ───────── TOP HEADER WRAPPER ───────── */}
      <div className="header-wrapper">
        {/* Left: Logo + Text */}
        <div className="header-brand">
          <img src="/logo.jpg" alt="Set Square Logo" className="logo" />
          <span className="brand-text">
            Precision Framing Experts
          </span>
        </div>

        {/* Right: Contact + CTA */}
        <div className="header-actions">
          <a href="tel:+919999999999" className="contact-number">
  <span className="phone-icon" aria-hidden="true">
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 16.92V21a2 2 0 0 1-2.18 2
           19.79 19.79 0 0 1-8.63-3.07
           19.5 19.5 0 0 1-6-6
           19.79 19.79 0 0 1-3.07-8.67
           A2 2 0 0 1 4 2h4.09
           a2 2 0 0 1 2 1.72
           c.12.81.3 1.6.54 2.36
           a2 2 0 0 1-.45 2L8.09 9.91
           a16 16 0 0 0 6 6
           l1.83-1.83
           a2 2 0 0 1 2-.45
           c.76.24 1.55.42 2.36.54
           a2 2 0 0 1 1.72 2.02Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>

  <span>604-832-7008</span>
</a>


          <a href="/contact" className="btn-quote">
            Get a Quote
          </a>
        </div>
      </div>

      {/* ───────── NAVBAR ───────── */}
      <nav className="header-navbar">
        {/* Left Nav */}
        <ul className="nav-left">
          <li>
            <NavLink to="/projects" className="nav-link">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className="nav-link">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/multi-family-residential" className="nav-link">
              Multi-Family
            </NavLink>
          </li>
          <li>
            <NavLink to="/residential" className="nav-link">
              Residential
            </NavLink>
          </li>
          <li>
            <NavLink to="/timber" className="nav-link">
              Timber
            </NavLink>
          </li>
        </ul>

        {/* Right Nav */}
        <ul className="nav-right">
          <li>
            <NavLink to="/why-us" className="nav-link">
              Why Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery" className="nav-link">
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link nav-highlight">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
