import { useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");

  const addProject = (e) => {
    e.preventDefault();

    if (!title || !description) return;

    const newProject = {
      id: Date.now(),
      title,
      description,
      link,
    };

    setProjects([...projects, newProject]);
    setTitle("");
    setDescription("");
    setLink("");
  };

  return (
    <section className="projects-section">
      <h2>My Projects</h2>

      {/* Add Project Form */}
      <form className="project-form" onSubmit={addProject}>
        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Project Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="text"
          placeholder="Project Link (optional)"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />

        <button type="submit">Add Project</button>
      </form>

      {/* Project List */}
      <div className="projects-list">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.link && (
              <a href={project.link} target="_blank">View Project</a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
