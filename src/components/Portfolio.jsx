import { useEffect, useState } from "react";
import "./Portfolio.css";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Temporary dummy data (until backend is ready)
    const dummyProjects = [
      {
        id: 1,
        title: "E-Commerce Website",
        description: "Modern online store with responsive UI.",
        link: "#",
      },
      {
        id: 2,
        title: "Portfolio Website",
        description: "Clean and professional personal portfolio.",
        link: "#",
      },
      {
        id: 3,
        title: "Business Landing Page",
        description: "High-converting landing page for startup.",
        link: "#",
      },
    ];

    setProjects(dummyProjects);

    // 🔥 When backend is ready, replace above with:
    /*
    fetch("http://localhost:5000/api/projects")
      .then(res => res.json())
      .then(data => setProjects(data));
    */
  }, []);

  return (
    <section className="portfolio-section">
      <div className="portfolio-header">
        <h2>Our Portfolio</h2>
        <p>Some of the projects we have delivered.</p>
      </div>

      <div className="portfolio-grid">
        {projects.length === 0 ? (
          <p className="no-projects">No projects available yet.</p>
        ) : (
          projects.map((project) => (
            <div className="portfolio-card" key={project.id}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              )}
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Portfolio;
