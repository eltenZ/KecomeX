import React from 'react';

const ServiceCategory = ({ categoryTitle, children }) => {
  return (
    <div className="my-12">
      <h2 className="text-3xl font-bold text-purple-600 mb-6">{categoryTitle}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {children}
      </div>
    </div>
  );
};

export default ServiceCategory;
