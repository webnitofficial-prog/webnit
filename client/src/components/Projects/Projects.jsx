// import { useState } from "react";

// const Projects = () => {
//   const [projects, setProjects] = useState([]);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [link, setLink] = useState("");

//   const addProject = (e) => {
//     e.preventDefault();

//     if (!title || !description) return;

//     const newProject = {
//       id: Date.now(),
//       title,
//       description,
//       link,
//     };

//     setProjects([...projects, newProject]);
//     setTitle("");
//     setDescription("");
//     setLink("");
//   };

//   return (
//     <section className="projects-section">
//       <h2>My Projects</h2>

//       {/* Add Project Form */}
//       <form className="project-form" onSubmit={addProject}>
//         <input
//           type="text"
//           placeholder="Project Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />

//         <textarea
//           placeholder="Project Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />

//         <input
//           type="text"
//           placeholder="Project Link (optional)"
//           value={link}
//           onChange={(e) => setLink(e.target.value)}
//         />

//         <button type="submit">Add Project</button>
//       </form>

//       {/* Project List */}
//       <div className="projects-list">
//         {projects.map((project) => (
//           <div className="project-card" key={project.id}>
//             <h3>{project.title}</h3>
//             <p>{project.description}</p>
//             {project.link && (
//               <a href={project.link} target="_blank">View Project</a>
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;
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
    <section className="py-24 px-6 bg-gradient-to-b from-[#0f2027] to-[#0a192f]">
      
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400">
          My Projects
        </h2>
        <p className="text-gray-400 mt-4">
          Add and showcase your latest work.
        </p>
      </div>

      {/* Add Project Form */}
      <div className="max-w-3xl mx-auto mb-20 bg-[#111c2d] p-8 rounded-2xl border border-cyan-500/20 shadow-lg">
        <form onSubmit={addProject} className="space-y-6">

          <input
            type="text"
            placeholder="Project Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-[#0a192f] border border-cyan-500/30 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(34,211,238,0.5)]"
          />

          <textarea
            placeholder="Project Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            className="w-full px-4 py-3 rounded-lg bg-[#0a192f] border border-cyan-500/30 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(34,211,238,0.5)]"
          />

          <input
            type="text"
            placeholder="Project Link (optional)"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-[#0a192f] border border-cyan-500/30 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(34,211,238,0.5)]"
          />

          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-cyan-400 text-black font-semibold hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] transition duration-300"
          >
            Add Project
          </button>
        </form>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative bg-[#111c2d] rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400 transition duration-500 shadow-lg hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]"
          >
            <h3 className="text-xl font-bold text-cyan-400 mb-3">
              {project.title}
            </h3>

            <p className="text-gray-300 text-sm mb-4">
              {project.description}
            </p>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
