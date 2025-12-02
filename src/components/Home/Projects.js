import React from 'react';
import ProjectCard from '../Common/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Inventory Management System",
      description: "Complete inventory tracking and management solution",
      image: "/images/Make-Inventory-Control-Your-competitive-advantage_blog-image.jpg",
      liveLink: "https://inventory-management-steel-xi.vercel.app/login",
      tech: ["React", "Laravel", "phpMyAdmin"]
    },
    {
      title: "LessNever Main Website",
      description: "Corporate website with dashboard integration",
      image: "/images/Webapplication.jpg",
      liveLink: "https://less-never-main.vercel.app/",
      tech: ["React", "Bootstrap", "REST API"]
    },
    {
      title: "Garden Thai Spa",
      description: "Booking and management system for spa services",
      image: "/images/Carousel-Mandara_Spa_Couples-1440x620.jpg",
      liveLink: "https://garden-thai-spa.vercel.app/",
      tech: ["Next.js", "Firebase", "Stripe"]
    },
    {
      title: "LessNever AI Platform",
      description: "AI-powered business intelligence dashboard",
      image: "/images/AI.jpg",
      liveLink: "https://less-never-ai.vercel.app/",
      tech: ["React", "Python", "TensorFlow"]
    }
  ];

  return (
    <section className="projects-section py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Our Featured Projects</h2>
          <p className="text-muted">Check out some of our recent work</p>
        </div>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        <div className="text-center mt-5">
          <a href="/projects" className="btn btn-outline-primary btn-lg">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;