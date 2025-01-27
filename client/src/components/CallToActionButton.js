import React from 'react';

const CallToActionButton = ({ label, link }) => {
  return (
    <a
      href={link}
      className="bg-gradient-to-r from-purple-600 to-blue-400 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 hover:bg-gradient-to-l"
    >
      {label}
    </a>
  );
};

export default CallToActionButton;
