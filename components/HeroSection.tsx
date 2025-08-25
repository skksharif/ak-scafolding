"use client";

import { useState, useEffect } from "react";
import { FaArrowRight, FaPlay } from "react-icons/fa";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = ["/slides/s1.jpg", "/slides/s2.jpg", "/slides/s3.jpg"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${slide})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: index === currentSlide ? "scale(1.05)" : "scale(1)",
              transition: "transform 5s ease-in-out, opacity 1s ease-in-out",
            }}
          />
        ))}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#000]/50 via-black/50 to-[#000]/50" />

        {/* Pattern Overlay */}
        <div className="absolute inset-0 hero-pattern opacity-20" />
      </div>

      {/* Content */}
      <div className="relative mt-[50px] z-10 max-w-7xl mx-auto px-4 sm:mt-0 px-6 lg:px-8 text-center">
        <div className="animate-fade-scale">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            Best Scaffolding in <span className="gradient-text">Hyderabad</span>
          </h1>

          {/* Added Name */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-6 font-semibold">
            By
            <span className="inline-block px-2 py-2 text-white text-lg sm:text-xl lg:text-2xl font-semibold drop-shadow-[0_0_30px_#F36A2D]">
              Sk. Javeed Ali
            </span>
          </p>

          <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            "The Best Scaffolding in Hyderabad – Structure Built Strong, Safety
            Elevated."
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <a
              href={`https://wa.me/+919705899998`}
              target="_blank"
              className="group bg-[#F36A2D] hover:bg-[#E85C24] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center space-x-3"
            >
              <span>Request a Quote</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            <a
              href="#services"
              className="group border-2 border-[#F36A2D] text-white hover:bg-[#F36A2D] px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center space-x-3"
            >
              <FaPlay className="text-sm" />
              <span>Explore Services</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
