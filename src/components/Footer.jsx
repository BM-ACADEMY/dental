import React, { useState } from 'react';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaInstagram
} from 'react-icons/fa';
import Footerlogo from '../assets/logo.jpg';

const Footer = () => {
  const [openTerms, setOpenTerms] = useState(false);

  const handleOpenTerms = () => setOpenTerms(true);
  const handleCloseTerms = () => setOpenTerms(false);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="relative py-12 px-4 bg-black" id="contact">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo & Content */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img src={Footerlogo} alt="Footer Logo" className="h-16 w-40" />
            </div>
            <p className="text-white text-sm text-justify">
              GNR Dentistry blends expertise and compassion to create healthy, confident smiles with advanced, personalized care.
            </p>
          </div>

          {/* Column 2: Useful Links */}
          <div>
            <h3 className="text-lg font-bold gnr-gold-text mb-4 font-quicksand">USEFUL LINKS</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-white hover:text-white transition"
                  onClick={(e) => handleSmoothScroll(e, 'home')}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-white hover:text-white transition"
                  onClick={(e) => handleSmoothScroll(e, 'about')}
                >
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-bold gnr-gold-text mb-4 font-quicksand">CONTACT</h3>
            <address className="not-italic space-y-4">
              {/* Mannarkudi Branch */}
              <div className="space-y-2">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="mt-1 mr-3 text-white flex-shrink-0" />
                  <div>
                    <p className="text-white lowercase">103 CTH ROAD KAKALUR THIRUVALLUR 602003</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaPhone className="mr-3 text-white" />
                  <a href="tel:+918072225401" className="text-white">+91 8072225401</a>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="mr-3 text-white" />
                  <a href="mailto:gnrdentistry@gmail.com" className="text-white">gnrdentistry@gmail.com</a>
                </div>
              </div>
            </address>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h3 className="text-lg font-bold gnr-gold-text mb-4 font-quicksand">FOLLOW US</h3>
            <div className="flex space-x-4">
              <a href="" target="_blank" className="text-white hover:text-white transition">
                <FaInstagram size={30} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright and Terms */}
        <div className="mt-12 pt-6 border-t border-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white">
            © {new Date().getFullYear()} <a href="https://bmtechx.in" className="hover:text-yellow-300" target="_blank" rel="noopener noreferrer">BMTechx.in.</a> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;