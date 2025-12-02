import React from 'react';
import ProjectCard from '../Common/ProjectCard';

const ProjectsPage = () => {
  const allProjects = [
    {
      title: "Inventory Management System",
      description: "Complete inventory tracking and management solution",
      image: "/images/Make-Inventory-Control-Your-competitive-advantage_blog-image.jpg",
      liveLink: "https://inventory-management-steel-xi.vercel.app/login",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      category: "Web Application"
    },
    {
      title: "Service Center",
      description: "Corporate website with dashboard integration",
      image: "/images/Webapplication.jpg",
      liveLink: "https://less-never-main.vercel.app/",
      tech: ["React", "Bootstrap", "REST API", "Firebase"],
      category: "Website"
    },
    {
      title: "Spa Center Booking System",
      description: "Booking and management system for spa services",
      image: "/images/Carousel-Mandara_Spa_Couples-1440x620.jpg",
      liveLink: "https://vercel.com/kawser-ahmeds-projects-e53da51b/garden-thai-spa",
      tech: ["Next.js", "Firebase", "Stripe", "Tailwind"],
      category: "Booking System"
    },
    {
      title: "AI Platform",
      description: "AI-powered business intelligence dashboard",
      image: "/images/AI.jpg",
      liveLink: "https://vercel.com/kawser-ahmeds-projects-e53da51b/less-never-ai",
      tech: ["React", "Python", "TensorFlow", "FastAPI"],
      category: "AI Platform"
    },
    {
      title: "Tech Store",
      description: "Online retail platform with admin dashboard",
      image: "/images/techstore.jpg",
      liveLink: "https://less-never-tech.vercel.app/",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "E-commerce"
    },
    {
      title: "Real-time Chat App",
      description: "Instant messaging application with video calling",
      image: "/images/Realtime_chat.png",
      liveLink: "#",
      tech: ["React", "Socket.io", "WebRTC", "MongoDB"],
      category: "Communication"
    }
  ];

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">Our Portfolio</h1>
        <p className="lead text-muted">Explore our recent projects and success stories</p>
      </div>
      <div className="row g-4">
        {allProjects.map((project, index) => (
          <div key={index} className="col-lg-4 col-md-6">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;