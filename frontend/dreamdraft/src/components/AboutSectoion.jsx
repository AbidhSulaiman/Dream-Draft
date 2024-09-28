import React, { useState, useEffect } from "react";
import hero_image from "../assets/hero_image-1.png";
import home1 from "../assets/home1.png";
import crafthands from "../assets/crafthands.png";

export default function AboutSectoion() {
  const slides = [
    {
      title: "Craft Your Own Future with Precision",
      content:
        "Welcome to DreamDraft, where imagination meets precision. We are more than just a platform for creating building plans; we are a community of dreamers, innovators, and creators who believe that anyone can design the space of their dreams—no architectural degree required.At DreamDraft, we empower you to take control of your visions, giving you the tools to sketch, design, and bring your ideas to life. Our platform is designed for individuals and teams who want to create unique spaces—from homes to offices—with ease, while maintaining professional-grade accuracy.",
      image: crafthands,
    },
    {
      title: "Our Story",
      content:
        "DreamDraft was born from a simple idea: designing your own space should be empowering, not overwhelming. Traditional architectural software is often too complex, intimidating for beginners, or out of reach for those who don’t have specialized knowledge. We saw a gap between what people imagined and what they could actually create.Our founders, with backgrounds in design and software development, came together to build DreamDraft—a platform that bridges that gap. We wanted to make space design accessible to all, and with that, DreamDraft became a reality.",
      image: home1,
    },
    {
      title: "Our Mission",
      content:
        "We aim to redefine creativity in building design by making powerful tools available to everyone. Whether you’re a homeowner looking to design a new space, a contractor drafting plans for clients, or a business planning your next office layout, DreamDraft provides the tools to bring your vision to life, with precision and simplicity.",
      image: hero_image,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);

  // Auto-slide function
  useEffect(() => {
    if (isAutoSliding) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000); // Change slide every 4 seconds
      return () => clearInterval(interval);
    }
  }, [currentSlide, isAutoSliding]);

  // Go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Handle manual slide
  const handleManualSlide = (direction) => {
    setIsAutoSliding(false); // Stop auto sliding when user manually slides
    if (direction === "next") {
      nextSlide();
    } else {
      prevSlide();
    }
  };

  return (
    <section className="relative flex flex-col gap-4 px-5">
      {/* Fixed Arrows */}
      <div className="absolute left-5 top-1/2 transform -translate-y-1/2 z-20">
        <button
          onClick={() => handleManualSlide("prev")}
          className="text-gray-900"
        >
          <div className="arrow-left">

          </div>
        </button>
      </div>
      <div className="absolute right-5 top-1/2 transform -translate-y-1/2 z-20">
        <button
          onClick={() => handleManualSlide("next")}
          className="text-gray-900"
        >
          <div className="arrow-right">

          </div>
        </button>
      </div>

      {/* Slide Content */}
      <div id="aboutsection" className="pt-32 font-serif px-10">
        <h3 className="text-gray-900 px-10 mx-10 font-semibold text-xl">
          About DreamDraft
        </h3>
      </div>
      <div
        className="min-h-[500px] bg-slate-100 flex gap-5 items-center rounded-lg px-10 mx-10 shadow-2xl shadow-slate-400 "
      >
        {/* Image Section */}
        <div className="basis-1/3 px-10 z-10 scale-125">
            <img src={slides[currentSlide].image} alt="" />
        </div>

        {/* Text Section */}
        <div className="basis-2/3 px-20 flex flex-col gap-5 z-10">
          <h5 className="font-mono text-4xl font-bold text-orange-700 drop-shadow-lg">
            {slides[currentSlide].title}
          </h5>
          <p className="text-black text-xl font-serif drop-shadow-md">
            {slides[currentSlide].content}
          </p>
        </div>
      </div>
    </section>
  );
}
