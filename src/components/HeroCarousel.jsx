import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const slides = [
  { id: 1, image: 'https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&w=1200', title: 'Empowering Businesses, Elevating Success.' },
  { id: 2, image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1200', title: 'Transforming Leads into Lasting Relationships.' },
  { id: 3, image: 'https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', title: 'Affordable Solutions, Unbeatable Results' },
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [textAnimationComplete, setTextAnimationComplete] = useState(false);

  const companyName = "Techgenia Digital Solutions";
  const typingSpeed = 100; // Typing speed in milliseconds

  useEffect(() => {
    let i = 0;
    setDisplayedText(""); // Reset text before typing
    setTextAnimationComplete(false);
    
    const interval = setInterval(() => {
      if (i < companyName.length) {
        setDisplayedText(companyName.substring(0, i + 1)); // Update text progressively
        i++;
      } else {
        clearInterval(interval);
        setTextAnimationComplete(true); // Mark animation as complete
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    if (textAnimationComplete) {
      const timer = setTimeout(() => {
        nextSlide();
      }, 2000); // Wait 2s after text animation completes
      return () => clearTimeout(timer);
    }
  }, [textAnimationComplete]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] overflow-hidden shadow-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[currentIndex].id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
          className="absolute w-full h-full"
        >
          <img
            src={slides[currentIndex].image}
            alt={slides[currentIndex].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-800/40 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 text-center">
            <div className="container mx-auto">
              <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                Welcome to <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-300 to-yellow-500 text-transparent bg-clip-text">{displayedText}</span>
              </h1>
              <h2 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl mt-2 sm:mt-3 md:mt-4">{slides[currentIndex].title}</h2>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 md:left-5 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 sm:p-2.5 md:p-3 rounded-full text-white hover:bg-black/70"
      >
        <FiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 md:right-5 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 sm:p-2.5 md:p-3 rounded-full text-white hover:bg-black/70"
      >
        <FiChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
      </button>
    </div>
  );
};

export default HeroCarousel;