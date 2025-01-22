import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import ThemeSelector from "./ThemeSelector";

const ThemeSelectorWrapper = () => {
  const [isVisible, setIsVisible] = useState(false);
  const themeSelectorRef = useRef(null);

  // Slide-in animation using GSAP
  const showThemeSelector = () => {
    if (themeSelectorRef.current) {
      gsap.to(themeSelectorRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      });
    }
  };

  // Slide-out animation using GSAP
  const hideThemeSelector = () => {
    if (themeSelectorRef.current) {
      gsap.to(themeSelectorRef.current, {
        x: 300,
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
      });
    }
  };

  // Handle toggle and animation logic
  useEffect(() => {
    if (isVisible) {
      showThemeSelector();
    } else {
      hideThemeSelector();
    }
  }, [isVisible]);

  return (
    <>
      {/* Sticky Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsVisible(!isVisible)}
          onMouseEnter={() => setIsVisible(true)}
          className="bg-[--primary-color] text-white p-3 rounded-full shadow-md hover:bg-[--secondary-color] transition-all"
          aria-label="Toggle Theme Selector"
        >
          🎨
        </button>
      </div>

      {/* Theme Selector Panel */}
      <div
        ref={themeSelectorRef}
        style={{ transform: "translateX(300px)", opacity: 0 }} // Start off-screen
        className="fixed bottom-16 right-4 z-40 bg-white rounded-lg shadow-lg p-4 "
      >
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
          aria-label="Close"
        >
          ✖
        </button>
        <ThemeSelector />
      </div>
    </>
  );
};

export default ThemeSelectorWrapper;
