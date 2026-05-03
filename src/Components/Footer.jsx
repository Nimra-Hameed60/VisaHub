import React from 'react';
import { Send } from 'lucide-react';
import logo from '../Images/FavIcon.ico';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0b1120] text-gray-400 py-16 px-6 sm:px-12 lg:px-24 font-sans">
      
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-gray-800 pb-12">
        
        {/* Section 1 */}
        <div className="md:col-span-4">
          <div className="flex items-center gap-3 mb-8">
            <img src={logo} alt="Logo" className="h-14 w-14 object-contain" />
            <h2 className="text-4xl font-semibold text-white tracking-wide">
              Visa<span className='italic font-normal'>Hub</span> 
            </h2>
          </div>

          <p className="text-white font-medium mb-4 md:mt-30 md:text-2xl">
            Subscribe to our newsletter
          </p>

          <div className="relative max-w-sm">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="w-full bg-[#1e293b] rounded-md py-3 pl-4 pr-12 text-sm text-white outline-none"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 p-2 rounded-md hover:bg-blue-700 transition cursor-pointer">
              <Send size={16} className="text-white" />
            </button>
          </div>
        </div>

        {/* Section 2 */}
        <div className="md:col-span-4 grid grid-cols-2 gap-8 text-lg">
          <div>
            <h3 className="text-white font-bold mb-6 text-lg md:text-2xl">Pages</h3>
            <ul className="space-y-3">
              {['Home', 'Immigration', 'Visas', 'Countries', 'Case Studies'].map(item => (
                <li key={item} className="hover:text-white cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <ul className="space-y-3">
              {['Testimonials', 'Agents', 'About', 'Blog', 'Contact', 'Privacy Policy'].map(item => (
                <li key={item} className="hover:text-white cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Section 3 */}
        <div className="md:col-span-4 grid grid-cols-2 gap-8 text-lg">
          <div>
            <h3 className="text-white font-bold mb-6 text-lg md:text-2xl">Utility</h3>
            <ul className="space-y-3">
              {['Style Guide', 'Instructions', 'Licenses', 'Changelog', 'Coming Soon'].map(item => (
                <li key={item} className="hover:text-white cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

        
        </div>

      </div>

      {/* BOTTOM SECTION */}
      <div className="max-w-7xl mx-auto mt-12">
        
        {/* Contact + Location */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-10 border-b border-gray-800">
          
          {/* Contact */}
          <div>
            <h3 className="text-white text-lg md:text-2xl font-semibold mb-4">Contact on</h3>
            <div className="space-y-2">
             <p className="text-lg ">
  (91) 125 879 786 &nbsp; <br/>(+85) 578 666 333
</p>
              <p className="text-lg hover:text-white transition cursor-pointer">
                example@gmail.com
              </p>
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-white text-lg md:text-2xl font-semibold mb-4">Office location</h3>
            <div className="flex items-start gap-3">
              
              <div className="mt-1 text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>

              <div className="text-sm space-y-1">
                <p className='text-lg'><span className="text-white font-medium text-lg">Las Vegas</span> - 4th Floor, Plot No.22,145 Murphy Canyon Rd.</p>
                <p className='text-lg'>Mon-Sat: <span className="text-white text-lg">9 AM – 6 PM</span></p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4">
          <p className="text-lg">
            Designed by <span className="text-white font-bold cursor-pointer">Nimra Hameed</span>, Powered by <span className="text-white font-bold cursor-pointer">Tanveer</span>
          </p>

          <div className="flex gap-4">
            {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, index) => (
              <a key={index} href="#" className="bg-gray-800 p-2 rounded hover:bg-blue-600 transition text-white">
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

      </div>

    </footer>
  );
};

export default Footer;