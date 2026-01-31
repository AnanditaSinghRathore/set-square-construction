import "./spotlight.css";

export default function Spotlight() {
  return (
    <section className="spotlight">
      <div className="spotlight-container">
        {/* LEFT CONTENT */}
        <div className="spotlight-left">
          <span className="spotlight-label">Latest Work</span>

          <h2 className="spotlight-title">
            Excellence in <br /> Every Frame
          </h2>

          <p className="spotlight-text">
            From residential to large-scale multi-family projects, Set-Square
            Construction delivers precision framing solutions built on safety,
            experience, and trust across British Columbia.
          </p>
        </div>

        {/* RIGHT STATS */}
        <div className="spotlight-right">
          <div className="spotlight-card">
            <div className="spotlight-line"></div>
            <h3>15+ Years</h3>
            <p>Experience in the fiels</p>
            <span className="spotlight-arrow">↓</span>
          </div>

          <div className="spotlight-card">
            <div className="spotlight-line"></div>
            <h3>200+ Projects</h3>
            <p>Delivered successfully</p>
            <span className="spotlight-arrow">↓</span>
          </div>

          <div className="spotlight-card">
            <div className="spotlight-line"></div>
            <h3>100% Safety</h3>
            <p>Record on all sites</p>
            <span className="spotlight-arrow">↓</span>
          </div>

          <div className="spotlight-card">
            <div className="spotlight-line"></div>
            <h3>Pro Solutions</h3>
            <p>For Complex framing</p>
            <span className="spotlight-arrow">↓</span>
          </div>
        </div>
      </div>
    </section>
  );
}
