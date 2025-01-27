import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "lucide-react";
import Navbar from "./Navbar"; // Assuming Navbar is in the same directory
import Input from "./Input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define the animations for the mobile menu
  const mobileMenuVariants = {
    initial: {
      opacity: 0,
      y: -200, // Start from above
    },
    animate: {
      opacity: 1,
      y: 0, // End at normal position
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 0.4,
      },
    },
    exit: {
      opacity: 0,
      y: -200, // Exit upwards
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 0.4,
      },
    },
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-1xl font-bold text-gray-600">Watuma & Co</div>
	<div className="w-auto">
	  <Input />
	</div>
        {/* Menu Button for Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-600"
        >
          <Menu size={24} />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <Navbar />
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="fixed top-0 left-0 right-0 bg-white w-full z-40 mt-16 shadow-md"
              variants={mobileMenuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div className="flex flex-col space-y-4 py-4">
                {[
                  { href: "#about", label: "Home" },
                  { href: "#services", label: "Events" },
                  { href: "#testimonials", label: "Memberships" },
                  { href: "#resources", label: "Resources" },
                  { href: "#partners", label: "Partners" },
                  { href: "#contact", label: "Contacts" },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block text-gray-700 hover:text-blue-500 py-2 px-4"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
