import "./stack.css";

export default function StackRow() {
  const tech = [
    { name: "MongoDB", class: "mongo" },
    { name: "Express", class: "express" },
    { name: "React", class: "react" },
    { name: "Node", class: "node" },
    { name: "JavaScript", class: "js" }
  ];

  return (
    <section className="stack-section">
      <h2 className="stack-title">MERN STACK</h2>

      <div className="stack-row">
        {tech.map((item, i) => (
          <div key={i} className="stack-card">

            {item.class === "react" ? (
              <div className="logo react">
                <div className="react-ring"></div>
              </div>
            ) : (
              <div className={`logo ${item.class}`}>
                {item.class === "js" && <span>JS</span>}
                {item.class === "express" && <span>EX</span>}
              </div>
            )}

            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
