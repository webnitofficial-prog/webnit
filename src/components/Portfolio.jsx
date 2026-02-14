import { useEffect, useState, useRef } from "react";
import "./Portfolio.css";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const dummyProjects = [
      { id: 1, title: "E-Commerce Website", description: "Modern online store with responsive UI.", link: "#" },
      { id: 2, title: "Portfolio Website", description: "Clean and professional personal portfolio.", link: "#" },
      { id: 3, title: "Business Landing Page", description: "High-converting landing page for startup.", link: "#" }
    ];

    setProjects(dummyProjects);
  }, []);

  /* reveal animation */
  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, { threshold: 0.15 });

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [projects]);

  return (
    <section className="portfolio-section" ref={sectionRef}>
      <div className="portfolio-header">
        <h2 className="reveal delay-1">Our Portfolio</h2>
        <p className="reveal delay-2">Some of the projects we have delivered.</p>
      </div>

      <div className="portfolio-grid">
        {projects.length === 0 ? (
          <p>No projects available yet.</p>
        ) : (
          projects.map((project, index) => (
            <div className={`portfolio-card reveal delay-${index + 1}`} key={project.id}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
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
