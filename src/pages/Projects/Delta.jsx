import "./Delta.css";

export default function DeltaProjects() {
  return (
    <section className="projects-location">
      <div className="container">
        {/* Header */}
        <header className="location-header">
          <h1>Projects in Delta, British Columbia</h1>
          <p>
            Whether we're enhancing community spaces or constructing individual
            homes, Setsquare Construction provides customized wood framing
            solutions for each project's unique needs. Our work ensures reliable
            structures and exceptional craftsmanship every time. Here are a
            couple of our Delta projects.
          </p>
        </header>

        {/* Project 1 */}
        <div className="location-project">
          <div className="location-image">
            <img src="/delta-granary.jpg" alt="The Granary" />
          </div>

          <div className="location-content">
            <p className="location-breadcrumb">
              Tsawwassen &gt; Delta &gt; British Columbia
            </p>
            <h2>Farm to Kitchen – The Granary</h2>
            <p>
              Setsquare Construction wood framed The Granary—Southlands' vibrant
              hub—integrating a concrete parkade, precision wood-framed floors,
              and a ground-floor Four Winds Restaurant & Brewery. Above, 35
              residences with private outdoor spaces complete this thoughtfully
              crafted community centerpiece.
            </p>

            <span className="read-more">Read more →</span>
          </div>
        </div>

        {/* Project 2 */}
        <div className="location-project">
          

          <div className="location-content">
            <p className="location-breadcrumb">
              Boundary Beach &gt; Delta &gt; British Columbia
            </p>
            <h2>Boundary Beach Family Home</h2>
            <p>
              Setsquare Construction framed a standout single-family residence in
              Boundary Beach, Delta. This project reflects our expertise in
              residential wood framing—delivering structural integrity,
              architectural precision, and long-term durability tailored to
              coastal living.
            </p>

            <span className="read-more">Read more →</span>
          </div>
          <div className="location-image">
            <img src="/delta-boundary.jpg" alt="Boundary Beach Home" />
          </div>
        </div>
      </div>
    </section>
  );
}
