import "./Coquitlam.css";

export default function CoquitlamProjects() {
  return (
    <section className="projects-location">
      <div className="container">
        {/* Header */}
        <header className="location-header">
          <h1>Projects in Coquitlam, British Columbia</h1>
          <p>
            Setsquare Construction offers tailored wood framing solutions to meet
            each project's distinct requirements, whether we're building vibrant
            community spaces or individual homes. Our commitment ensures
            top-tier craftsmanship and consistent structural integrity for every
            undertaking.
          </p>
        </header>

        {/* Project 1 */}
        <div className="location-project">
          <div className="location-image">
            <img src="/coquitlam-1.jpg" alt="Coquitlam Townhouse Living" />
          </div>

          <div className="location-content">
            <p className="location-breadcrumb">
              Burquitlam &gt; Coquitlam &gt; British Columbia
            </p>
            <h2>Coquitlam Townhouse Living</h2>
            <p>
              Setsquare Construction was honoured to serve as the chosen wood
              framers for Avana Townhomes at Cottonwood Park, a thoughtfully
              designed townhouse community developed by TATLA Developments at
              678 Fairview Street, Coquitlam. Completed in 2022, the project
              delivered 52 well-crafted residential units that contribute to a
              vibrant and growing neighbourhood.
            </p>

            <span className="read-more">Read more →</span>
          </div>
        </div>

        {/* Project 2 */}
        <div className="location-project reverse">
          <div className="location-image">
            <img src="/rosenberg-1.jpg" alt="1292 Rosenburg Townhouse Units" />
          </div>

          <div className="location-content">
            <p className="location-breadcrumb">
              Coquitlam &gt; British Columbia
            </p>
            <h2>1292 Rosenburg Townhouse Units</h2>
            <p>
              This exciting project is currently underway. Setsquare
              Construction is framing a full city block of new townhouse units
              in the heart of Coquitlam. Our team is actively bringing this
              large-scale residential development to life—stay tuned as progress
              continues.
            </p>

            <span className="read-more">Read more →</span>
          </div>
        </div>
      </div>
    </section>
  );
}
