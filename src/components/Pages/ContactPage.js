import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <h1 className="display-4 fw-bold mb-4">Get in Touch</h1>
          <p className="lead mb-4">
            Have a project in mind? Let's discuss how we can help you achieve your goals.
          </p>
          
          <div className="mb-4">
            <h5 className="fw-bold mb-3">Contact Information</h5>
            <div className="d-flex align-items-center mb-3">
              <i className="bi bi-envelope fs-4 text-primary me-3"></i>
              <span>info@lessnever.tech</span>
            </div>
            <div className="d-flex align-items-center mb-3">
              <i className="bi bi-telephone fs-4 text-primary me-3"></i>
              <span>+1 (123) 456-7890</span>
            </div>
            <div className="d-flex align-items-center mb-3">
              <i className="bi bi-geo-alt fs-4 text-primary me-3"></i>
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>

          <div className="mt-5">
            <h5 className="fw-bold mb-3">Working Hours</h5>
            <p className="mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card shadow border-0">
            <div className="card-body p-5">
              <h3 className="card-title mb-4">Send us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-lg w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;