import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import type { HeroSlide } from "../types";

interface HeroSliderProps {
  slides: HeroSlide[];
}

const HeroSlider: React.FC<HeroSliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: "calc(100vh - 64px)" }}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
      ))}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight animate-fade-in-down">
          {slides[currentIndex].headline}
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8 animate-fade-in-up">
          {slides[currentIndex].subHeadline}
        </p>
      </div>

      {/* CTA Button and Arrow Down */}
      {slides[currentIndex].ctaLink && slides[currentIndex].ctaLink !== "" && (
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center animate-fade-in-up">
          <Link
            to={slides[currentIndex].ctaLink}
            className="text-white font-semibold py-3 rounded-full transition-transform transform hover:scale-105 duration-300"
          >
            {slides[currentIndex].ctaText}
          </Link>
          <svg
            className="w-6 h-6 text-white animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7"
            ></path>
          </svg>
        </div>
      )}

      {/* Navigation Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/30 p-3 rounded-full text-white transition-all duration-300 focus:outline-none"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/30 p-3 rounded-full text-white transition-all duration-300 focus:outline-none"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default HeroSlider;
