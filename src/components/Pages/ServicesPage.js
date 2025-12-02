import React from 'react';
import ServiceCard from '../Common/ServiceCard';

const ServicesPage = () => {
  const services = [
    {
      title: "Web Applications",
      description: "Custom web applications built with modern technologies",
      icon: "bi-globe",
      image: "/images/Webapplication.jpg",
      details: "We build responsive, scalable web applications using React, Node.js, and modern frameworks."
    },
    {
      title: "Mobile Apps",
      description: "Cross-platform mobile applications for iOS and Android",
      icon: "bi-phone",
      image: "/images/mobileapps.jpg",
      details: "React Native and Flutter development for both iOS and Android platforms."
    },
    {
      title: "Business Solutions",
      description: "Enterprise software and business process automation",
      icon: "bi-briefcase",
      image: "/images/business.jpg",
      details: "Custom CRM, ERP, and business automation solutions tailored to your needs."
    },
    {
      title: "Dashboard Development",
      description: "Interactive dashboards for data visualization",
      icon: "bi-bar-chart",
      image: "/images/nasa-Q1p7bh3SHj8-unsplash.jpg",
      details: "Data visualization dashboards with real-time analytics and reporting."
    },
    {
      title: "E-commerce Solutions",
      description: "Online store development and management",
      icon: "bi-cart",
      image: "/images/portfoilo.jpg",
      details: "Complete e-commerce platforms with payment integration and inventory management."
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing support and maintenance services",
      icon: "bi-tools",
      image: "/images/robynne-o-HOrhCnQsxnQ-unsplash.jpg",
      details: "24/7 support, regular updates, and maintenance for your applications."
    }
  ];

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">Our Services</h1>
        <p className="lead text-muted">Comprehensive technology solutions for your business</p>
      </div>
      <div className="row g-4">
        {services.map((service, index) => (
          <div key={index} className="col-lg-4 col-md-6">
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;