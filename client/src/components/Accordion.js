import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-4 bg-purple-600 text-white font-bold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none transition duration-300"
      >
        {title}
      </button>
      {isOpen && (
        <div className="p-4 mt-2 bg-gray-100 rounded-lg">
          <p className="text-gray-700">{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
