import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react"; // Import X icon from lucide-react

const EventDetailsModal = ({ isOpen, onClose, eventData }) => {
  const [showForm, setShowForm] = useState(false); // State to toggle form visibility

  const handleReserveClick = () => {
    setShowForm(true); // Show the form when "Reserve Now" is clicked
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -50 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 ${isOpen ? "block" : "hidden"}`}
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg w-full max-w-2xl shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 text-2xl"
        >
          <X />
        </button>

        {/* Event Details */}
        <h3 className="text-3xl font-bold text-purple-600 mb-4">{eventData.title}</h3>
        <p className="text-lg text-gray-700 mb-4">{eventData.date}</p>

        <h4 className="font-semibold text-lg mb-2">Keynote Speakers:</h4>
        <ul className="grid grid-cols-2 gap-4 mb-4">
          {eventData.keynoteSpeakers.map((speaker, index) => (
            <li key={index} className="text-gray-600">{speaker}</li>
          ))}
        </ul>

        <h4 className="font-semibold text-lg mb-2">What You Will Get:</h4>
        <ul className="grid grid-cols-2 gap-4 mb-4">
          {eventData.benefits.map((benefit, index) => (
            <li key={index} className="text-gray-600">{benefit}</li>
          ))}
        </ul>

        {/* Reserve Now Button */}
        {!showForm ? (
          <button
            className="w-full py-2 bg-gradient-to-r from-purple-600 to-blue-400 text-white font-semibold rounded-lg hover:bg-purple-700 focus:outline-none"
            onClick={handleReserveClick}
          >
            Reserve Now
          </button>
        ) : (
          <ReserveForm />
        )}
      </div>
    </motion.div>
  );
};

// The ReserveForm Component for collecting customer data
const ReserveForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    // Add form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 grid gap-4">
      <div>
        <label className="block text-sm font-semibold text-gray-600" htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-600" htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-600" htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 bg-gradient-to-r from-purple-600 to-blue-400 text-white font-semibold rounded-lg mt-4 hover:bg-purple-700 focus:outline-none"
      >
        Submit
      </button>
    </form>
  );
};

export default EventDetailsModal;
