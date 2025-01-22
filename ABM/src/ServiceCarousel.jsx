import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

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
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        Our <span className="text-blue-500">Services</span>
      </h2>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        stopOnHover
        transitionTime={500}
        centerMode
        centerSlidePercentage={33.33} // Show 3 cards (33.33% width for each)
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-blue-50 via-white to-blue-50 shadow-md rounded-lg p-6 mx-4 flex flex-col items-center justify-center transform hover:scale-105 transition-transform"
          >
            <div className="text-6xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ServiceCarousel;
