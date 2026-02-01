import { useState } from "react";
import { NavLink } from "react-router-dom";
import { projectsData } from "../../data/projectsData";
import "./Projects.css";

const locations = Object.keys(projectsData);

export default function Projects() {
  const [activeLocation, setActiveLocation] = useState("DELTA");

  return (
    <section className="projects-page">
      <div className="container">
        {/* Header */}
        <header className="projects-header">
          <span className="eyebrow">Projects</span>
          <h1>Excellence in every frame</h1>
          <p>
            Precision wood framing solutions delivered across British Columbia.
          </p>
        </header>

        {/* Location Tabs */}
        <div className="projects-tabs">
          {locations.map((location) => (
            <button
              key={location}
              className={`tab-btn ${
                activeLocation === location ? "active" : ""
              }`}
              onClick={() => setActiveLocation(location)}
            >
              {location}
            </button>
          ))}
        </div>

        {/* Projects List */}
        <div className="projects-list">
          {projectsData[activeLocation].map((project) => (
            <NavLink
              key={project.id}
              to={`/projects/delta`}
              className="project-row"
            >
              {/* Image */}
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              {/* Content */}
              <div className="project-content">
                <h2>{project.title}</h2>
                <p>{project.description}</p>

                <span className="project-link">
                  View projects in {activeLocation} <span>→</span>
                </span>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
}
