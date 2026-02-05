import "./Granary.css"; 

export default function BoundaryBay() {
  return (
    <section className="project-detail">
      <div className="container">
        {/* Header */}
        <header className="project-header">
          <span className="eyebrow">Project</span>
          <h1>Boundary Bay Residential Framing</h1>
          <p className="project-location">
            Delta / Boundary Bay Beach, British Columbia
          </p>
        </header>

        {/* Section 1 */}
        <div className="project-block">
          <div className="project-image">
            <img src="/boundary-task.jpg" alt="Boundary Bay - The Task" />
          </div>

          <div className="project-text">
            <h2>The Task</h2>
            <span className="project-tag">Residential Home Wood Framing</span>
            <p>
              Setsquare Construction proudly collaborated with New Vision Projects
              on a custom single-family residential home in the Boundary Bay Beach
              neighbourhood of Delta. This project reflects collaborative
              craftsmanship and thoughtful residential framing tailored for
              coastal living.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="project-block reverse">
          <div className="project-image">
            <img src="/boundary-framing.jpg" alt="Framing It Up" />
          </div>

          <div className="project-text">
            <h2>Framing It Up</h2>
            <span className="project-tag">Residential Home Wood Framing</span>
            <p>
              Our scope included precision residential wood framing, executed
              with attention to structural accuracy, durability, and seamless
              integration with the architectural vision of the home.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="project-block">
          <div className="project-image">
            <img src="/boundary-headway.jpg" alt="Making Headway" />
          </div>

          <div className="project-text">
            <h2>Making Headway</h2>
            <span className="project-tag">Residential Home Wood Framing</span>
            <p>
              As construction progressed, Setsquare’s framing expertise helped
              shape a refined residential structure that balances strength,
              comfort, and coastal aesthetics.
            </p>
          </div>
        </div>

        {/* Section 4 */}
        <div className="project-block reverse">
          <div className="project-image">
            <img src="/boundary-completion.jpg" alt="Project Completion" />
          </div>

          <div className="project-text">
            <h2>Completion</h2>
            <span className="project-tag">Residential Home Wood Framing</span>
            <p>
              The completed Boundary Bay residence stands as a testament to
              Setsquare Construction’s commitment to precision framing and
              enduring craftsmanship. We were honoured to contribute to a home
              designed for relaxed coastal living in sunny Tsawwassen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
