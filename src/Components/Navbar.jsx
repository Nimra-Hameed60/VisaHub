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
    <nav className="flex justify-between items-center py-5 px-6 md:px-8 lg:px-12 xl:px-8 2xl:px-32 max-w-7xl mx-auto top-0 z-50 relative">

      {/* Logo */}
      <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
        <img className="w-28 md:w-32 lg:w-36 xl:w-40" src={Logo} alt="logo" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex gap-8 xl:gap-12 font-semibold text-lg">

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
                  <span className="group-hover:text-blue-600">Pages</span>
                  <ChevronDown
                    size={18}
                    className="group-hover:rotate-180 transition"
                  />
                </div>

                {/* Dropdown FIXED */}
                <ul
                  className="absolute left-0 top-full mt-3
                  opacity-0 invisible group-hover:visible group-hover:opacity-100
                  bg-white shadow-xl rounded-xl py-3 w-64
                  transition-all duration-200 z-50"
                >
                  {dropdownItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.path}
                        className="block px-5 py-2 hover:text-blue-600 hover:bg-blue-50"
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
        className="hidden md:block bg-black text-white px-7 py-2 rounded-full hover:bg-blue-600 transition"
      >
        Get Started
      </button>

      {/* Mobile Icon */}
      <div className="md:hidden">
        {menuOpen ? (
          <X size={30} onClick={() => setMenuOpen(false)} />
        ) : (
          <Menu size={30} onClick={() => setMenuOpen(true)} />
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden px-6 py-6 space-y-4 z-50">

          {navLinks.map((link) => (
            <div key={link.name}>

              {link.name !== "Pages" ? (
                <p
                  onClick={() => {
                    navigate(link.path);
                    setMenuOpen(false);
                  }}
                  className="text-lg font-semibold hover:text-blue-600 cursor-pointer"
                >
                  {link.name}
                </p>
              ) : (
                <>
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => setPagesOpen(!pagesOpen)}
                  >
                    <span className="text-lg font-semibold">Pages</span>
                    <ChevronDown className={`${pagesOpen ? "rotate-180" : ""}`} />
                  </div>

                  {pagesOpen && (
                    <div className="ml-4 mt-2 space-y-2">
                      {dropdownItems.map((item) => (
                        <p
                          key={item.name}
                          onClick={() => {
                            navigate(item.path);
                            setMenuOpen(false);
                          }}
                          className="hover:text-blue-600 cursor-pointer"
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
            className="w-full mt-4 bg-black text-white py-3 rounded-full hover:bg-blue-600 cursor-pointer"
          >
            Get Started
          </button>

        </div>
      )}

    </nav>
  );
};

export default Navbar;