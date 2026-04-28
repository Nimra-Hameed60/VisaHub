import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import AboutUS from './Components/AboutUS';
import ServicesSection from './Components/ServicesSection';
import ImmigrationSteps from './Components/ImmigrationSteps';
import GlobalReach from './Components/GlobalReach';
import CaseStudy from './Components/CaseStudy';
import TypesSection from './Components/TypesSection';
import FAQ from './Components/FAQ';
import Blog from './Components/Blog';
import About from './Components/About';
import Contact from './Components/Contact'
import Footer from './Components/Footer';


// ✅ Home Page
const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-linear-to-b from-[#75b7f080] to-[#f5f5f8ad]">
        <Hero />
      </div>

      <div className="bg-white">
        <AboutUS />
        <ServicesSection />
        <ImmigrationSteps />
        <GlobalReach />
        <CaseStudy />
        <TypesSection />
        <FAQ />
        <Blog />
      </div>
    </>
  );
};


// ✅ Layout (Navbar + Footer control)
const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <Navbar isHome={isHome} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} className='bg-white' />
        <Route path="/blog" element={<Blog />} />
        <Route path="/immigration" element={<ImmigrationSteps />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
};


const App = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

export default App;