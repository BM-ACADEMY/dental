import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/logo.jpg';
import AppointmentModal from './Modal'; // Import the new Modal component

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal

  // Track scroll for navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Reviews', id: 'reviews' },
    { name: 'Contact', id: 'contact' },
    { name: 'Appointment', id: 'appointment' }, // New Appointment link
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.pushState(null, '', '#home');
    setIsOpen(false);
  };

  const handleNavClick = (id) => {
    if (id === 'appointment') {
      setIsModalOpen(true); // Open modal for Appointment
      setIsOpen(false); // Close mobile menu
    } else {
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
        window.history.pushState(null, '', `#${id}`);
      }
      setIsOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 !bg-black left-0 w-full z-50 transition-colors duration-300 ${
          isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-xl' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.6, 0.05, -0.01, 0.9] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
            >
              <img
                src={Logo}
                alt="Gym Logo"
                className="h-12 w-auto object-contain"
              />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 text-white font-medium transition-colors ${
                    item.id === 'appointment'
                      ? 'gnr-gold-text hover:text-[#eed37a]' // Gold for Appointment
                      : 'hover:text-[#eed37a]'
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-yellow-400 focus:outline-none"
                aria-label="Menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-gray-900/95 backdrop-blur-sm pt-24 px-6 overflow-y-auto"
          >
            <div className="space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left py-4 text-xl font-medium border-b border-gray-700 ${
                    item.id === 'appointment'
                      ? 'gnr-gold-text' // Gold for Appointment
                      : 'text-white'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Appointment Modal */}
      <AppointmentModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Navbar;