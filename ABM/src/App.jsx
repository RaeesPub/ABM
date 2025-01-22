import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TypeAnimation } from "react-type-animation";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ahmad from "./assets/ahmad.png";
import heroBg from "./assets/hero-bg.jpg";
import logo1 from "./assets/logo1.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.jpg";
import logo4 from "./assets/logo4.png";
import logo5 from "./assets/logo5.png";
import logo6 from "./assets/logo6.jpg";
import ExperienceSection from "./ExperienceSection";
import Countup from "./Countup";
import ServiceCarousel from "./ServiceCarousel";
import Footer from "./footer";
import ThemeSelectorWrapper from "./ThemeSelectorWrapper";
import Slider from "./SliderComponent";
import Navbar from "./Navbar";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const milestonesRef = useRef(null);
  const brandsRef = useRef(null);

  useEffect(() => {
    // Hero Section Animation
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      }
    );

    // Stats Section Animation
    gsap.fromTo(
      statsRef.current.querySelectorAll("div"),
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
        },
      }
    );

    // Milestones Timeline Animation
    gsap.fromTo(
      milestonesRef.current.querySelectorAll("li"),
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: milestonesRef.current,
          start: "top 80%",
        },
      }
    );

    // Brands Section Animation
    gsap.fromTo(
      brandsRef.current.querySelectorAll("img"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: brandsRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  

  return (
    <>
      {/* Navbar */}
     <Navbar />

      {/* Theme Selector */}
      <ThemeSelectorWrapper />

      {/* Hero Section */}
      <section
        ref={heroRef}
        id="home"
        className="flex items-center w-full justify-between min-h-[85vh] bg-[gray-50]"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backdropFilter: "blur(3px)",
        }}
      >
        <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row lg:justify-between items-center">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl text-[--text-color] font-bold mb-4">
              Hi, I'm a{" "}
              <span className="text-[--primary-color]">
                <TypeAnimation
                  sequence={["Designer", 1000, "Developer", 1000, "Editor", 1000]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                />
              </span>
            </h1>
            <p className="text-[--text-color] text-xl mb-6 text-center lg:text-justify">
              I create beautiful and functional web experiences. <br />
              Let's build something amazing together.
            </p>
            <button className="px-6 py-3 bg-[--primary-color] text-white font-semibold rounded-lg shadow-md hover:bg-blue-600">
              Get in Touch
            </button>
          </div>
          <div className=" md:mt-24 h-full bg-transparent">
            <img
              src={ahmad}
              alt=""
              className=" w-full h-full  object-cover object-top"
              style={{ aspectRatio: "1/1" }}
            />
          </div>
        </div>
      </section>

      {/* Slider */}
      <Slider />

      {/* Stats Section */}
      <div ref={statsRef} className="bg-[--bg-color] py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl text-[--text-color] font-bold">3+</h3>
              <p className="mt-2 text-lg text-[--text-color]">Years of Experience</p>
            </div>
            <div>
              <h3 className="text-4xl text-[--text-color] font-bold">500+</h3>
              <p className="mt-2 text-lg text-[--text-color]">Clients Worldwide</p>
            </div>
            <div>
              <h3 className="text-4xl text-[--text-color] font-bold">2,000+</h3>
              <p className="mt-2 text-lg text-[--text-color]">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-4xl text-[--text-color] font-bold">20+</h3>
              <p className="mt-2 text-lg text-[--text-color]">Industries Served</p>
            </div>
          </div>
        </div>
      </div>

      {/* Milestones Section */}
      <div
  ref={milestonesRef}
  className="bg-gradient-to-r from-[--primary-color] to-[--secondary-color] py-12 backdrop-blur-md">
  <div className="max-w-5xl mx-auto px-6 lg:px-8">
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <li className="opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold text-[--text-color]">
          Founded in 2010
        </h3>
        <p className="mt-2 text-base text-[--text-color]">
          Our journey began with a small team passionate about solving problems.
        </p>
      </li>
      <li className="backdrop-blur-md p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold text-[--text-color]">
          First 100 Clients (2013)
        </h3>
        <p className="mt-2 text-base text-[--text-color]">
          Expanded globally, serving businesses across multiple industries.
        </p>
      </li>
      <li className="backdrop-blur-md p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold text-[--text-color]">
          Reached 500+ Clients (2023)
        </h3>
        <p className="mt-2 text-base text-[--text-color]">
          Continuously innovating and delivering exceptional results worldwide.
        </p>
      </li>
    </ul>
  </div>
</div>



      {/* Brands Section */}
      <div ref={brandsRef} className="bg-[--bg-color] text-[--text-color] py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-6">Trusted by Leading Brands</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            <img src={logo1} alt="Client 1" className="h-16 mx-auto" />
            <img src={logo2} alt="Client 2" className="h-16 mx-auto" />
            <img src={logo3} alt="Client 3" className="h-16 mx-auto" />
            <img src={logo4} alt="Client 4" className="h-16 mx-auto" />
            <img src={logo5} alt="Client 5" className="h-16 mx-auto" />
            <img src={logo6} alt="Client 6" className="h-16 mx-auto" />
          </div>
        </div>
      </div>

      {/* Other Components */}
      <ExperienceSection />
      <Countup />
      <ServiceCarousel />
      <Footer />
    </>
  );
}

export default App;
