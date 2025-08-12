import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown, FiChevronUp, FiHome, FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const TermsOfService = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  const termsSections = [
    {
      title: "Introduction",
      content: "Welcome to Techgenia Digital Solutions ('we,' 'us,' or 'our'). These Terms of Service ('Terms') govern your access to and use of our website, services, and products, including web development, mobile app development, database management, cloud services, computer classes, professional training, and cybersecurity solutions. By accessing or using our services, you agree to be bound by these Terms. If you do not agree, please do not use our services."
    },
    {
      title: "Acceptance of Terms",
      content: "By using our website or services, you confirm that you are at least 18 years old or have the legal capacity to enter into these Terms. You agree to comply with these Terms and all applicable laws and regulations."
    },
    {
      title: "Use of Services",
      content: (
        <>
          <p className="mb-4">You agree to use our services only for lawful purposes and in accordance with these Terms. You may not:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use our services in a way that violates any applicable laws or regulations</li>
            <li>Attempt to gain unauthorized access to our systems or networks</li>
            <li>Use our services to transmit harmful or illegal content, including malware or phishing attempts</li>
            <li>Interfere with or disrupt the functionality of our website or services</li>
          </ul>
        </>
      )
    },
    {
      title: "Intellectual Property",
      content: "All content on our website, including text, images, logos, and software, is the property of Techgenia Digital Solutions or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works from our content without prior written permission."
    },
    {
      title: "User Content",
      content: "By submitting content through our services (e.g., job applications, feedback, or inquiries), you grant us a non-exclusive, royalty-free, worldwide license to use, store, and display that content as necessary to provide our services. You are responsible for ensuring that your content does not infringe on any third-party rights or violate applicable laws."
    },
    {
      title: "Payment and Fees",
      content: "Some of our services, such as computer classes or professional training, may require payment. All fees are non-refundable unless otherwise stated. You agree to pay all applicable fees as described during the registration or purchase process."
    },
    {
      title: "Termination",
      content: "We reserve the right to suspend or terminate your access to our services at our discretion, with or without notice, if you violate these Terms or engage in conduct that we deem harmful to our business or other users."
    },
    {
      title: "Limitation of Liability",
      content: "To the fullest extent permitted by law, Techgenia Digital Solutions shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services. Our services are provided 'as is' without warranties of any kind, express or implied."
    },
    {
      title: "Governing Law",
      content: "These Terms are governed by the laws of India. Any disputes arising from these Terms shall be resolved in the courts of Purba Medinipur, West Bengal, India."
    },
    {
      title: "Changes to These Terms",
      content: "We may update these Terms periodically. Changes will be posted on this page with an updated 'Last Updated' date. Your continued use of our services after changes are posted constitutes acceptance of the revised Terms."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
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
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Table of Contents</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {termsSections.map((section, index) => (
                <li key={index}>
                  <button
                    onClick={() => toggleSection(index)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-all ${activeSection === index ? 'bg-blue-100 text-blue-700 font-medium' : 'hover:bg-gray-100 text-gray-700'}`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{section.title}</span>
                      {activeSection === index ? <FiChevronUp /> : <FiChevronDown />}
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Terms Content */}
          <div className="p-6 sm:p-8">
            {termsSections.map((section, index) => (
              <div 
                key={index} 
                className={`mb-8 transition-all duration-300 ${activeSection === index || activeSection === null ? 'block' : 'hidden'}`}
                id={`section-${index}`}
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mr-3">
                    {index + 1}
                  </span>
                  {section.title}
                </h2>
                <div className="prose prose-blue max-w-none text-gray-700 pl-11">
                  {section.content}
                </div>
              </div>
            ))}

            {/* Contact Information */}
            <div className="mt-12 bg-blue-50 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-6">If you have questions about these Terms, please contact us at:</p>
              
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

export default TermsOfService;