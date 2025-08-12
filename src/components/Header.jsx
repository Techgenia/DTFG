import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import logo from '../assets/logoTechgenia.png'

const navLinks = [
  { name: "Home", path: "/", icon: "home" },
  { name: "About", path: "/about", icon: "info" },
  {
    name: "Services",
    path: "/services",
    icon: "settings",
    submenu: [
      { name: "Web Development", path: "/services" },
      { name: "Mobile Apps", path: "/services" },
      { name: "Cloud Solutions", path: "/services" },
      { name: "UI/UX Design", path: "/services" },
      { name: "Digital Marketing", path: "/services" },
    ],
  },
  { name: "Career", path: "/career", icon: "career" },
  { name: "Contact", path: "/contact", icon: "mail" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setOpenSubmenu(null);
  };

  return (
    <header className="bg-gradient-to-r from-[#3facff] via-[#0458b7] to-[#000a1f] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with your image */}
          <Link
            to="/"
            className="flex items-center space-x-3 group"
            onClick={closeMenu}
          >
            <div className="h-12 w-12 bg-white/10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:rotate-12 backdrop-blur-sm border border-white/20 overflow-hidden">
              <img 
                src={logo}
                alt="Techgenia Logo" 
                className="h-full w-full object-contain p-1"
              />
            </div>
            <span className="text-xl font-semibold text-white group-hover:text-black transition-colors duration-300">
              Techgenia
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group">
                <Link
                  to={link.path}
                  className={`px-4 py-2 rounded-lg flex items-center space-x-1 transition-colors duration-200 ${
                    location.pathname === link.path
                      ? "text-white bg-white/20 font-medium backdrop-blur-sm"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span>{link.name}</span>
                  {link.submenu && (
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        openSubmenu === index ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {/* Desktop Submenu */}
                {link.submenu && (
                  <div className="absolute left-0 top-full mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 origin-top transform scale-95 group-hover:scale-100">
                    {link.submenu.map((sub, subIndex) => (
                      <Link
                        key={subIndex}
                        to={sub.path}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                        onClick={closeMenu}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {/* <button className="ml-4 px-4 py-2 bg-white text-indigo-600 rounded-lg font-medium hover:bg-white/90 hover:shadow-md transition-all duration-200">
              Get Started
            </button> */}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm">
          <div className="absolute right-0 top-0 h-full w-80 bg-gradient-to-b from-[#3facff] via-[#0458b7] to-[#000a1f] shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="flex justify-between items-center p-4 border-b border-white/10">
              <Link
                to="/"
                className="flex items-center space-x-3"
                onClick={closeMenu}
              >
                <div className="h-12 w-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/20 overflow-hidden">
                  <img 
                    src={logo} 
                    alt="Techgenia Logo" 
                    className="h-full w-full object-contain p-1"
                  />
                </div>
                <span className="text-xl font-semibold text-white">
                  Techgenia
                </span>
              </Link>
              <button
                onClick={closeMenu}
                className="p-2 rounded-full text-white hover:bg-white/10"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-4 space-y-1">
              {navLinks.map((link, index) => (
                <div key={index} className="mb-1">
                  <div
                    className={`flex justify-between items-center p-3 rounded-lg ${
                      location.pathname === link.path
                        ? "bg-white/20 text-white backdrop-blur-sm"
                        : "text-white/90 hover:bg-white/10"
                    }`}
                  >
                    <Link
                      to={link.path}
                      className="flex-1"
                      onClick={() => !link.submenu && closeMenu()}
                    >
                      {link.name}
                    </Link>
                    {link.submenu && (
                      <button
                        onClick={() =>
                          setOpenSubmenu(openSubmenu === index ? null : index)
                        }
                        className="p-1 text-white/70 hover:text-white"
                      >
                        {openSubmenu === index ? (
                          <ChevronUp size={18} />
                        ) : (
                          <ChevronDown size={18} />
                        )}
                      </button>
                    )}
                  </div>
                  {link.submenu && openSubmenu === index && (
                    <div className="pl-4 mt-1 space-y-1">
                      {link.submenu.map((sub, subIndex) => (
                        <Link
                          key={subIndex}
                          to={sub.path}
                          className="block p-3 text-sm rounded-lg hover:bg-white/10 text-white/80 hover:text-white"
                          onClick={closeMenu}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {/* <button className="w-full mt-4 p-3 bg-white text-indigo-600 rounded-lg font-medium hover:bg-white/90 hover:shadow-md transition-all duration-200">
                Get Started
              </button> */}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;