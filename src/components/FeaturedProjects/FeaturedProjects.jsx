import { useState } from "react";
import { Link } from "react-router-dom";
import "./FeaturedProjects.css";

const projects = [
  {
    image: "/project-1.jpg",
    title: "Surrey Multi-Family Development",
    description:
      "A large-scale residential framing project delivering precision-built multi-family housing with safety and efficiency at its core.",
    link: "/projects/surrey",
  },
  {
    image: "/project-2.jpg",
    title: "Vancouver Residential Complex",
    description:
      "Premium wood framing solutions for a modern residential complex designed to meet demanding timelines.",
    link: "/projects/vancouver",
  },
  {
    image: "/project-3.jpg",
    title: "Burnaby Mixed-Use Project",
    description:
      "Structural framing excellence for a mixed-use development combining residential and commercial spaces.",
    link: "/projects/burnaby",
  },
];

export default function FeaturedProjects() {
  const [index, setIndex] = useState(0);

  const nextProject = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[index];

  return (
    <section className="featured">
      {/* Header */}
      <div className="featured-header">
        <h2>Featured Projects</h2>

        <div className="featured-arrows">
          <button onClick={prevProject} aria-label="Previous project">
            ←
          </button>
          <button onClick={nextProject} aria-label="Next project">
            →
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="featured-content">
        {/* Image */}
        <div className="featured-image">
          <img src={project.image} alt={project.title} />
        </div>

        {/* Text */}
        <div className="featured-text">
          <h3>{project.title}</h3>
          <p>{project.description}</p>

          <Link to={project.link} className="featured-link">
            View Project →
          </Link>
        </div>
      </div>
    </section>
  );
}
