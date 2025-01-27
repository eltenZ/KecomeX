import React from 'react';

const PricingCard = ({ planName, price, features }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h4 className="text-xl font-semibold text-purple-600">{planName}</h4>
      <p className="text-gray-700 mt-2">{price}</p>
      <ul className="text-gray-600 mt-4">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
