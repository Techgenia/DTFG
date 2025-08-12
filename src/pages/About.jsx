import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();

  // const teamMembers = [
  //     {
  //         name: "Sourav Das",
  //         role: "Founder & Lead Instructor",
  //         image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
  //     },
  //     {
  //         name: "Kousik",
  //         role: "HR",
  //         image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
  //     },
  //     {
  //         name: "Sumit Achar",
  //         role: "UI/UX Designer and Senior Web Developer",
  //         image: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg",
  //     },
  //     {
  //         name: "Kuntal",
  //         role: "Marketing",
  //         image: "https://images.pexels.com/photos/3778685/pexels-photo-3778685.jpeg",
  //     },
  // ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 font-anta">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-gray-800"
        >
          About Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="About Us"
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-2xl shadow-lg"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
              Who We Are
            </h3>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
              Techgenia Digital Solutions: Nurturing Excellence in Technology
              and Communication Education In the contemporary landscape of rapid
              technological advancement, continuous learning is not just a
              preference; it's a necessity. Techgenia Digital Solutions emerges
              as a beacon in the realm of technology and communication learning
              platforms, offering a diverse array of courses that cater to both
              students and professionals seeking to enhance their skills and
              stay ahead in today's dynamic job market. At the core of Techgenia
              Digital Solutions's offerings is a comprehensive suite of computer
              courses designed to provide a strong foundation for learners. From
              the essential Computer Fundamentals to proficiency in Microsoft
              Office, the platform ensures that students grasp the basics before
              delving into more complex subjects. This structured approach is
              particularly beneficial for beginners, establishing a solid
              groundwork upon which to build more advanced skills. One of
              Techgenia Digital Solutions's standout features is its commitment
              to programming languages, covering a spectrum that includes C,
              C++, Python, Java, C#, and .NET. These courses not only teach the
              syntax and semantics of each language but also emphasize practical
              application through hands-on projects. This practical approach is
              instrumental in bridging the gap between theoretical knowledge and
              real-world implementation, preparing learners for success in
              software development and programming roles.
            </p>
          </motion.div>
        </div>

        {/* Our History Section */}
        <div className="mt-12 sm:mt-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-gray-800"
          >
            Our History
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-4 sm:p-6 bg-purple-200 rounded-2xl shadow-lg text-left"
          >
            <p className="text-gray-700 text-sm sm:text-base md:text-lg">
              Established in <span className="font-bold">2020</span>, we started
              as a small initiative to teach coding to students who couldn’t
              afford expensive courses. Over the years, we have trained over
              <span className="font-bold"> 500+ students</span>, helping them
              build careers in software development.
            </p>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <div className="mt-12 sm:mt-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-gray-900"
          >
            Our Core Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                title: "Innovation",
                desc: "We embrace creativity and innovation to solve challenges in tech.",
              },
              {
                title: "Integrity",
                desc: "Honesty and transparency are at the core of our mission.",
              },
              {
                title: "Empowerment",
                desc: "We strive to empower students and professionals with quality skills.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-4 sm:p-6 bg-yellow-200 rounded-2xl shadow-lg"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-yellow-900">
              Our Mission
            </h3>
            <p className="text-gray-700 text-sm sm:text-base">
              To make technology education accessible and affordable for
              everyone, enabling them to build successful careers in the digital
              world.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="p-4 sm:p-6 bg-blue-200 rounded-2xl shadow-lg"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-blue-900">
              Our Vision
            </h3>
            <p className="text-gray-700 text-sm sm:text-base">
              To create a world where learning to code is simple, fun, and
              accessible to students from all backgrounds.
            </p>
          </motion.div>
        </div>

        {/* Student & Community Section */}
        <div className="mt-12 sm:mt-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-gray-800"
          >
            Our Students & Community
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-4 sm:p-6 bg-green-200 rounded-2xl shadow-lg"
          >
            <img
              src="https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg"
              alt="Students"
              className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-green-900">
              Affordable Learning for Everyone
            </h3>
            <p className="text-gray-700 text-sm sm:text-base">
              We offer{" "}
              <span className="font-bold">low-cost computer courses</span> to
              help students gain hands-on experience in web development,
              software engineering, and more.
            </p>
          </motion.div>
        </div>

        {/* Our Team Section */}
        {/* <div className="mt-12 sm:mt-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-gray-800"
                    >
                        Meet Our Team
                    </motion.h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg text-center"
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 mx-auto rounded-full object-cover shadow-md mb-4"
                                />
                                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">{member.name}</h3>
                                <p className="text-gray-600 text-sm sm:text-base">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div> */}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-12 sm:mt-16 bg-blue-600/50 text-white p-6 sm:p-8 rounded-xl text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Join Our Mission
          </h2>
          <p className="mt-2 text-base sm:text-lg md:text-xl">
            Empowering the next generation of tech professionals. Be a part of
            our journey!
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="relative mt-4 bg-white text-blue-600 font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg overflow-hidden transition-all duration-300 before:absolute before:top-0 before:left-0 before:w-1/2 before:h-full before:bg-gray-200 before:transition-all before:duration-300 before:z-0 hover:before:w-full"
          >
            <span className="relative z-10">Contact Us</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
