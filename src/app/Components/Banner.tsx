"use client"            
import React, { useState } from 'react';
import img1 from "../../../public/banner1.jpg"
import img2 from "../../../public/banner2.jpg"
import img3 from "../../../public/banner3.jpg"


const Banner = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  const banners = [
    {
      image: img1.src,
      title: 'Elevate Your Style',
      description: 'Discover our premium collection with exclusive designs and limited editions',
      primaryButton: { text: 'Shop Now', url: '/collection/premium' }
    },
    {
      image: img2.src,
      title: 'Summer Collection 2024',
      description: 'Experience the latest trends with our new seasonal arrivals',
      primaryButton: { text: 'Shop Collection', url: '/collection/summer-2024' }
    },
    {
      image: img3.src,
      title: 'Luxury Essentials',
      description: 'Timeless pieces crafted with exceptional quality',
      primaryButton: { text: 'Shop Essentials', url: '/collection/luxury' }
    },
  ];

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {/* Banner Background with Zoom Animation */}
      <div 
        className="absolute inset-0 bg-cover bg-center transform scale-105 animate-slow-zoom"
        style={{
          backgroundImage: `url('${banners[currentBanner].image}')`,
        }}
      >
        {/* Gradient overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Banner Content with Animation */}
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4 md:px-8 animate-fade-in">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-white/20" />
        <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-white/20" />

        <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 animate-slide-up">
          {banners[currentBanner].title}
        </h1>
        <p className="text-xl md:text-2xl text-center mb-10 max-w-2xl text-gray-200 animate-slide-up-delay">
          {banners[currentBanner].description}
        </p>
        
        {/* Button Container */}
        <div className="flex gap-4 animate-slide-up-delay-2">
          {/* Primary Button */}
          <a 
            href={banners[currentBanner].primaryButton.url}
            className="bg-white text-black px-8 py-3 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
          >
            {banners[currentBanner].primaryButton.text}
          </a>
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={prevBanner}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button 
          onClick={nextBanner}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 flex gap-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentBanner === index ? 'bg-white w-4' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
