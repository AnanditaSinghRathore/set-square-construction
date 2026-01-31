import { NavLink } from "react-router-dom";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Multi-Family Residential Framing",
    category: "Residential",
    image: "/projects/project-1.jpg",
    description:
      "Precision framing for multi-family developments across BC with safety and quality assurance."
  },
  {
    id: 2,
    title: "Commercial Complex",
    category: "Commercial",
    image: "/projects/project-2.jpg",
    description:
      "Structural framing for commercial projects ensuring timely delivery and robust construction."
  },
  {
    id: 3,
    title: "Custom Homes",
    category: "Custom Residential",
    image: "/projects/project-3.jpg",
    description:
      "Handcrafted framing for custom residential homes with a focus on quality and efficiency."
  },
  {
    id: 4,
    title: "Prefab On-Site Solutions",
    category: "Prefab",
    image: "/projects/project-4.jpg",
    description:
      "On-site prefabrication for reducing construction time and maintaining high quality standards."
  },
  {
    id: 5,
    title: "Mixed-Use Development",
    category: "Commercial",
    image: "/projects/project-5.jpg",
    description:
      "Mixed-use projects combining residential and commercial spaces with superior framing execution."
  },
  {
    id: 6,
    title: "Luxury Multi-Family",
    category: "Residential",
    image: "/projects/project-6.jpg",
    description:
      "High-end multi-family residential projects with precise structural framing."
  }
];

export default function Projects() {
  return (
    <section className="projects-page section">
      <div className="container">
        {/* Header */}
        <div className="projects-header">
          <span className="eyebrow">Projects</span>
          <h1 className="projects-title">Excellence in every frame</h1>
          <p className="projects-intro">
            Set-Square Construction delivers reliable framing solutions for
            residential and commercial developments throughout British Columbia.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-content">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <NavLink to={`/projects/${project.id}`} className="project-link">
                  Learn More →
                </NavLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
