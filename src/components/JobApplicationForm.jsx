import React, { useState, useRef, useEffect } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { FaTimes } from "react-icons/fa";

const JobApplicationForm = ({ job, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    educationalQualification: "",
    workExperience: "",
    skills: "",
    portfolioLink: "",
    expectedSalary: "",
    careerGoal: "",
    jobTitle: job?.title || "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const modalRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      if (!db) {
        throw new Error("Firestore instance is undefined. Check firebaseConfig.js.");
      }
      console.log("Firestore instance:", db);

      const collectionRef = collection(db, "formSubmissions");
      console.log("Collection reference:", collectionRef);

      await addDoc(collectionRef, {
        ...formData,
        timestamp: new Date(),
      });

      alert("Application submitted successfully!");
      setIsSubmitting(false);
      onClose();
    } catch (error) {
      console.error("Error submitting application:", error.message, error);
      setError(error.message || "Failed to submit application. Please try again.");
      setIsSubmitting(false);
    }
  };

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-gray-800/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div ref={modalRef} className="container mx-auto bg-white rounded-2xl shadow-sm shadow-blue-700 w-full max-w-lg sm:max-w-xl md:max-w-2xl overflow-y-auto max-h-[90vh]">
        <div className="p-4 sm:p-6 md:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-gray-600 hover:text-gray-800 rounded-full hover:bg-gray-100 transition-all duration-200"
            aria-label="Close modal"
          >
            <FaTimes className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Apply for: {job?.title}
          </h3>
          {error && (
            <div
              className="bg-red-100 border-l-4 border-red-500 text-red-700 p-3 sm:p-4 mb-6 rounded"
              role="alert"
            >
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm sm:text-base font-medium text-gray-700 mb-1"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm sm:text-base"
                placeholder="Enter your full name"
                required
                aria-required="true"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm sm:text-base font-medium text-gray-700 mb-1"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm sm:text-base"
                placeholder="Enter your email"
                required
                aria-required="true"
              />
            </div>
            <div>
              <label
                htmlFor="mobile"
                className="block text-sm sm:text-base font-medium text-gray-700 mb-1"
              >
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="mobile"
                id="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm sm:text-base"
                placeholder="Enter your mobile number"
                pattern="[0-9]{10}"
                required
                aria-required="true"
                title="Please enter a valid 10-digit mobile number"
              />
            </div>
            <div>
              <label
                htmlFor="educationalQualification"
                className="block text-sm sm:text-base font-medium text-gray-700 mb-1"
              >
                Educational Qualification <span className="text-red-500">*</span>
              </label>
              <textarea
                name="educationalQualification"
                id="educationalQualification"
                value={formData.educationalQualification}
                onChange={handleInputChange}
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm sm:text-base resize-y"
                rows="3"
                placeholder="E.g., B.Tech in Computer Science, IIT Delhi, 2020"
                required
                aria-required="true"
              ></textarea>
            </div>
            <div>
              <label
                htmlFor="workExperience"
                className="block text-sm sm:text-base font-medium text-gray-700 mb-1"
              >
                Work Experience
              </label>
              <textarea
                name="workExperience"
                id="workExperience"
                value={formData.workExperience}
                onChange={handleInputChange}
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm sm:text-base resize-y"
                rows="4"
                placeholder="E.g., Software Engineer, TCS, 2021-2023"
              ></textarea>
            </div>
            <div>
              <label
                htmlFor="skills"
                className="block text-sm sm:text-base font-medium text-gray-700 mb-1"
              >
                Skills
              </label>
              <input
                type="text"
                name="skills"
                id="skills"
                value={formData.skills}
                onChange={handleInputChange}
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm sm:text-base"
                placeholder="E.g., JavaScript, Python, Communication"
              />
            </div>
            <div>
              <label
                htmlFor="portfolioLink"
                className="block text-sm sm:text-base font-medium text-gray-700 mb-1"
              >
                LinkedIn/Portfolio Link (Optional)
              </label>
              <input
                type="url"
                name="portfolioLink"
                id="portfolioLink"
                value={formData.portfolioLink}
                onChange={handleInputChange}
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm sm:text-base"
                placeholder="E.g., https://linkedin.com/in/your-profile"
              />
            </div>
            <div>
              <label
                htmlFor="expectedSalary"
                className="block text-sm sm:text-base font-medium text-gray-700 mb-1"
              >
                Expected Salary (Per Month, INR)
              </label>
              <input
                type="number"
                name="expectedSalary"
                id="expectedSalary"
                value={formData.expectedSalary}
                onChange={handleInputChange}
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm sm:text-base"
                placeholder="E.g., 50000"
                min="0"
              />
            </div>
            <div>
              <label
                htmlFor="careerGoal"
                className="block text-sm sm:text-base font-medium text-gray-700 mb-1"
              >
                Career Goal
              </label>
              <textarea
                name="careerGoal"
                id="careerGoal"
                value={formData.careerGoal}
                onChange={handleInputChange}
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm sm:text-base resize-y"
                rows="3"
                placeholder="Describe your career objectives"
              ></textarea>
            </div>
            <div className="flex justify-end gap-3 sm:gap-4 mt-6">
              <button
                type="button"
                onClick={onClose}
                className="px-4 sm:px-6 py-2 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-all duration-200 disabled:opacity-50"
                disabled={isSubmitting}
                aria-label="Cancel application"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 sm:px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 disabled:opacity-50 flex items-center gap-2"
                disabled={isSubmitting}
                aria-label="Submit application"
              >
                {isSubmitting && (
                  <svg
                    className="animate-spin h-4 sm:h-5 w-4 sm:w-5 text-white"
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
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApplicationForm;