import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Cart1 from "../Images/Cart1.png";
import Cart2 from "../Images/Cart2.png";
import Cart3 from "../Images/Cart3.png";
import Cart4 from "../Images/Cart4.png";
import Cart5 from "../Images/Cart5.png";
import Cart6 from "../Images/Cart6.png";

const services = [
  { title: "Visa Application Assistance", desc: "Expert guidance through every step of your visa application process.", img: Cart1 },
  { title: "Permanent Residency Solutions", desc: "Helping you secure long-term residency in your desired country.", img: Cart2 },
  { title: "Citizenship Applications", desc: "Navigate the complexities of citizenship with personalized support.", img: Cart3 },
  { title: "Relocation and Settlement Support", desc: "Make your move seamless with our services.", img: Cart4 },
  { title: "Visa Refusal Appeals", desc: "Don't let refusal stop you. We help you move forward.", img: Cart5 },
  { title: "Family Sponsorship Visa", desc: "Reunite with loved ones through sponsorship.", img: Cart6 },
];

const ServicesSection = () => {
  const scrollRef = useRef();

  const scroll = (dir) => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector(".card");
      if (!card) return;

      const gap = 16;
      const cardWidth = card.offsetWidth + gap;

      scrollRef.current.scrollBy({
        left: dir === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-10 px-4 sm:px-6 md:px-16">

      {/* Heading */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
          Expert <span className="italic font-light">solutions</span> for your needs
        </h2>

        <div className="md:flex gap-2">
          <button onClick={() => scroll("left")} className="text-2xl cursor-pointer">←</button>
          <button onClick={() => scroll("right")} className="text-2xl cursor-pointer">→</button>
        </div>
      </div>

      {/* Slider */}
      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-8 h-[400px] lg:h-[480px] overflow-x-auto md:overflow-hidden scroll-smooth snap-x snap-mandatory mt-5"
      >

        {services.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="card 
              w-[280px] sm:w-[300px] md:w-[350px]
              h-[420px]
              bg-blue-50 rounded-2xl shadow-md 
              group hover:shadow-xl flex-shrink-0 snap-start flex flex-col cursor-pointer mt-10"
          >

            {/* Image */}
            <div className="relative overflow-hidden rounded-t-2xl h-56">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute top-3 right-3 bg-black text-white p-2 rounded-full group-hover:scale-110 transition">
                <ArrowUpRight size={18} />
              </div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 group-hover:text-blue-600">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm lg:text-lg leading-relaxed">
                {item.desc}
              </p>
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default ServicesSection;