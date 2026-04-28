import React from "react";
import { motion } from "framer-motion";
import Graph from "../Images/graph.png";
import aboutus from "../Images/aboutus.png";

const AboutUS = () => {
  return (
    <section className="bg-white px-6 md:px-16 py-10 overflow-visible">

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full mb-20"
      >
        <img
          src={aboutus}
          alt="hero"
          className="w-full h-100 md:h-150 object-cover rounded-4xl shadow-lg"
        />
      </motion.div>

      {/* Second Section */}
      <div className="relative w-full flex flex-col lg:flex-row items-start gap-8">

        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 h-87.5 md:h-125 relative"
        >
          <img
            src={Graph}
            alt="about"
            className="w-full h-full object-cover opacity-70 rounded-2xl"
          />
          <div className="absolute inset-0 bg-white/40 rounded-2xl"></div>
        </motion.div>

        {/* Right Content (Wider on bigger screens, full on small screens) */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-3/5 flex flex-col relative z-10"
        >
          <p className="text-3xl md:text-4xl font-semibold mb-6 leading-snug text-gray-900">
            We are dedicated to helping individuals and families navigate the complex world of visas and immigration with ease. With years of experience and a commitment to personalized service, our team of experts provides end-to-end support, from initial consultation to visa approval.
          </p>

          <button className="bg-linear-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition w-max cursor-pointer">
            Know more about us
          </button>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10 text-left">
            {[
              { number: "10K+", text: "Assisting thousands of clients in achieving their global goals." },
              { number: "98%", text: "Consistently achieving successful visa outcomes." },
              { number: "18+", text: "Expert guidance throughout immigration journey." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h2 className="text-4xl font-bold text-gray-900">
                  {item.number.slice(0, -1)}
                  <span className="text-blue-600">{item.number.slice(-1)}</span>
                </h2>

                <p className="text-gray-500 mt-2 text-sm">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default AboutUS;