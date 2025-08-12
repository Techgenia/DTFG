import { motion } from "framer-motion";

const FeaturedCaseStudies = () => {
  const caseStudies = [
    {
      title: "E-commerce Optimization",
      description: "Implemented a scalable and efficient system to enhance online shopping experiences.",
      imageUrl: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
    },
    {
      title: "AI-Powered Analytics",
      description: "Developed an AI-based analytics dashboard that improved data-driven decision-making.",
      imageUrl: "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-gray-800">Featured Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
              className="p-4 sm:p-6 shadow-lg rounded-2xl bg-white text-gray-700"
            >
              <img
                src={caseStudy.imageUrl}
                alt={caseStudy.title}
                className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">{caseStudy.title}</h3>
              <p className="text-sm sm:text-base">{caseStudy.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Student Success Stories Section */}
        <div className="mt-12 sm:mt-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-gray-800">Student Success Stories</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-4 sm:p-6 rounded-2xl shadow-xl bg-white"
          >
            <img
              src="https://images.pexels.com/photos/8926648/pexels-photo-8926648.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Students Learning"
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-green-900">Empowering Future Coders</h3>
            <p className="text-sm sm:text-base text-gray-700">
              Our affordable computer classes have helped over <span className="font-bold">500+ students</span> gain
              hands-on programming skills and launch their careers in tech.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudies;