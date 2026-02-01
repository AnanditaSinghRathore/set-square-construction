import { useParams } from "react-router-dom";
import { projectsData } from "../../data/projectsData";

export default function ProjectDetails() {
  const { id } = useParams();

  const allProjects = Object.values(projectsData).flat();
  const project = allProjects.find((p) => p.id === id);

  if (!project) return <p>Project not found</p>;

  return (
    <section className="project-detail container">
      <h1>{project.title}</h1>
      <img src={project.image} alt={project.title} />
      <p>{project.description}</p>
    </section>
  );
}
