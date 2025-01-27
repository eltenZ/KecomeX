import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users, Server, Code, Globe, MapPin } from "lucide-react";

const AboutHero = () => {
  const [heroText, setHeroText] = useState("");
  const [subText, setSubText] = useState("");

const binaryToText = (binary, targetText, setter, delay = 50) => {
  let index = 0;
  const interval = setInterval(() => {
    if (index < targetText.length) {
      const binaryCode = Array.from({ length: targetText.length - index })
        .map(() => Math.round(Math.random()).toString())
        .join("");
      setter(targetText.substring(0, index) + binaryCode);
      index++;
    } else {
      setter(targetText); // Ensure the final text is set correctly.
      clearInterval(interval);
    }
  }, delay);
};

useEffect(() => {
  binaryToText(
    "101010101",
    "Empowering SMEs with Innovative Digital Solutions",
    setHeroText,
    60
  );
  binaryToText(
    "101010101",
    "Driving growth and transformation through custom-built systems and cutting-edge technology.",
    setSubText,
    75
  );
}, []);

  return (
    <div className="bg-black text-white py-16 text-center font-cyberpunk">
      <motion.h1
        className="text-4xl font-bold font-cyberpunk"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {heroText}
      </motion.h1>
      <motion.p
        className="mt-4 text-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        {subText}
      </motion.p>

      {/* Key Metrics Section */}
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
        {/* Metric 1 */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Users className="text-white w-8 h-8 mb-2" />
          <p className="font-bold text-lg">150+</p>
          <p className="text-sm">Clients Served</p>
        </motion.div>

        {/* Metric 2 */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Server className="text-white w-8 h-8 mb-2" />
          <p className="font-bold text-lg">50+</p>
          <p className="text-sm">Custom Systems Built</p>
        </motion.div>

        {/* Metric 3 */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Code className="text-white w-8 h-8 mb-2" />
          <p className="font-bold text-lg">300+</p>
          <p className="text-sm">Projects Delivered</p>
        </motion.div>

        {/* Metric 4 */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Globe className="text-white w-8 h-8 mb-2" />
          <p className="font-bold text-lg">25+</p>
          <p className="text-sm">Industries Served</p>
        </motion.div>

        {/* Metric 5 */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <MapPin className="text-white w-8 h-8 mb-2" />
          <p className="font-bold text-lg">50+</p>
          <p className="text-sm">Locations</p>
        </motion.div>
      </div>

      <motion.button
        className="mt-6 bg-white text-black font-semibold py-2 px-6 rounded-lg shadow hover:bg-gray-200 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Explore Our Solutions
      </motion.button>
    </div>
  );
};

export default AboutHero;
