"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const heroImages = [
  {
    src: "/perspective.png",
    alt: "Victoria Meadows Village - Architectural Perspective",
  },
  {
    src: "/COURTYARD + EXISTING.jpg",
    alt: "Courtyard & Existing Context",
  },
  {
    src: "/NORTH.jpg",
    alt: "North Perspective",
  },
  {
    src: "/RES.jpg",
    alt: "Residential Wing",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, [resetKey]); // Reset timer when resetKey changes

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setResetKey((prev) => prev + 1); // Reset the auto-advance timer
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel */}
      {heroImages.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
            quality={90}
          />
        </div>
      ))}

      {/* Gradient Overlay - Enhanced for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
          {/* Title */}
          <div className="lg:col-span-7">
            <h1 className="text-display text-white animate-fade-in-up drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              <span className="block">Victoria</span>
              <span className="block">Meadows</span>
              <span className="block">Village</span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="lg:col-span-4 lg:col-start-9">
            <p
              className="text-white/90 text-lg md:text-xl leading-relaxed animate-fade-in-up opacity-0 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]"
              style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
            >
              VMV is a long-term care facility in Collingwood, Ontario. It
              integrates the historic 1890s Victoria Schoolhouse and is
              engineered for the occupant experience through healthy, beautiful,
              low-carbon, responsible design.
            </p>
            <a
              href="#site"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 text-white border border-white/40 hover:border-white hover:bg-white/10 rounded-full transition-all duration-300 group animate-fade-in-up opacity-0 backdrop-blur-sm"
              style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
            >
              <span className="text-sm font-medium tracking-wide uppercase">
                Explore Project
              </span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="transform group-hover:translate-y-1 transition-transform"
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-0 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`px-1 py-2 group cursor-pointer`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span
              className={`block rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white w-5 h-1.5"
                  : "bg-white/40 group-hover:bg-white/70 w-1.5 h-1.5"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
