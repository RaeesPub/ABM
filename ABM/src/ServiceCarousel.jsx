import React from "react";
import "@splidejs/react-splide/css"; // Import SplideJS default styles
import { Splide, SplideSlide } from "@splidejs/react-splide";

const services = [
  {
    title: "Web Development",
    description: "Building responsive and dynamic websites.",
    icon: "🌐",
  },
  {
    title: "Graphic Design",
    description: "Crafting visually stunning designs.",
    icon: "🎨",
  },
  {
    title: "SEO Optimization",
    description: "Improving your site's search engine visibility.",
    icon: "🚀",
  },
  {
    title: "Content Creation",
    description: "Creating engaging and high-quality content.",
    icon: "✍️",
  },
  {
    title: "Digital Marketing",
    description: "Maximizing your online reach and engagement.",
    icon: "📈",
  },
];

const ServiceCarousel = () => {
  return (

    
    <div className="max-w-full mx-auto py-12 px-4 bg-[--bg-color] shadow-inner- shadow-white">
      <h2 className="text-3xl font-bold text-center mb-8 text-[--text-color]">
        Our <span className="text-[--primary-color]">Services</span>
      </h2>
      <Splide
        options={{
          type: "loop",
          perPage: 3,
          perMove: 1,
          autoplay: true,
          interval: 3000,
          gap: "1rem",
          pauseOnHover: true,
          pagination: false,
          arrows: false,
          breakpoints: {
            1024: { perPage: 2 },
            768: { perPage: 1 },
          },
        }}
        className="overflow-hidden"
      >
        {services.map((service, index) => (
          <SplideSlide key={index}>
            <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 shadow-md rounded-lg p-6 mx-4 flex flex-col items-center justify-center transform hover:scale-105 transition-transform">
              <div className="text-6xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default ServiceCarousel;
