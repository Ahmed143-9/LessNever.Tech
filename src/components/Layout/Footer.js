import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <Link className="navbar-brand d-flex align-items-center mb-3" to="/">
              <img 
                src="/LessNever1.Tech.PNG" 
                alt="LessNever.Tech Logo" 
                height="40" 
                className="me-2"
              />
              LessNever.Tech
            </Link>
            <p className="text-light">
              Innovating digital solutions for businesses worldwide. 
              We transform ideas into powerful software.
            </p>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li className="mb-2"><Link to="/about" className="text-light text-decoration-none">About</Link></li>
              <li className="mb-2"><Link to="/services" className="text-light text-decoration-none">Services</Link></li>
              <li className="mb-2"><Link to="/projects" className="text-light text-decoration-none">Projects</Link></li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="mb-3">Contact Info</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="bi bi-envelope me-2"></i>
                info@lessnever.tech
              </li>
              <li className="mb-2">
                <i className="bi bi-telephone me-2"></i>
                +1 (123) 456-7890
              </li>
              <li className="mb-2">
                <i className="bi bi-geo-alt me-2"></i>
                Dhaka, Bangladesh
              </li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="mb-3">Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-light fs-4"><i className="bi bi-linkedin"></i></a>
              <a href="#" className="text-light fs-4"><i className="bi bi-github"></i></a>
              <a href="#" className="text-light fs-4"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-light fs-4"><i className="bi bi-facebook"></i></a>
            </div>
          </div>
        </div>
        
        <hr className="bg-light" />
        
        <div className="text-center pt-3">
          <p className="mb-0">
            &copy; {currentYear} LessNever.Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;