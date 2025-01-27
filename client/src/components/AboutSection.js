import React from "react";
import AboutHero from "./AboutHero"; // Import the AboutHero component

const About = () => {
  return (
    <section className="bg-gray-100 text-gray-800 font-orbitron">
      {/* Hero Section */}
      <AboutHero /> {/* Integrating the AboutHero component */}

      {/* Mission and Values */}
      <div className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p>
            To empower businesses and entrepreneurs by creating opportunities through collaboration,
            innovation, and cutting-edge technology.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Values</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Innovation: Driving progress with creative solutions.</li>
            <li>Collaboration: Building meaningful partnerships.</li>
            <li>Integrity: Committed to ethical practices.</li>
          </ul>
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="bg-gray-200 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Join Our Growing Community</h2>
        <p className="max-w-3xl mx-auto">
          At Watuma & Co, we transform businesses by offering innovative digital solutions tailored to SMEs.
        </p>
        <button className="mt-6 bg-black text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-gray-800 transition-all">
          Get in Touch
        </button>
      </div>
    </section>
  );
};

export default About;
