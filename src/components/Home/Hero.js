import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section 
      className="hero-section py-5 text-white position-relative"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), 
                    url('/images/pexels-donaldtong94-23475.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold mb-4">
              Innovating Your Digital Future
            </h1>
            <p className="lead mb-4">
              LessNever.Tech delivers cutting-edge software solutions, web applications, 
              and digital transformation services tailored to your business needs.
            </p>
            <div className="d-flex gap-3">
              <Link to="/contact" className="btn btn-primary btn-lg px-4">
                Get Started
              </Link>
              <Link to="/projects" className="btn btn-outline-light btn-lg px-4">
                View Projects
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <img 
              src="/images/ales-nesetril-Im7lZjxeLhg-unsplash.jpg" 
              alt="Technology Innovation" 
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;