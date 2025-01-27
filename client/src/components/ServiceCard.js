import React from 'react';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center w-72 transition-transform transform hover:scale-105">
      <img src={icon} alt={title} className="mx-auto h-16 mb-4" />
      <h3 className="text-2xl font-semibold text-purple-600">{title}</h3>
      <p className="text-gray-700 mt-2">{description}</p>
    </div>
  );
};

export default ServiceCard;
