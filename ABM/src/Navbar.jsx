import { useState } from 'react';
import logo from "./assets/abm.png";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);  // State to control mobile menu

  // Function to toggle the mobile menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center fixed top-4 left-1/2 transform -translate-x-1/2 w-4/5 text-[--text-color] bg-[--bg-color] rounded-full shadow-md py-2 px-4 z-10 shadow-[--primary-color]">
      <a href="#" className="hover:text-[--primary-color] font-semibold">
        <img src={logo} alt="logo" className="w-24" />
      </a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center justify-center space-x-6">
        <li>
          <a href="#home" className="px-4 py-2 text-lg font-bold hover:text-[--primary-color]">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="px-4 py-2 text-lg font-bold hover:text-[--primary-color]">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="px-4 py-2 text-lg font-bold hover:text-[--primary-color]">
            Contact
          </a>
        </li>
      </ul>

      {/* Hamburger Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-2xl text-[--text-color]">
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-20 transform ${
          isOpen ? 'block' : 'hidden'
        }`}
        onClick={toggleMenu}
      >
        <div className="flex justify-end p-6">
          <button onClick={toggleMenu} className="text-3xl text-white">
            ✕
          </button>
        </div>

        <ul className="flex flex-col items-center space-y-6 bg-[--bg-color] p-8">
          <li>
            <a href="#home" className="text-2xl font-semibold text-white hover:text-[--primary-color]">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-2xl font-semibold text-white hover:text-[--primary-color]">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="text-2xl font-semibold text-white hover:text-[--primary-color]">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
