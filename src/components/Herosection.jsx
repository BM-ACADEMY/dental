import React, { useEffect, useState } from 'react';
import Doctor from '../assets/doctor.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AppointmentModal from './AppointmentModal'; // Import your modal component

const HeroSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  // Initialize AOS when component mounts
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="bg-gradient-to-b from-gray-900 to-black flex items-center justify-center py-12 relative overflow-x-hidden">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Side: Content */}
        <div className="lg:w-1/2 space-y-6 text-center sm:text-center md:text-left">
          <div className="mb-6" data-aos="fade-right">
            <span className="inline-block gnr-gold-text text-3xl font-semibold font-dancing tracking-wider">
              Book an Appointment
            </span>
          </div>
          <h2
            className="text-5xl font-semibold leading-tight text-white font-outfit relative z-10"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <span className="gnr-gold-text">Let Us</span> Guide You to the Best Dental Care.
          </h2>

          <p
            className="text-lg text-white font-outfit max-w-md mx-auto md:mx-0"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Simply give us a call and book an appointment for yourself. Share your dental concerns, and we'll guide you to the best treatment options.
          </p>

          <div
            className="mt-8 flex flex-col sm:flex-row gap-4 font-outfit"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <button 
              onClick={handleOpenModal}
              className="relative border-2 gnr-gold-border bg-gradient-to-r from-amber-900/20 to-amber-800/20 !text-white font-semibold py-3 px-8 rounded-lg transition-all duration-500 transform hover:bg-amber-500/30 shadow-md hover:shadow-amber-500/40 animate-pulse-slow overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/20 to-amber-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
              <span className="relative z-10">Book an Appointment</span>
            </button>
          </div>
        </div>

        {/* Right Side: Image and Info Cards */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex flex-col items-center relative">
          {/* Doctor Image */}
          <img
            src={Doctor}
            alt="Dentist"
            className="object-cover rounded-lg max-w-full h-auto"
            data-aos="fade-left"
            data-aos-delay="200"
          />

          {/* Opening Hours Card */}
          <div
            className="absolute top-1/3 right-4 bg-blue-900 text-white p-4 rounded-lg shadow-lg flex items-center space-x-3"
            data-aos="zoom-in"
            data-aos-delay="400"
            data-aos-anchor-placement="top"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="text-lg font-semibold">Opening Hours</h3>
              <p className="text-sm">Mon to Sat: 10am – 9pm</p>
              <p className="text-sm">Sun: 11am – 8pm</p>
            </div>
          </div>

          {/* Need Dental Services Card */}
          <div
            className="absolute bottom-5 left-4 bg-white text-gray-800 p-4 rounded-lg shadow-lg flex items-center space-x-3"
            data-aos="zoom-in"
            data-aos-delay="500"
            data-aos-anchor-placement="top"
          >
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <div>
              <h3 className="text-lg font-semibold">Need Dental Services?</h3>
              <p className="text-sm">Call: +91 8072225401</p>
            </div>
          </div>
        </div>
      </div>

      {/* Render the Appointment Modal */}
      <AppointmentModal open={modalOpen} onClose={handleCloseModal} />
    </section>
  );
};

export default HeroSection;