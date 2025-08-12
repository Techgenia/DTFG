import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope
} from "react-icons/fa";
import logo from '../assets/logoTechgenia.png'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#000a1f] via-[#0458b7] to-[#3facff] text-white py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        {/* Tagline Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-[#00ffea] mb-4">
            Innovative Solutions, Exceptional Service
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Empowering businesses with cutting-edge technology and world-class expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {/* Logo & About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="h-20 sm:h-24 md:h-25 w-20 sm:w-24 md:w-25 bg-white/90 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/20 overflow-hidden">
                <img 
                  src={logo}
                  alt="Techgenia Logo" 
                  className="h-full w-full object-contain p-1"
                />
              </div>
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Techgenia</span>
            </div>
            <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed">
              We deliver transformative digital solutions that drive growth, efficiency, and innovation for businesses worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-4 pb-2 border-b border-white/10">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Career", path: "/career" },
                { name: "Contact", path: "/contact" }
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.path} 
                    className="text-white/80 hover:text-[#00ffea] text-sm sm:text-base transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-[#00ffea] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-4 pb-2 border-b border-white/10">Contact Info</h3>
            <ul className="space-y-4 text-white/80 text-sm sm:text-base">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 flex-shrink-0 text-[#00ffea]" />
                <span>Khanchi, Nandakumar, Purba Medinipur, West Bengal, India, 721643</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-[#00ffea]" />
                <a href="tel:+919679111012" className="hover:text-[#00ffea] transition">+91 9679111012</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-[#00ffea]" />
                <a href="mailto:techgenia.in@gmail.com" className="hover:text-[#00ffea] transition">techgenia.in@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-4 pb-2 border-b border-white/10">Connect With Us</h3>
            <p className="text-white/80 mb-4 text-sm sm:text-base">
              Follow us on social media to stay updated with our latest news and offerings.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: <FaFacebookF />, url: "https://www.facebook.com/share/1bf2SRdNSf/" },
                { icon: <FaTwitter />, url: "#" },
                { icon: <FaInstagram />, url: "https://www.instagram.com/techgeniadigitalclasses" },
                { icon: <FaLinkedinIn />, url: "#" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 sm:h-9 md:h-10 w-8 sm:w-9 md:w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#00ffea] hover:text-[#000a1f] transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 sm:mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-xs sm:text-sm">
            © {new Date().getFullYear()} Techgenia. All rights reserved.
          </p>
          <div className="flex space-x-4 sm:space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-white/70 hover:text-[#00ffea] text-xs sm:text-sm transition">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-white/70 hover:text-[#00ffea] text-xs sm:text-sm transition">Terms of Service</Link>
            <Link to="/contact" className="text-white/70 hover:text-[#00ffea] text-xs sm:text-sm transition">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}