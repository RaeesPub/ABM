import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import './App.css';

const SliderComponent = () => {
  const textItems = [
    "Welcome to our website!",
    "Creating beautiful experiences.",
    "Let’s build something amazing together.",
    "Innovative solutions for modern problems.",
    "Empowering your digital presence.",
  ];

  return (
    <div className="w-full bg-[--primary-color] shadow-md shadow-[--secondary-color] border-b-2 border-[--primary-color] py-4">
      <Splide
        options={{
          type: 'loop',
          drag: 'free',
          focus: 'center',
          autoScroll: {
            speed: 2, // Speed of auto-scroll
          },
          arrows: false,
          pagination: false,
          perPage: 3, // Number of text items visible at once
          gap: '1rem', // Gap between text items
        }}
        extensions={{ AutoScroll }}
        className="text-carousel"
        style={{ transform: 'rotate(-0.5deg)' }}
      >
        {textItems.map((text, index) => (
          <SplideSlide key={index}>
              <div style={{ fontFamily: "Aneo" }} className="text-center font-bold text-lg text-[--text-color]">  
              {text}
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default SliderComponent;



