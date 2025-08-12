import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Alice Johnson",
    role: "Product Manager, InnovateX",
    feedback:
      "This team exceeded my expectations with their innovative approach!",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "James Brown",
    role: "CEO, WebSolutions",
    feedback: "Highly skilled professionals! Would love to collaborate again.",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Sophia Martinez",
    role: "CTO, TechVision",
    feedback: "Their attention to detail and execution is top-notch. A++",
    img: "https://randomuser.me/api/portraits/women/55.jpg",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Auto-scroll every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="relative py-12 sm:py-16 md:py-20 bg-white text-gray-900 flex flex-col items-center overflow-hidden">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-gray-900">
          What Our Clients Say
        </h1>

        <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-6 sm:p-8 bg-gray-100 shadow-xl border border-gray-300 rounded-3xl text-center relative overflow-hidden"
          >
            {/* Blurred Gradient Effects */}
            <div className="absolute -top-10 -left-10 w-20 sm:w-24 h-20 sm:h-24 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -bottom-10 -right-10 w-24 sm:w-32 h-24 sm:h-32 bg-purple-200 rounded-full blur-3xl opacity-20"></div>

            {/* Profile Image */}
            <motion.img
              src={testimonials[currentIndex].img}
              alt={testimonials[currentIndex].name}
              className="w-16 sm:w-20 h-16 sm:h-20 mx-auto rounded-full border-4 border-blue-400 shadow-lg"
              whileHover={{ scale: 1.1 }}
            />

            <h2 className="mt-4 text-lg sm:text-xl md:text-2xl font-semibold">
              {testimonials[currentIndex].name}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              {testimonials[currentIndex].role}
            </p>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-700">
              {testimonials[currentIndex].feedback}
            </p>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2">
            <button
              className="p-2 sm:p-3 bg-gray-200 hover:bg-gray-300 rounded-full text-gray-700 shadow-lg"
              onClick={() =>
                setCurrentIndex((prev) =>
                  prev === 0 ? testimonials.length - 1 : prev - 1
                )
              }
            >
              <FaArrowLeft className="w-4 sm:w-5 h-4 sm:h-5" />
            </button>
          </div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2">
            <button
              className="p-2 sm:p-3 bg-gray-200 hover:bg-gray-300 rounded-full text-gray-700 shadow-lg"
              onClick={() =>
                setCurrentIndex((prev) => (prev + 1) % testimonials.length)
              }
            >
              <FaArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
