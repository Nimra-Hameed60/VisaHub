import React from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20 md:py-20 px-6 md:px-16 text-center">
      
      <div className="max-w-4xl mx-auto">
        
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl font-semibold text-slate-900 leading-tight"
        >
          Building{" "}
          <span className="italic font-normal">bridges</span>{" "}
          for your <br />
          global future
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-slate-600 text-lg leading-relaxed"
        >
          Navigate the complex world of visas and immigration with ease. Our expert team provides tailored guidance to ensure a smooth and successful journey, no matter where you're headed.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          
          {/* Primary Button */}
          <button className="bg-linear-to-r from-blue-600 to-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:scale-105 transition duration-300 cursor-pointer">
            Immigration services
          </button>

          {/* Secondary Button */}
          <button className="flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-full text-lg text-slate-700 hover:bg-white hover:scale-105 transition duration-300 cursor-pointer">
            <Phone size={18} />
            Schedule a free call
          </button>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;