import React from 'react';

const AboutPage = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <img 
            src="/images/pexels-wendywei-1555900.jpg" 
            alt="About LessNever.Tech" 
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-4 fw-bold mb-4">About LessNever.Tech</h1>
          <p className="lead mb-4">
            We are a team of passionate developers, designers, and technology enthusiasts 
            dedicated to building innovative digital solutions.
          </p>
          <p className="mb-4">
            Founded in 2023, LessNever.Tech has been helping businesses transform their 
            digital presence with cutting-edge web and mobile applications.
          </p>
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="card border-0 bg-light">
                <div className="card-body">
                  <h5 className="card-title">50+</h5>
                  <p className="card-text">Projects Completed</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="card border-0 bg-light">
                <div className="card-body">
                  <h5 className="card-title">15+</h5>
                  <p className="card-text">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;