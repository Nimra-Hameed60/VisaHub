import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

import Emma from "../Images/Emma.png";
import Jhon from "../Images/Jhon.png";
import Rounting from "../Images/Rouinting.png";

const data = [
  {
    id: 1,
    title: "Emma’s study abroad dream",
    desc: "Successfully navigated financial documentation issues and university requirements, enabling her to study at a top Canadian university.",
    img: Emma
  },
  {
    id: 2,
    title: "John’s path to permanent residency",
    desc: "Overcoming challenges with incomplete documentation and complex immigration policies to secure permanent residency within six months.",
    img: Jhon
  },
  {
    id: 3,
    title: "Reuniting the patel family",
    desc: "Resolved family sponsorship hurdles, reuniting the Patel family with their son in the UK without delays.",
    img: Rounting
  }
];

export default function CaseStudy() {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < data.length - 1) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className=" py-20 px-6 md:px-16">

      {/* Heading */}
      <h2 className="text-center text-3xl md:text-5xl font-semibold mb-16">
        Inspiring <span className="italic">client </span> case studies
      </h2>

      {/* Slider */}
      <div className="max-w-6xl mx-auto relative">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            
            {/* Image */}
            <div className="rounded-3xl overflow-hidden shadow-md">
              <img
                src={data[index].img}
                alt=""
                className="w-full h-105 object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                {data[index].title}
              </h3>

              <p className="text-gray-500 mb-8 leading-relaxed">
                {data[index].desc}
              </p>

              <button className="bg-[#0f172a] hover:bg-blue-600 transition text-white px-6 py-3 rounded-full text-xl cursor-pointer">
                View case study
              </button>
            </div>

          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        <div className="flex justify-end items-center gap-6 mt-10">
          
          <button
            onClick={prev}
            className="p-3 rounded-full border hover:bg-black hover:text-white transition cursor-pointer"
          >
            <ArrowLeft size={18} />
          </button>

          <button
            onClick={next}
            className="p-3 rounded-full border hover:bg-black hover:text-white transition cursor-pointer"
          >
            <ArrowRight size={18} />
          </button>

        </div>
      </div>
    </div>
  );
}