import React from "react";
import aboutimg1 from "../Images/aboutimg1.png";
import aboutimg2 from "../Images/aboutimg2.png";
import expert1 from '../Images/expert1.png'
import expert2 from '../Images/expert2.png'
import expert3 from '../Images/expert3.png'
import expert4 from '../Images/expert4.png'
import expert5 from '../Images/expert5.png'
import global from '../Images/graph.png'

const About = () => {
  return (
    <div>

      {/* ===== HERO SECTION ===== */}
      <section className="bg-white py-20 px-4 md:px-10 text-center">

        <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight max-w-4xl mx-auto">
          Simplifying your{" "}
          <span className="italic font-normal">immigration</span> journey with us
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-6 mt-6 text-gray-600 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <span className="text-blue-500">›</span>
            <p>Expert team</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-blue-500">›</span>
            <p>High approval rates</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-blue-500">›</span>
            <p>Fast and reliable service</p>
          </div>
        </div>

        <div className="mt-8">
          <button className="bg-linear-to-r from-blue-600 to-blue-500 text-white px-8 py-3 rounded-full text-lg font-medium shadow-md hover:scale-105 transition">
            Start your journey
          </button>
        </div>

      </section>

      {/* ===== IMAGE + STATS ===== */}
      <section className="bg-white px-4 md:px-10 pb-20">

        <div className="grid md:grid-cols-12 gap-6 items-stretch">

          <div className="md:col-span-7 rounded-3xl overflow-hidden">
            <img
              src={aboutimg1}
              alt="team 1"
              className="w-full h-105 object-cover rounded-3xl"
            />
          </div>

          <div className="md:col-span-5 rounded-3xl overflow-hidden">
            <img
              src={aboutimg2}
              alt="team 2"
              className="w-full h-105 object-cover rounded-3xl"
            />
          </div>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mt-12">

          <div>
            <h2 className="text-4xl font-bold text-gray-900">
              10K<span className="text-blue-600">+</span>
            </h2>
            <p className="text-gray-500 mt-2">Achieving their global goals</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gray-900">
              98<span className="text-blue-600">%</span>
            </h2>
            <p className="text-gray-500 mt-2">Successful visa outcomes</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gray-900">
              18<span className="text-blue-600">+</span>
            </h2>
            <p className="text-gray-500 mt-2">Expert guidance</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gray-900">
              15<span className="text-blue-600">+</span>
            </h2>
            <p className="text-gray-500 mt-2">Visa services</p>
          </div>

        </div>

      </section>

      {/* ===== WHO WE ARE ===== */}
      <section className="bg-white py-20 px-4 md:px-10">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Who we are
          </h2>

          <p className="text-gray-600 leading-relaxed">
            We are a dedicated visa and immigration agency committed to helping individuals and families achieve their dreams of living, working, and studying abroad. With years of experience and a team of experts, we simplify the complexities of immigration processes.
          </p>

          <p className="text-gray-600 leading-relaxed mt-4">
            Our team offers personalized services including visa assistance, travel arrangements, and complete documentation support for a smooth experience.
          </p>

        </div>

        <div className="max-w-5xl mx-auto mt-16 grid md:grid-cols-2 gap-10 text-center">

          <div className="bg-[#f7f9fc] p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-4">Our mission</h3>
            <p className="text-gray-600">
              Providing tailored visa and immigration solutions to help people achieve their global aspirations.
            </p>
          </div>

          <div className="bg-[#f7f9fc] p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-4">Our vision</h3>
            <p className="text-gray-600">
              To be a trusted partner, guiding individuals and families toward a brighter future abroad.
            </p>
          </div>

        </div>

      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="bg-white py-20 px-4 md:px-10">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900">
            Why <span className="italic font-normal">choose</span> us
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-[#f3f6ff] rounded-3xl p-8 text-left hover:shadow-lg transition">
            <div className="text-blue-600 text-4xl mb-6">⭐</div>
            <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
            <p className="text-gray-600">
              Our team is available around the clock to assist you.
            </p>
          </div>

          <div className="bg-[#f3f6ff] rounded-3xl p-8 text-left hover:shadow-lg transition">
            <div className="text-blue-600 text-4xl mb-6">👥</div>
            <h3 className="text-xl font-semibold mb-3">Personalized solutions</h3>
            <p className="text-gray-600">
              Every case is unique, and we tailor our services to meet your specific needs.
            </p>
          </div>

          <div className="bg-[#f3f6ff] rounded-3xl p-8 text-left hover:shadow-lg transition">
            <div className="text-blue-600 text-4xl mb-6">⚙️</div>
            <h3 className="text-xl font-semibold mb-3">Transparent process</h3>
            <p className="text-gray-600">
              Clear communication and guidance at every step.
            </p>
          </div>

        </div>

      </section>

            {/* ===== OUR VISA EXPERTS SECTION ===== */}
      <section className="bg-white py-20 px-4 md:px-10 text-center">
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-16">
          Our <span className="italic font-normal">visa</span> experts
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          
          {/* Expert 1 */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-100 shadow-sm mb-4">
              <img src={expert1} alt="Sarah Mitchell" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Sarah Mitchell</h3>
            <p className="text-gray-500">Immigration Specialist</p>
          </div>

          {/* Expert 2 */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-100 shadow-sm mb-4">
              <img src={expert2} alt="David Carter" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">David Carter</h3>
            <p className="text-gray-500">Visa Consultant</p>
          </div>

          {/* Expert 3 */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-100 shadow-sm mb-4">
              <img src={expert3} alt="Maria Gonzales" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Maria Gonzales</h3>
            <p className="text-gray-500">Family Visa Specialist</p>
          </div>

          {/* Expert 4 */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-100 shadow-sm mb-4">
              <img src={expert4} alt="Ahmed Khan" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Ahmed Khan</h3>
            <p className="text-gray-500">Work Visa Expert</p>
          </div>

          {/* Expert 5 */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-100 shadow-sm mb-4">
              <img src={expert5} alt="Emily Johnson" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Emily Johnson</h3>
            <p className="text-gray-500 text-center">Study Abroad Consultant</p>
          </div>

        </div>
      </section>

            {/* ===== FINAL CTA SECTION ===== */}
      <section className="bg-white py-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto bg-blue-600 rounded-[40px] p-8 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between min-h-100">
          
          {/* Content Side */}
          <div className="relative z-10 text-white max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-semibold leading-tight mb-8">
              Ready to start your <span className="italic font-normal">immigration</span> journey?
            </h2>

            <div className="flex flex-wrap gap-6 mb-10 text-sm md:text-base opacity-90">
              <div className="flex items-center gap-2">
                <span className="border border-white/40 rounded-full w-5 h-5 flex items-center justify-center text-[10px]">✓</span>
                <p>Tailored solutions</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="border border-white/40 rounded-full w-5 h-5 flex items-center justify-center text-[10px]">✓</span>
                <p>Expert team</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="border border-white/40 rounded-full w-5 h-5 flex items-center justify-center text-[10px]">✓</span>
                <p>High approval rates</p>
              </div>
            </div>

            <button className="bg-[#1a1a1a] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-black transition-all shadow-xl">
              Schedule a free call
            </button>
          </div>

          {/* Globe/Image Side */}
          <div className="absolute right-0 top-0 h-full w-full md:w-1/2 flex justify-end items-center opacity-40 md:opacity-100">
             {/* Yahan aap apni globe image laga sakte hain */}
             <img 
               src={global}
               alt="globe" 
               className="h-full object-contain object-right pointer-events-none translate-x-10"
             />
          </div>
          
        </div>
      </section>


    </div>
  );
};

export default About;