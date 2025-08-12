import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown, FiChevronUp, FiHome, FiMail, FiPhone, FiMapPin, FiShield, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [cookieConsent, setCookieConsent] = useState(false);

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  const policySections = [
    {
      title: "Introduction",
      icon: <FiShield className="text-blue-600" />,
      content: "At Techgenia Digital Solutions, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services, including web development, mobile app development, database management, cloud services, computer classes, professional training, and cybersecurity solutions. Please read this policy carefully. If you do not agree with the terms, please do not use our services."
    },
    {
      title: "Information We Collect",
      icon: <FiEye className="text-blue-600" />,
      content: (
        <>
          <p className="mb-4">We may collect the following types of information:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Personal Information:</strong> Name, email address, phone number, and other details provided when you fill out forms (e.g., job applications, contact forms) or register for our computer classes or training programs.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you interact with our website, such as IP address, browser type, pages visited, and time spent on the site.
            </li>
            <li>
              <strong>Application Data:</strong> For job applications, we collect details such as educational qualifications, work experience, skills, portfolio links, and career goals.
            </li>
            <li>
              <strong>Cookies and Tracking Technologies:</strong> We use cookies to enhance your experience, analyze website performance, and personalize content. You can manage cookie preferences through your browser settings.
            </li>
          </ul>
        </>
      )
    },
    {
      title: "How We Use Your Information",
      icon: <FiLock className="text-blue-600" />,
      content: (
        <>
          <p className="mb-4">We use your information to:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>Provide and improve our services, including website functionality, class enrollment, and job application processing.</li>
            <li>Communicate with you, such as responding to inquiries or sending updates about our services.</li>
            <li>Analyze website usage to enhance user experience and optimize our offerings.</li>
            <li>Comply with legal obligations and protect our rights.</li>
          </ul>
        </>
      )
    },
    {
      title: "Sharing Your Information",
      icon: <FiEyeOff className="text-blue-600" />,
      content: (
        <>
          <p className="mb-4">We do not sell your personal information. We may share your information with:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>Service providers (e.g., cloud hosting providers like AWS or Firebase) who assist in delivering our services.</li>
            <li>Legal authorities when required by law or to protect our rights.</li>
            <li>Third-party analytics providers to improve our website and services.</li>
          </ul>
        </>
      )
    },
    {
      title: "Data Security",
      icon: <FiLock className="text-blue-600" />,
      content: "We implement industry-standard security measures to protect your information, including encryption and secure storage. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security."
    },
    {
      title: "Your Rights",
      icon: <FiShield className="text-blue-600" />,
      content: (
        <>
          <p className="mb-4">Depending on your location, you may have the right to:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>Access, correct, or delete your personal information.</li>
            <li>Opt out of marketing communications.</li>
            <li>Request data portability or restrict processing.</li>
          </ul>
          <p className="mt-4">
            To exercise these rights, contact us at <a href="mailto:techgenia.in@gmail.com" className="text-blue-600 hover:underline">techgenia.in@gmail.com</a>.
          </p>
        </>
      )
    },
    {
      title: "Cookies and Tracking",
      icon: <FiEye className="text-blue-600" />,
      content: "We use cookies to enhance your browsing experience. You can disable cookies through your browser settings, but this may affect website functionality."
    },
    {
      title: "Third-Party Links",
      icon: <FiEyeOff className="text-blue-600" />,
      content: "Our website may contain links to third-party sites. We are not responsible for their privacy practices. Please review their policies before sharing information."
    },
    {
      title: "Changes to This Policy",
      icon: <FiShield className="text-blue-600" />,
      content: "We may update this Privacy Policy periodically. Changes will be posted on this page with an updated 'Last Updated' date. Please check back regularly for updates."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Cookie Consent Banner */}
      {!cookieConsent && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50 shadow-lg">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
            <p className="mb-4 md:mb-0 md:mr-6">
              We use cookies to enhance your experience. By continuing to browse, you agree to our use of cookies.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => setCookieConsent(true)}
                className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
              >
                Accept
              </button>
              <button 
                onClick={() => setCookieConsent(true)}
                className="px-4 py-2 border border-gray-400 rounded-lg hover:bg-gray-700 transition"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
            Last Updated: July 31, 2025
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          {/* Table of Contents */}
          <div className="bg-gray-50 p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Policy Overview</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {policySections.map((section, index) => (
                <li key={index}>
                  <button
                    onClick={() => toggleSection(index)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center ${activeSection === index ? 'bg-blue-100 text-blue-700 font-medium' : 'hover:bg-gray-100 text-gray-700'}`}
                  >
                    <span className="mr-3">{section.icon}</span>
                    <span className="flex-1 text-left">{section.title}</span>
                    {activeSection === index ? <FiChevronUp /> : <FiChevronDown />}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Policy Content */}
          <div className="p-6 sm:p-8">
            {policySections.map((section, index) => (
              <div 
                key={index} 
                className={`mb-8 transition-all duration-300 ${activeSection === index || activeSection === null ? 'block' : 'hidden'}`}
                id={`section-${index}`}
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mr-3">
                    {index + 1}
                  </span>
                  {section.title}
                </h2>
                <div className="prose prose-blue max-w-none text-gray-700 pl-13">
                  {section.content}
                </div>
              </div>
            ))}

            {/* Contact Information */}
            <div className="mt-12 bg-blue-50 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-6">If you have questions about this Privacy Policy, please contact us:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <FiMail className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Email</h3>
                    <a href="mailto:techgenia.in@gmail.com" className="text-blue-600 hover:underline">techgenia.in@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <FiPhone className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Phone</h3>
                    <a href="tel:+919679111012" className="text-blue-600 hover:underline">+91 9679111012</a>
                  </div>
                </div>
                
                <div className="flex items-start md:col-span-2">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <FiMapPin className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Address</h3>
                    <p className="text-gray-700">Khanchi, Nandakumar, Purba Medinipur, West Bengal, India, 721643</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-700 hover:to-blue-800"
          >
            <FiHome className="mr-2" />
            Back to Home
          </Link>
        </div>
      </main>

      {/* Floating Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
        aria-label="Back to top"
      >
        <FiChevronUp className="text-xl" />
      </button>
    </div>
  );
};

export default PrivacyPolicy;