import React from 'react';

const ServiceCard = ({ service }) => {
  return (
    <div className="card h-100 border-0 shadow-sm hover-shadow">
      <div className="card-body text-center p-4">
        <div className="mb-4">
          <i className={`bi ${service.icon} display-4 text-primary`}></i>
        </div>
        <h5 className="card-title fw-bold">{service.title}</h5>
        <p className="card-text text-muted">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;