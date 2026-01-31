import "./Footer.css";

export default function Footer() {
  return (
    <footer className="jll-footer">
      <div className="footer-container">

        {/* Top Grid */}
        <div className="footer-grid">

          <div className="footer-col">
            <h4>Set Square</h4>
            <p className="footer-desc">
              A professional construction company delivering reliable,
              sustainable, and high-quality infrastructure solutions.
            </p>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Residential Construction</a></li>
              <li><a href="#services">Commercial Projects</a></li>
              <li><a href="#services">Industrial Development</a></li>
              <li><a href="#services">Renovation & Fit-outs</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#insights">Insights</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>📍 India</li>
              <li>📞 +91 XXXXX XXXXX</li>
              <li>✉️ info@setsquare.com</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Set Square. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
