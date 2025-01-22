import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ahmad from "./assets/ahmad.jpg";
import heroBg from "./assets/hero-bg.jpg";
import logo from "./assets/ahmad.jpg";
import logo1 from "./assets/logo1.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.jpg";
import logo4 from "./assets/logo4.png";
import logo5 from "./assets/logo5.png";
import logo6 from "./assets/logo6.jpg";
import ExperienceSection from "./ExperienceSection";
import Countup from "./Countup";
import ServiceCarousel from "./ServiceCarousel";
import Footer from "./Footer";

function App() {
  return (
    <>

      <nav className="flex justify-between fixed top-4 left-1/2 transform -translate-x-1/2 w-4/5 bg-white rounded-full shadow-md py-2 px-4 z-10 shadow-blue-500">
        <a href="#" className="px-4 py-2 text-gray-800 hover:text-blue-500 font-semibold">
          <img src={logo} alt="logo" className="h-8 w-8 bg-white rounded-full shadow-md" />
        </a>
        <ul className="flex items-center justify-center">
          <li>
            <a href="#home" className="px-4 py-2 text-lg font-bold text-gray-800 hover:text-blue-500">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="px-4 py-2 text-lg font-bold text-gray-800 hover:text-blue-500">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="px-4 py-2 text-lg font-bold text-gray-800 hover:text-blue-500">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <section className="flex items-center w-full justify-between min-h-[85vh] bg-gray-50" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backdropFilter: 'blur(3px)' }}>
        <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row lg:justify-between items-center">
          {/* Left Image Section */}
          <div className="my-8 md:mt-24">
            <img src={ahmad} alt="" className="rounded-full shadow-lg w-full h-auto md:w-72 md:h-96 lg:w-96 lg:h-128 object-cover object-top" style={{ aspectRatio: '1/1' }} />
          </div>

          {/* Right Text Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Hi, I'm a{" "}
              <span className="text-blue-500">
                <TypeAnimation
                  sequence={[
                    "Designer",
                    1000,
                    "Developer",
                    1000,
                    "Editor",
                    1000,
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                />
              </span>
            </h1>
            <p className="text-black text-xl mb-6 text-justify">
              I create beautiful and functional web experiences. <br />
              Let's build something amazing together.
            </p>
            
            <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600">
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    

      <Carousel
              autoPlay
              infiniteLoop
              showStatus={false}
              showIndicators={false}
              transitionTime={500}
              interval={2000}
              className=" bg-blue-500 rounded-lg shadow-md"
            >
              <div>
                <p className="text-xl font-bold text-white">
                  "Innovative solutions for modern problems. <br />
                  Crafting designs that inspire."
                </p>
              </div>
              <div>
                <p className="text-xl font-bold text-white">
                  "Building bridges in the digital world. <br />
                  Creating memorable experiences."
                </p>
              </div>
              <div>
                <p className="text-xl font-bold text-white">
                  "Breaking barriers for a better tomorrow. <br />
                  Fostering growth and innovation."
                </p>
              </div>
            </Carousel>

                  {/* ------------------ */}

                  <div className="bg-gray-50 py-12">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left">
      {/* SVG 500+ Section */}
      {/* <div className="flex items-center justify-center lg:justify-start mb-6 lg:mb-0">
        <h2 className="text-[52px] md:text-[58px] lg:text-[58px] font-bold">
          <svg
            className="w-[170px] md:w-[180px] lg:w-[180px] h-[45px] lg:h-[55px]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="gradient" y1="1" y2="0">
                <stop offset="0.135836" stopColor="#EDC2F1" />
                <stop offset="0.569392" stopColor="#9864FD" />
                <stop offset="1" stopColor="#44E5E7" />
              </linearGradient>
            </defs>
            <g>
              <text
                id="text"
                className="stroke-[1.5] lg:stroke-[2.5]"
                stroke="url(#gradient)"
                fill="white"
                dominantBaseline="middle"
                textAnchor="middle"
                x="50%"
                y="50%"
              >
                500
              </text>
            </g>
          </svg>
        </h2>
      </div> */}

      {/* Text Content */}
      <div className="lg:ml-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800">
          We've Worked with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-teal-400">500+ Companies</span>
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl">
          Trusted by industry leaders worldwide, we’ve partnered with companies to drive innovation and success across various fields.
        </p>
        <div className="mt-6">
          <a
            href="#"
            className="inline-block px-8 py-3 text-white bg-gradient-to-r from-purple-500 via-blue-500 to-teal-400 hover:from-purple-600 hover:to-teal-500 rounded-lg shadow-md font-medium text-lg"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  </div>
</div>


{/* ------------------ */}

<div className="bg-white py-12">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
      {/* Experience Years */}
      <div>
        <h3 className="text-4xl font-bold text-gray-800">3+</h3>
        <p className="mt-2 text-lg text-gray-600">Years of Experience</p>
      </div>
      {/* Clients */}
      <div>
        <h3 className="text-4xl font-bold text-gray-800">500+</h3>
        <p className="mt-2 text-lg text-gray-600">Clients Worldwide</p>
      </div>
      {/* Projects */}
      <div>
        <h3 className="text-4xl font-bold text-gray-800">2,000+</h3>
        <p className="mt-2 text-lg text-gray-600">Projects Completed</p>
      </div>
      {/* Industries */}
      <div>
        <h3 className="text-4xl font-bold text-gray-800">20+</h3>
        <p className="mt-2 text-lg text-gray-600">Industries Served</p>
      </div>
    </div>
  </div>
</div>

{/* ------- */}


<div className="bg-gray-50 py-12">
  <div className="max-w-5xl mx-auto px-6 lg:px-8">
    <ol className="relative border-l border-gray-200">
      {/* Milestone 1 */}
      <li className="mb-10 ml-6">
        <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 border border-white"></div>
        <h3 className="text-lg font-semibold text-gray-900">Founded in 2010</h3>
        <p className="mt-2 text-base text-gray-600">
          Our journey began with a small team passionate about solving problems.
        </p>
      </li>
      {/* Milestone 2 */}
      <li className="mb-10 ml-6">
        <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 border border-white"></div>
        <h3 className="text-lg font-semibold text-gray-900">First 100 Clients (2013)</h3>
        <p className="mt-2 text-base text-gray-600">
          Expanded globally, serving businesses across multiple industries.
        </p>
      </li>
      {/* Milestone 3 */}
      <li className="mb-10 ml-6">
        <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 border border-white"></div>
        <h3 className="text-lg font-semibold text-gray-900">Reached 500+ Clients (2023)</h3>
        <p className="mt-2 text-base text-gray-600">
          Continuously innovating and delivering exceptional results worldwide.
        </p>
      </li>
    </ol>
  </div>
</div>

<div className="bg-white py-12">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
      Trusted by Leading Brands
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
      <img src={logo1} alt="Client 1" className="h-16 mx-auto" />
      <img src={logo2}  alt="Client 2" className="h-16 mx-auto" />
      <img src={logo3}  alt="Client 2" className="h-16 mx-auto" />
      <img src={logo4}  alt="Client 3" className="h-16 mx-auto" />
      <img src={logo5}  alt="Client 4" className="h-16 mx-auto" />
      <img src={logo6}  alt="Client 5" className="h-16 mx-auto" />
    </div>
  </div>
</div>

< ExperienceSection />

< Countup />


<ServiceCarousel />

< Footer />


    </>
  );
}
export default App;


