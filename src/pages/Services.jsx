import React from "react";
import { FaCode, FaMobileAlt, FaDatabase, FaCloud, FaLaptopCode, FaChalkboardTeacher, FaShieldAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const services = [
  { icon: <FaCode size={50} />, title: "Web Development", desc: "We design and develop scalable web applications using the latest technologies such as React, Node.js, and Next.js.", color: "from-blue-500 to-purple-600" },
  { icon: <FaMobileAlt size={50} />, title: "Mobile App Development", desc: "High-performing mobile apps built with React Native and Flutter for seamless user experience.", color: "from-green-500 to-teal-600" },
  { icon: <FaDatabase size={50} />, title: "Database Management", desc: "Efficient and secure database solutions using MySQL, PostgreSQL, and MongoDB.", color: "from-red-500 to-pink-600" },
  { icon: <FaCloud size={50} />, title: "Cloud Services", desc: "Cloud computing solutions with AWS, Firebase, and DigitalOcean for optimized performance.", color: "from-yellow-500 to-orange-600" },
  { icon: <FaLaptopCode size={50} />, title: "Computer Classes", desc: "Learn programming, software development, and AI technologies from industry experts.", color: "from-indigo-500 to-blue-600" },
  { icon: <FaChalkboardTeacher size={50} />, title: "Professional Training", desc: "Upskill with hands-on training in web development, AI, cybersecurity, and more.", color: "from-purple-500 to-pink-600" },
  { icon: <FaShieldAlt size={50} />, title: "Cyber Security", desc: "Protect your applications with our advanced cybersecurity solutions and penetration testing services.", color: "from-gray-700 to-black" }
];

const Services = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-gray-100 py-12 sm:py-16 md:py-20 px-4 font-anta">
      {/* Header Section */}
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-700">Our Services</h2>
        <p className="text-gray-600 mt-3 text-base sm:text-lg md:text-xl">Empowering businesses with cutting-edge technology solutions.</p>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mt-12 sm:mt-16">
        {services.map((service, index) => (
          <div 
            key={index} 
            className={`relative bg-gradient-to-r ${service.color} text-white p-6 sm:p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300`}
          >
            <div className="absolute top-3 right-3 text-lg sm:text-xl opacity-20">{service.icon}</div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl mx-auto mb-4">{service.icon}</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm sm:text-base">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Section: Why Choose Us? */}
      <div className="container mx-auto mt-12 sm:mt-16 p-6 sm:p-8 bg-white shadow-lg rounded-lg text-center">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700">Why Choose Us?</h3>
        <p className="text-gray-600 mt-3 text-base sm:text-lg md:text-xl">We deliver high-quality tech solutions that drive results. Our expertise in modern technology ensures your success.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8">
          <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md">
            <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-600">Experienced Team</h4>
            <p className="text-gray-700 mt-2 text-sm sm:text-base">Our skilled professionals have years of industry experience.</p>
          </div>
          <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md">
            <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-600">Client Satisfaction</h4>
            <p className="text-gray-700 mt-2 text-sm sm:text-base">We prioritize client success and long-term partnerships.</p>
          </div>
          <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md">
            <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-600">Cutting-Edge Tech</h4>
            <p className="text-gray-700 mt-2 text-sm sm:text-base">We use the latest frameworks and tools to deliver quality services.</p>
          </div>
          <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md">
            <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-600">24/7 Support</h4>
            <p className="text-gray-700 mt-2 text-sm sm:text-base">We are always available to assist you with any technical needs.</p>
          </div>
        </div>
      </div>

      {/* Contact Button */}
      <div className="container mx-auto text-center mt-12 sm:mt-16">
        <button 
        onClick={() => navigate("/contact")}
        className="relative bg-blue-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg overflow-hidden transition-all duration-300 before:absolute before:top-0 before:left-0 before:w-1/2 before:h-full before:bg-white before:opacity-20 before:transition-all before:duration-300 before:z-0 hover:before:w-full hover:before:bg-gray-200 hover:text-blue-700">
          <span className="relative z-10">Get in Touch</span>
        </button>
      </div>
    </section>
  );
};

export default Services;