'use client';

import { FaHardHat, FaPhone, FaMapMarkerAlt, FaEnvelope, FaArrowUp, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-[#1A2A52] text-white relative overflow-hidden">
        {/* Orange accent bar */}
        <div className="h-1 bg-gradient-to-r from-[#F36A2D] to-[#E85C24]"></div>
        
        {/* Background pattern */}
        <div className="absolute inset-0 hero-pattern opacity-5"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                        <img src="/logo.png" alt="logo" className='w-[70px] bg-white p-1 rounded-sm' />
                <div>
                  <h3 className="text-2xl font-bold">AK SCAFFOLDING</h3>
                  <p className="text-gray-400 text-sm">Steel. Strength. Safety.</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Leading scaffolding supplier in Hyderabad with over 15 years of experience. 
                We provide premium-quality scaffolding materials engineered for strength, 
                safety, and precision across Telangana.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-[#F36A2D] rounded-full flex items-center justify-center transition-colors duration-300">
                  <FaFacebook className="text-sm" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-[#F36A2D] rounded-full flex items-center justify-center transition-colors duration-300">
                  <FaTwitter className="text-sm" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-[#F36A2D] rounded-full flex items-center justify-center transition-colors duration-300">
                  <FaLinkedin className="text-sm" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-[#F36A2D] rounded-full flex items-center justify-center transition-colors duration-300">
                  <FaInstagram className="text-sm" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-[#F36A2D]">Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'Services', 'About Us', 'Gallery', 'Contact'].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(' ', '')}`}
                      className="text-gray-300 hover:text-[#F36A2D] transition-colors duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>

           
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-[#F36A2D]">Contact Info</h4>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="text-[#F36A2D] mt-1 flex-shrink-0" />
                  <div className="text-sm text-gray-300">
                    <p>1-4-523/1, Beside Line United</p>
                    <p>Weight Bridge, Near Badi Masjid,</p>
                    <p>Bholakpur, Musheerabad,</p>
                    <p>Hyderabad – 500020, T.S.</p>
                  </div>
                </div>

        

                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-[#F36A2D]" />
                  <div className="text-sm text-gray-300">
                    <p>akscaffolding.hyd@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="mt-6 p-4 bg-[#F36A2D]/20 rounded-lg border border-[#F36A2D]/30">
                <h5 className="font-semibold text-[#F36A2D] mb-2">24/7 Emergency</h5>
                <a href="tel:9705899998" className="text-white font-semibold text-lg hover:underline">
                                    +91 97058 99998
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-600 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 sm:mb-0">
              © 2025 AK Scaffolding. All rights reserved. | Best Scaffolding in Hyderabad
            </p>
            
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <a href="#" className="hover:text-[#F36A2D] transition-colors duration-300">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-[#F36A2D] transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-[#F36A2D] hover:bg-[#E85C24] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-40 animate-fade-scale"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default Footer;