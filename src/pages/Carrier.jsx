import React, { useState } from "react";
import { FaUsers, FaRocket, FaLightbulb, FaHandshake, FaHeart, FaBriefcase } from "react-icons/fa";
import JobApplicationForm from "../components/JobApplicationForm";

const jobListings = [
  { title: "Frontend Developer", location: "Remote", type: "Full-time", desc: "Looking for a skilled React developer with experience in Tailwind CSS and Next.js." },
  { title: "Backend Developer", location: "Kolkata, India", type: "Full-time", desc: "Seeking an experienced Node.js developer with knowledge of MongoDB and Express.js." },
  { title: "UI/UX Designer", location: "Hybrid", type: "Part-time", desc: "Creative designer needed for web and mobile applications with Figma & Adobe XD expertise." },
  { title: "Marketing Specialist", location: "Remote", type: "Full-time", desc: "Digital marketing expert required with knowledge of SEO, SEM, and social media strategies." }
];

const Careers = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setSelectedJob(null);
  };

  return (
    <section className="bg-gray-100 py-12 sm:py-16 md:py-20 px-4">
      {/* Header Section */}
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-700">Join Our Team</h2>
        <p className="text-gray-600 mt-3 text-base sm:text-lg md:text-xl">We’re looking for passionate individuals to grow with us.</p>
      </div>

      {/* Job Listings */}
      <div className="container mx-auto mt-12 sm:mt-16">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">Current Openings</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 mt-6">
          {jobListings.map((job, index) => (
            <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-600">{job.title}</h4>
              <p className="text-gray-500 text-xs sm:text-sm">{job.location} • {job.type}</p>
              <p className="text-gray-700 mt-3 text-sm sm:text-base">{job.desc}</p>
              <button
                onClick={() => handleApplyClick(job)}
                className="mt-4 bg-blue-600 text-white font-semibold px-4 sm:px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Application Form Modal */}
      {showForm && <JobApplicationForm job={selectedJob} onClose={closeForm} />}

      {/* Why Join Us? Section */}
      <div className="container mx-auto mt-12 sm:mt-16 bg-white shadow-lg rounded-lg p-6 sm:p-8 text-center">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700">Why Work With Us?</h3>
        <p className="text-gray-600 mt-3 text-base sm:text-lg md:text-xl">We provide a great work culture, exciting projects, and career growth opportunities.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8">
          <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md flex flex-col items-center">
            <FaUsers size={32} className="text-blue-600 mb-3 sm:size-40" />
            <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">Great Team</h4>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">Work with experienced professionals in a collaborative environment.</p>
          </div>
          <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md flex flex-col items-center">
            <FaRocket size={32} className="text-green-600 mb-3 sm:size-40" />
            <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">Career Growth</h4>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">Opportunities to learn, grow, and take on leadership roles.</p>
          </div>
          <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md flex flex-col items-center">
            <FaLightbulb size={32} className="text-yellow-500 mb-3 sm:size-40" />
            <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">Innovative Projects</h4>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">Work on cutting-edge technologies and exciting challenges.</p>
          </div>
          <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md flex flex-col items-center">
            <FaHandshake size={32} className="text-purple-600 mb-3 sm:size-40" />
            <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">Work-Life Balance</h4>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">Flexible work schedules and remote options available.</p>
          </div>
          <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md flex flex-col items-center">
            <FaHeart size={32} className="text-red-500 mb-3 sm:size-40" />
            <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">Employee Well-being</h4>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">Health benefits, paid leaves, and a supportive environment.</p>
          </div>
          <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md flex flex-col items-center">
            <FaBriefcase size={32} className="text-indigo-600 mb-3 sm:size-40" />
            <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">Competitive Salary</h4>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">We offer industry-leading salaries and performance bonuses.</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto text-center mt-12 sm:mt-16">
        <button className="relative bg-blue-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg overflow-hidden transition-all duration-300 before:absolute before:top-0 before:left-0 before:w-1/2 before:h-full before:bg-white before:opacity-20 before:transition-all before:duration-300 before:z-0 hover:before:w-full hover:before:bg-gray-200 hover:text-blue-700">
          <span className="relative z-10">Explore More Jobs</span>
        </button>
      </div>
    </section>
  );
};

export default Careers;