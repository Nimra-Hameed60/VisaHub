import React, { useState } from 'react';
import Logo from '../Images/Logo.png';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Pages", path: "#" },
    { name: "Immigration", path: "/immigration" },
    { name: "Blog", path: "/blog" }
  ];

  const dropdownItems = [
    { name: "Home", path: "/" },
    { name: "Home 2", path: "/" },
    { name: "Immigration", path: "/immigration" },
    { name: "Visas", path: "/visas" },
    { name: "Countries", path: "/countries" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Agents", path: "/agents" },
    { name: "Abouts", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy-policy" }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="flex justify-between items-center py-5 px-6 md:px-8 lg:px-12 xl:px-8 2xl:px-32 max-w-7xl mx-auto">
        
        {/* Logo */}
        <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
          <img className="w-28 md:w-32 lg:w-36 xl:w-40" src={Logo} alt="logo" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 xl:gap-12 font-semibold text-lg items-center">
          {navLinks.map((link) => (
            <li key={link.name} className="relative group cursor-pointer py-2">
              {link.name !== "Pages" ? (
                <Link
                  to={link.path}
                  className="hover:text-blue-600 transition duration-300"
                >
                  {link.name}
                </Link>
              ) : (
                <>
                  {/* Pages Button */}
                  <div className="flex items-center gap-1">
                    <span className="group-hover:text-blue-600 transition duration-300">Pages</span>
                    <ChevronDown
                      size={18}
                      className="group-hover:rotate-180 transition"
                    />
                  </div>

                  {/* Dropdown */}
                  <ul
                    className="absolute left-0 top-full mt-3 opacity-0 invisible group-hover:visible group-hover:opacity-100 bg-white shadow-xl rounded-xl py-3 w-64 transition-all duration-200 z-50 border border-gray-100"
                  >
                    {dropdownItems.map((item) => (
                      <li key={item.name}>
                        <Link
                          to={item.path}
                          className="block px-5 py-2 hover:text-blue-600 hover:bg-blue-50 transition"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <button
          onClick={() => navigate("/contact")}
          className="hidden md:block bg-black text-white px-7 py-2 rounded-full hover:bg-blue-600 transition duration-300 font-medium"
        >
          Get Started
        </button>

        {/* Mobile Icon */}
        <div className="md:hidden">
          {menuOpen ? (
            <X size={30} className="cursor-pointer" onClick={() => setMenuOpen(false)} />
          ) : (
            <Menu size={30} className="cursor-pointer" onClick={() => setMenuOpen(true)} />
          )}
        </div>

        {/* Mobile Menu Sidebar */}
        {menuOpen && (
          <div className="fixed inset-0 bg-white z-[60] flex flex-col p-6 md:hidden overflow-y-auto">
            
            {/* Sidebar Header */}
            <div className="flex justify-between items-center mb-10">
              <div
                className="flex items-center cursor-pointer"
                onClick={() => {
                  navigate("/");
                  setMenuOpen(false);
                }}
              >
                <img className="w-28" src={Logo} alt="logo" />
              </div>
              <X size={32} className="cursor-pointer" onClick={() => setMenuOpen(false)} />
            </div>

            {/* Sidebar Navigation Links */}
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-gray-100 pb-4">
                  {link.name !== "Pages" ? (
                    <p
                      onClick={() => {
                        navigate(link.path);
                        setMenuOpen(false);
                      }}
                      className="text-xl font-semibold hover:text-blue-600 cursor-pointer transition duration-200"
                    >
                      {link.name}
                    </p>
                  ) : (
                    <>
                      <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => setPagesOpen(!pagesOpen)}
                      >
                        <span className="text-xl font-semibold hover:text-blue-600 transition duration-200">Pages</span>
                        <ChevronDown
                          className={`transition-transform duration-200 ${pagesOpen ? "rotate-180" : ""}`}
                        />
                      </div>

                      {pagesOpen && (
                        <div className="ml-4 mt-3 space-y-3 max-h-60 overflow-y-auto">
                          {dropdownItems.map((item) => (
                            <p
                              key={item.name}
                              onClick={() => {
                                navigate(item.path);
                                setMenuOpen(false);
                              }}
                              className="text-gray-600 hover:text-blue-600 cursor-pointer transition duration-200 py-1"
                            >
                              {item.name}
                            </p>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}

              <button
                onClick={() => {
                  navigate("/contact");
                  setMenuOpen(false);
                }}
                className="w-full bg-black text-white py-3 rounded-full hover:bg-blue-600 transition font-semibold mt-4"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;