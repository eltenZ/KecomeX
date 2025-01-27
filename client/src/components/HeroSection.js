import React from "react";
import FeaturedCard from "./FeaturedCard";
import KeyOfferings from "./KeyOfferings";

const HeroSection = () => {
  return (
    <section className="bg-white text-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-start gap-8">
        {/* Left Side Content */}
        <div className="w-full lg:w-1/2">
          <KeyOfferings />
          <a
            href="#membership"
            className="inline-block mt-2 bg-black text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 hover:opacity-90"
          >
            Become a Member
          </a>
        </div>

        {/* Right Side - Featured Section */}
        <div className="lg:w-1/2">
          <p className="mb-4 text-2xl font-bold">Featured Projects:</p>
          <div className="flex flex-wrap gap-8">
            <div className="w-full sm:w-1/2 lg:w-full">
              <FeaturedCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
