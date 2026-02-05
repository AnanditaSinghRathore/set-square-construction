import "./Granary.css";

export default function Granary() {
  return (
    <section className="project-detail">
      <div className="container">
        {/* Header */}
        <header className="project-header">
          <span className="eyebrow">Project</span>
          <h1>The Granary</h1>
          <p className="project-location">
            Tsawwassen / Boundary Bay, British Columbia
          </p>
        </header>

        {/* Section 1 */}
        <div className="project-block">
          <div className="project-image">
            <img src="/granary-task.jpg" alt="The Granary - The Task" />
          </div>

          <div className="project-text">
            <h2>The Task</h2>
            <span className="project-tag">Residential & Commercial Framing</span>
            <p>
              Setsquare Construction was proud to collaborate with BlueCity
              Construction on “The Granary,” a landmark mixed-use project in the
              Southlands community of Boundary Bay, Tsawwassen. As the appointed
              framing specialists, we contributed to bringing a visionary space
              to life—one that seamlessly integrates people, food, and farmland.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="project-block reverse">
          <div className="project-image">
            <img src="/granary-framing.jpg" alt="Framing It Up" />
          </div>

          <div className="project-text">
            <h2>Framing It Up</h2>
            <span className="project-tag">Residential & Commercial Framing</span>
            <p>
              Our scope included framing a one-level concrete parkade topped by
              three floors of precision wood-frame construction. Each level was
              engineered for strength, functionality, and generous private
              outdoor spaces—balancing structural integrity with architectural
              elegance.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="project-block">
          <div className="project-image">
            <img src="/granary-headway.jpg" alt="Making Headway" />
          </div>

          <div className="project-text">
            <h2>Making Headway</h2>
            <span className="project-tag">Residential & Commercial Framing</span>
            <p>
              As construction progressed, Setsquare’s framing expertise played a
              key role in shaping a structure that not only stood strong but also
              fostered a sense of community—becoming a defining feature within
              the Southlands Tsawwassen development.
            </p>
          </div>
        </div>

        {/* Section 4 */}
        <div className="project-block reverse">
          <div className="project-image">
            <img src="/granary-completion.jpg" alt="Project Completion" />
          </div>

          <div className="project-text">
            <h2>Completion</h2>
            <span className="project-tag">Residential & Commercial Framing</span>
            <p>
              The completed Granary features a ground-floor Four Winds Restaurant
              & Brewery, with 35 residential units above—each offering private
              outdoor space. Setsquare’s framing helped transform Market Avenue
              into a vibrant social and recreational hub at the heart of the
              Southlands Market Square.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
