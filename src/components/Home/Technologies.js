import React from 'react';

const Technologies = () => {
  const technologies = [
    { name: "React", icon: "bi-react" },
    { name: "Node.js", icon: "bi-nodejs" },
    { name: "MongoDB", icon: "bi-database" },
    { name: "Python", icon: "bi-code-slash" },
    { name: "JavaScript", icon: "bi-filetype-js" },
    { name: "Bootstrap", icon: "bi-bootstrap" },
    { name: "Firebase", icon: "bi-cloud" },
    { name: "Git", icon: "bi-git" }
  ];

  return (
    <section className="technologies-section py-5 bg-dark text-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Technologies We Use</h2>
          <p className="text-light">Modern tools and frameworks for exceptional results</p>
        </div>
        <div className="row g-4">
          {technologies.map((tech, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-6">
              <div className="text-center p-4 bg-light text-dark rounded shadow-sm">
                <i className={`bi ${tech.icon} display-4 mb-3`}></i>
                <h5>{tech.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;