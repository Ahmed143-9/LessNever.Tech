import React from 'react';
import ServiceCard from '../Common/ServiceCard';

const Services = () => {
  const services = [
    {
      title: "Web Applications",
      description: "Custom web applications built with modern technologies",
      icon: "bi-globe",
      image: "/images/Webapplication.jpg"
    },
    {
      title: "Mobile Apps",
      description: "Cross-platform mobile applications for iOS and Android",
      icon: "bi-phone",
      image: "/images/mobileapps.jpg"
    },
    {
      title: "Business Solutions",
      description: "Enterprise software and business process automation",
      icon: "bi-briefcase",
      image: "/images/business.jpg"
    },
    {
      title: "Dashboard Development",
      description: "Interactive dashboards for data visualization",
      icon: "bi-bar-chart",
      image: "/images/nasa-Q1p7bh3SHj8-unsplash.jpg"
    }
  ];

  return (
    <section className="services-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Our Services</h2>
          <p className="text-muted">Comprehensive tech solutions for your business</p>
        </div>
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;