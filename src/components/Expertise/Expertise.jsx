import { Link } from "react-router-dom";
import "./Expertise.css";

export default function Expertise() {
  return (
    <section className="expertise">
      {/* Section Heading */}
      <div className="expertise-header">
        <h2>Our Expertise</h2>
      </div>

      {/* Block 1 */}
      <div className="expertise-row">
        <div className="expertise-image">
          <img src="/expertise-1.jpg" alt="Large Scale Construction" />
        </div>

        <div className="expertise-content fade-in">
          <h3>Large Scale Construction</h3>
          <p>
            We deliver high-quality framing solutions for large-scale residential
            and commercial developments, ensuring precision, safety, and
            efficiency at every stage.
          </p>

          <Link to="/services/multi-family" className="expertise-btn">
            View Multi-Family Solutions →
          </Link>
        </div>
      </div>

      {/* Block 2 (Reverse) */}
      <div className="expertise-row reverse">
        <div className="expertise-image">
          <img src="/expertise-2.jpg" alt="Multi-Family Residential" />
        </div>

        <div className="expertise-content fade-in">
          <h3>Multi-Family Residential</h3>
          <p>
            Our team specializes in efficient wood framing for multi-family
            housing projects, balancing speed, durability, and architectural
            accuracy.
          </p>

          <Link to="/services/multi-family" className="expertise-btn">
            View Multi-Family Solutions →
          </Link>
        </div>
      </div>

      {/* Block 3 */}
      <div className="expertise-row">
        <div className="expertise-image">
          <img src="/expertise-3.jpg" alt="Timber & Structural Framing" />
        </div>

        <div className="expertise-content fade-in">
          <h3>Timber & Structural Framing</h3>
          <p>
            From complex timber structures to precision framing, we bring
            craftsmanship and engineering together for long-lasting results.
          </p>

          <Link to="/services/multi-family" className="expertise-btn">
            View Multi-Family Solutions →
          </Link>
        </div>
      </div>
    </section>
  );
}
