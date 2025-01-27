import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Watuma & Co Business Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Watuma & Co</h3>
            <p className="text-gray-400">Diani, Kwale County, Kenya</p>
            <p className="text-gray-400 mt-2">Phone: 0737-812-530</p>
            <p className="text-gray-400 mt-1">
              Email:{" "}
              <a
                href="mailto:info@watuma&co.com"
                className="hover:underline text-white"
              >
                info@watuma&co.com
              </a>
            </p>
            <p className="text-gray-400 mt-2">
              Empowering SMEs with Advanced Digital Solutions.
            </p>
          </div>

          {/* Solutions */}
{/* Solutions */}
<div>
  <h3 className="text-lg font-bold mb-4">Our Solutions</h3>
  <ul className="space-y-2 text-gray-400">
    <li>
      <a href="#" className="hover:text-white">
        System Analysis & Design
      </a>
    </li>
    <li>
      <a href="#" className="hover:text-white">
        Frontend Development (React & Tailwind)
      </a>
    </li>
    <li>
      <a href="#" className="hover:text-white">
        Backend Development (Express)
      </a>
    </li>
    <li>
      <a href="#" className="hover:text-white">
        Database Management (PostgreSQL)
      </a>
    </li>
    <li>
      <a href="#" className="hover:text-white">
        Graphic Design & Brand Development
      </a>
    </li>
    <li>
      <a href="#" className="hover:text-white">
        Cybersecurity Solutions
      </a>
    </li>
    <li>
      <a href="#" className="hover:text-white">
        Photography & Videography Services
      </a>
    </li>
    <li>
      <a href="#" className="hover:text-white">
        IT Training & Education
      </a>
    </li>
  </ul>
</div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Tutorials & Guides
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Free Templates
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  About Watuma & Co
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-8 border-t border-gray-700 pt-8">
          <h3 className="text-lg font-bold mb-4 text-center">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-gray-400 text-center mb-4">
            Stay updated on our latest news, insights, and resources.
          </p>
          <form className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto px-4 py-2 rounded-lg text-gray-800"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col lg:flex-row justify-between items-center border-t border-gray-700 pt-4">
          <p className="text-gray-400 text-sm text-center lg:text-left">
            © 2025 Watuma & Co. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 lg:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">
              LinkedIn
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Instagram
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
