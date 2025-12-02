import React from 'react';
import { Link } from 'react-router-dom';

const ContactCTA = () => {
  return (
    <section className="contact-cta py-5 bg-primary text-white">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <h2 className="display-5 fw-bold mb-4">Ready to Start Your Project?</h2>
            <p className="lead mb-5">
              Let's discuss your ideas and create something amazing together. 
              Contact us today for a free consultation.
            </p>
            <Link to="/contact" className="btn btn-light btn-lg px-5 py-3">
              Get Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;