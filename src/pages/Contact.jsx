import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    country: "",
    companyName: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      if (!db) {
        throw new Error("Firestore instance is undefined. Check firebaseConfig.js.");
      }

      const collectionRef = collection(db, "applications");
      await addDoc(collectionRef, {
        ...formData,
        timestamp: new Date(),
      });

      setSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        mobile: "",
        country: "",
        companyName: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error.message, error);
      setError(error.message || "Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white text-gray-800 py-12 sm:py-16 md:py-20 px-4">
      {/* Header Section */}
      <motion.div
        className="container mx-auto text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600">Get in Touch</h2>
        <p className="text-gray-500 mt-3 text-base sm:text-lg md:text-xl">
          Connect with us worldwide and let's collaborate!
        </p>
      </motion.div>

      {/* Contact Info Section */}
      <motion.div
        className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mt-8"
      >
        {[
          { icon: <FaPhoneAlt />, title: "Call Us", value: "+91 9679111012", color: "blue-500" },
          { icon: <FaEnvelope />, title: "Email", value: "techgenia.in@gmail.com", color: "red-500" },
          { icon: <FaMapMarkerAlt />, title: "Head Office", value: "Flat No: 1C, 9F, Petals Apartment, Ajanta Road, New Santoshpur, Kolkata 700075", color: "green-500" },
          { icon: <FaClock />, title: "Business Hours", value: "Mon - Fri: 9 AM - 6 PM (UTC)", color: "purple-500" },
        ].map((info, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <div className={`text-${info.color} text-2xl sm:text-3xl md:text-4xl mb-3`}>{info.icon}</div>
            <h4 className="text-lg sm:text-xl md:text-2xl font-semibold">{info.title}</h4>
            <p className="text-gray-500 mt-2 text-sm sm:text-base md:text-lg">{info.value}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Contact Form Section */}
      <motion.div
        className="container mx-auto mt-12 sm:mt-16 bg-gray-100 shadow-md rounded-lg p-6 sm:p-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 text-center">Send Us a Message</h3>
        {error && (
          <div
            className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded"
            role="alert"
          >
            {error}
          </div>
        )}
        {success && (
          <div
            className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded"
            role="alert"
          >
            Message sent successfully!
          </div>
        )}
        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleInputChange}
            className="bg-white border p-3 rounded-md w-full focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            required
            aria-required="true"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            className="bg-white border p-3 rounded-md w-full focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            required
            aria-required="true"
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleInputChange}
            className="bg-white border p-3 rounded-md w-full focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            pattern="[0-9]{10}"
            required
            aria-required="true"
            title="Please enter a valid 10-digit mobile number"
          />
          <select
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            className="bg-white border p-3 rounded-md w-full focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            required
            aria-required="true"
          >
            <option value="">Select Country</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="India">India</option>
            <option value="Germany">Germany</option>
          </select>
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleInputChange}
            className="bg-white border p-3 rounded-md w-full focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleInputChange}
            className="bg-white border p-3 rounded-md w-full focus:ring-2 focus:ring-blue-500 col-span-1 md:col-span-2 text-sm sm:text-base"
            required
            aria-required="true"
          ></textarea>
          <div className="col-span-1 md:col-span-2 text-center">
            <motion.button
              type="submit"
              className="bg-blue-500 text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 disabled:opacity-50 flex items-center justify-center mx-auto"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              disabled={isSubmitting}
            >
              {isSubmitting && (
                <svg
                  className="animate-spin h-5 w-5 text-white mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              )}
              {isSubmitting ? "Submitting..." : "Submit"}
            </motion.button>
          </div>
        </form>
      </motion.div>

      {/* Google Maps & Global Locations */}
      <motion.div
        className="container mx-auto mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl shadow-2xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white space-y-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-6 text-neon-green drop-shadow-lg">
          Our Global Offices
        </h3>

        {/* Main Map */}
        <div className="relative overflow-hidden rounded-xl shadow-lg border-4 border-neon-green">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7372.503924505441!2d88.38589747535303!3d22.49472787954725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027142465dd751%3A0xafdc37b08faa901e!2sPetals%20Apartment%2C%209F%2C%20Ajanta%20Rd%2C%20New%20Santoshpur%2C%20Santoshpur%2C%20Kolkata%2C%20West%20Bengal%20700075%2C%20India!5e0!3m2!1sen!2sus!4v1742452373273!5m2!1sen!2sus"
            width="100%"
            height="300 sm:400 md:450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-xl"
          ></iframe>
        </div>

        {/* Individual Office Locations */}
        <div className="relative overflow-hidden rounded-xl shadow-lg border-4 border-neon-green p-4 sm:p-5">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-center mb-6 text-neon-green drop-shadow-lg">
            Branch Office
          </h3>
          {[
            {
              city: "Khanchi, Nandakumar, Purba Medinipur, WB, India, 721643",
              map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.756094515229!2d87.90005497534491!3d22.211373679750658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02eb001bcabbad%3A0x1935fa27ef9a0e87!2sTechgenia%20Digital%20Classes!5e0!3m2!1sen!2sus!4v1742452963048!5m2!1sen!2sus",
            },
          ].map((location, index) => (
            <div key={index} className="bg-gray-100 rounded-lg shadow-md p-4 sm:p-6">
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700 text-center">{location.city}</h4>
              <iframe
                title={location.city}
                src={location.map}
                width="100%"
                height="200 sm:250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-md mt-4"
              ></iframe>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Social Media & Quick Inquiry Section */}
      <motion.div
        className="container mx-auto text-center mt-12 sm:mt-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">Follow Us on Social Media</h3>
        <div className="flex justify-center space-x-4 sm:space-x-6 mt-6">
          {[
            { icon: <FaFacebookF />, link: "https://www.facebook.com/share/1bf2SRdNSf/", color: "blue-500" },
            { icon: <FaLinkedinIn />, link: "#", color: "blue-600" },
            { icon: <FaTwitter />, link: "#", color: "blue-400" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-${social.color} text-2xl sm:text-3xl md:text-4xl p-2 sm:p-3 rounded-full hover:scale-110 transition-all duration-300`}
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;