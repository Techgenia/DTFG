import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import HeroCarousel from '../components/HeroCarousel';
import { FaGlobe, FaShoppingCart, FaChartBar, FaCloud } from "react-icons/fa";
import '../App.css';
import Testimonials from '../components/Testimonial';
import FeaturedCaseStudies from '../components/FeaturedCaseStudies';

const Home = () => {
  const stats = [
    { label: "Current Clients", value: 23 },
    { label: "Successful Projects", value: 19 },
    { label: "Team Members", value: 18 },
    { label: "Satisfied Clients", value: 20 },
  ];
  const points = [
    { id: 1, text: "Scalable & Fast Solutions – Built for speed and efficiency.", color: "from-blue-500 to-purple-600", image: "https://images.pexels.com/photos/8092315/pexels-photo-8092315.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    { id: 2, text: "Affordable Pricing – Cost-effective solutions for every business.", color: "from-green-500 to-teal-600", image: "https://images.pexels.com/photos/6446709/pexels-photo-6446709.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    { id: 3, text: "Customizable Features – Tailored solutions to fit your needs.", color: "from-[#9bafd9] to-[#103783]", image: "https://images.pexels.com/photos/930530/pexels-photo-930530.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    { id: 4, text: "Expert Support – 24/7 assistance from our team.", color: "from-yellow-500 to-orange-600", image: "https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  ];

  const solutions = [
    { title: "Website Development", icon: <FaGlobe />, desc: "Create visually stunning and highly functional websites for your business." },
    { title: "E-Commerce Solutions", icon: <FaShoppingCart />, desc: "Powerful online store solutions to scale your business with ease." },
    { title: "Custom CRM", icon: <FaChartBar />, desc: "Streamline operations and enhance customer relationships with custom CRM solutions." },
    { title: "SaaS Applications", icon: <FaCloud />, desc: "Cloud-based platforms tailored for flexibility, security, and growth." },
  ];

  const techStack = [
    { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Docker", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "GraphQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [counts, setCounts] = useState(stats.map(() => 0));
  const duplicatedTechStack = [...techStack, ...techStack];

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      stats.forEach((stat, index) => {
        let start = 0;
        const increment = Math.ceil(stat.value / (duration / 30));

        const counter = setInterval(() => {
          start += increment;
          if (start >= stat.value) {
            setCounts((prev) => {
              const newCounts = [...prev];
              newCounts[index] = stat.value;
              return newCounts;
            });
            clearInterval(counter);
          } else {
            setCounts((prev) => {
              const newCounts = [...prev];
              newCounts[index] = start;
              return newCounts;
            });
          }
        }, 30);
      });
    }
  }, [isInView]);

  return (
    <div className='relative font-anta'>
      <HeroCarousel />
      <div className='neon-gradient'>
      <div className='container mx-auto px-4 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-6 '>
        <div className='flex flex-col justify-center items-center space-y-6'>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">
            Grow Your Business with US!
          </h3>
          <h2 className="text-base md:text-lg lg:text-xl text-gray-200 text-center">
            At <span className='text-xl md:text-2xl lg:text-3xl font-anta text-[#00bfff]'>Techgenia Digital solutions</span>, we help businesses thrive online with cutting-edge web applications,
            modern websites, and powerful CRM solutions. Whether you’re a small business, a restaurant owner,
            or a blogger, we provide tailored digital solutions that drive results.
          </h2>
        </div>

        {/* Motion Card Section with Skew Effect */}
        <div className="flex justify-center items-center">
          <motion.div
            className="relative w-48 h-48 md:w-72 lg:w-96 md:h-72 lg:h-96 bg-transparent backdrop-blur-lg border-[6px] border-double border-white drop-shadow-[0_10px_30px_rgba(0,191,255,0.6)] flex flex-col justify-center items-center text-white text-lg md:text-xl lg:text-2xl font-semibold overflow-hidden rounded-full transition-all duration-300 ease-in-out"
            initial={{ y: -20, opacity: 0, skewX: 0 }}
            animate={{ y: 0, opacity: 1, skewX: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            whileHover={{
              scale: 1.08,
              rotate: 5,
              boxShadow: "0px 0px 40px rgba(0, 191, 255, 0.9)",
              transition: { duration: 0.25, ease: "easeOut" },
            }}
            whileTap={{ scale: 1.3, transition: { duration: 0.15 } }}
          >
            <img
              src="https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Computer"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
      </div>

      <div className="relative w-full overflow-hidden leading-[0] -mt-[2px]">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[100px] md:h-[150px] lg:h-[200px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#000a1f" stopOpacity="1" />
              <stop offset="50%" stopColor="#003b80" stopOpacity="1" />
              <stop offset="100%" stopColor="#0066b2" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            className="neon-gradient-fill"
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          />
        </svg>
      </div>

      {/* Why Choose Us Section */}
      <div className="container mx-auto px-4 py-10 flex flex-col justify-center items-center space-y-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-anta">Why Choose Us?</h1>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {points.map((point) => (
            <motion.div
              key={point.id}
              className="relative h-40 sm:h-48 md:h-56 w-full rounded-lg overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.1, zIndex: 10 }}
            >
              <div className={`absolute inset-0 bg-cover bg-center bg-gradient-to-r ${point.color}`}>
                <div className="absolute inset-0 bg-gray-900/10"></div>
              </div>
              <motion.div
                className="absolute inset-0 flex items-center justify-center text-white hover:text-black text-center p-4 transition-all duration-300"
                whileHover={{ textShadow: "0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff" }}
              >
                <p className="text-base sm:text-lg md:text-xl font-bold">{point.text}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container min-w-xs mx-auto relative text-white overflow-hidden my-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-black">
          Tech Stack We Use
        </h2>
        <div className=" px-4 relative overflow-hidden p-6">
          <motion.div
            className="flex gap-8 sm:gap-12 whitespace-nowrap"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            {duplicatedTechStack.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center min-w-[120px] sm:min-w-[140px] p-4 sm:p-5 bg-white backdrop-blur-4xl border border-gray-200 shadow-sm rounded-full transition-all duration-300 hover:scale-110 hover:border-blue-500 hover:shadow-blue-500/50"
              >
                <img src={tech.img} alt={tech.name} className="w-12 h-12 sm:w-16 sm:h-16 drop-shadow-lg" />
                <p className="mt-3 text-sm sm:text-base font-medium text-gray-700">{tech.name}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="relative py-12 sm:py-16 md:py-24 bg-gray-50 text-gray-900 shadow-xl">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 tracking-wide">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-gray-500">Solutions</span>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                className="group relative bg-white border border-gray-300 p-6 sm:p-8 rounded-2xl shadow-md flex flex-col items-center text-center hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, zIndex: 20 }}
              >
                <div className="text-blue-500 text-5xl sm:text-6xl md:text-7xl mb-4 sm:mb-6 transition-transform duration-300 group-hover:rotate-[8deg]">
                  {solution.icon}
                </div>
                <h2 className="text-xl sm:text-2xl md:text-2xl font-semibold">{solution.title}</h2>
                <p className="text-gray-600 mt-4 text-sm sm:text-base">{solution.desc}</p>
                <div className="absolute -top-4 right-4 w-6 h-6 bg-blue-200 rounded-full blur-lg opacity-40"></div>
                <div className="absolute bottom-2 left-2 w-8 h-8 bg-purple-200 rounded-full blur-xl opacity-30"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div ref={ref} className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-black to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
            We <span className="text-blue-400">Excel</span> in Numbers
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="p-4 sm:p-6 rounded-xl bg-white/10 backdrop-blur-md shadow-[0px_10px_20px_rgba(0,0,0,0.3),0px_20px_40px_rgba(0,0,0,0.2)] transition-all duration-300 hover:scale-105 hover:shadow-[0px_15px_25px_rgba(0,0,0,0.4),0px_25px_50px_rgba(0,0,0,0.3)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <motion.h3
                  className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-400"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  {counts[index]}+
                </motion.h3>
                <p className="text-gray-300 mt-2 text-base sm:text-lg md:text-xl">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <FeaturedCaseStudies />
      <Testimonials />
    </div>
  );
};

export default Home;