import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        {/* Left Half - Social Links */}
        <div className="flex flex-col md:flex-row items-center mb-6 md:mb-0 md:w-1/2">
          <h3 className="text-xl font-bold mb-4 md:mb-0 md:mr-6 text-center md:text-left">
            Follow Us:
          </h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-full transition"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-full transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Right Half - CTA */}
        <div className="text-center md:text-right md:w-1/2">
          <h3 className="text-2xl font-bold mb-4">
            Let's Build Something Amazing Together
          </h3>
          <p className="text-gray-400 mb-6">
            Join the revolution. Discover how we can help bring your ideas to life.
          </p>
          <a
            href="#"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 via-blue-500 to-teal-400 text-white font-semibold rounded-lg shadow-md hover:from-purple-600 hover:to-teal-500 transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
