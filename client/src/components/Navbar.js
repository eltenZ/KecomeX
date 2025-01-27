import React, { useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { href: "#about", label: "Home" },
  { href: "#services", label: "Events" },
  { href: "#testimonials", label: "Memberships" },
  { href: "#resources", label: "Resources" },
  { href: "#partners", label: "Partners" },
  { href: "#contact", label: "Contacts" },
];

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(navItems[0].href);

  return (
    <div className="relative">
      <motion.nav className="hidden md:flex space-x-6 relative">
        {navItems.map((item) => (
          <div
            key={item.href}
            className="relative flex items-center justify-center"
          >
            {/* Animated Background for Active Item */}
            {activeItem === item.href && (
              <motion.div
                className="absolute inset-0 bg-black rounded-full z-0"
                layoutId="activeNavItemBackground"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              />
            )}

            {/* Navigation Link */}
            <motion.a
              href={item.href}
              onClick={() => setActiveItem(item.href)}
              className={`relative z-10 px-4 py-2 font-bold text-sm transition-all duration-300 ${
                activeItem === item.href
                  ? "text-white"
                  : "text-gray-700 hover:text-black"
              }`}
            >
              {item.label}
            </motion.a>
          </div>
        ))}
      </motion.nav>
    </div>
  );
};

export default Navbar;
