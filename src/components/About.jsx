import React, { useEffect, useState } from 'react';
import About from '../assets/about.png';
import { BadgeCheck, MapPin } from 'lucide-react';
import AppointmentModal from './AppointmentModal';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Aboutsection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800, // Short duration for mild effect
      easing: 'ease-in-out', // Smooth easing for professional look
      once: true, // Animation triggers only once
      mirror: false, // No animation on scroll up
    });
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black overflow-x-hidden" id="about">
      <div className="max-w-7xl mx-auto overflow-x-hidden">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Content */}
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <div className="relative">
              <div className="mb-6" data-aos="fade-up" data-aos-delay="100">
                <span className="inline-block gnr-gold-text text-3xl font-semibold font-dancing tracking-wider">
                  About Us
                </span>
              </div>

              <h1
                className="text-5xl font-semibold leading-tight text-white font-outfit relative z-10"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <span className="gnr-gold-text">Creating</span> Bright <br className="hidden sm:block" />
                Smiles with Heart
              </h1>

              <p
                className="mt-6 text-gray-300 text-lg font-outfit text-justify"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                We <span className="gnr-gold-text font-medium">GNR Dentistry</span>, Achieve a Confident Smile With
                Us. It is a <span className="gnr-gold-text font-medium">Multispecialty Dental Clinic</span>, we are
                dedicated to providing excellent dental care in a warm
                welcoming environment. A place where dentists and
                other dental professionals provide oral health care. Our
                Mission is to deliver personalized patient dental care
                that exceeds your expectations. We believe everyone
                deserves a healthy and beautiful smile, and we are
                committed to helping you achieve it. Our Service: 1.
                Cleanings, Fillings, Extractions (General Dentistry) 2.
                Cosmetic Dentistry. 3. Tooth Replacement 4. Pediatric
                Dentistry.
              </p>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group" data-aos="fade-right" data-aos-delay="400">
                  <div className="flex items-start gap-3">
                    <BadgeCheck className="w-6 h-6 text-[#debe73]" />
                    <div>
                      <h3 className="text-xl font-outfit text-white">Experienced Dentist</h3>
                    </div>
                  </div>
                </div>

                <div className="group" data-aos="fade-left" data-aos-delay="500">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-[#debe73]" />
                    <div>
                      <h3 className="text-xl font-outfit text-white">Friendly Clinic</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 font-outfit" data-aos="fade-left" data-aos-delay="500">
                <button
                  onClick={openModal}
                  className="relative border-2 gnr-gold-border bg-gradient-to-r from-amber-900/20 to-amber-800/20 !text-white font-semibold py-3 px-8 rounded-lg transition-all duration-500 transform hover:bg-amber-500/30 shadow-md hover:shadow-amber-500/40 animate-pulse-slow overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/20 to-amber-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                  <span className="relative z-10">Book an Appointment</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="md:w-1/2 relative overflow-hidden">
            <div className="relative z-10 group" data-aos="fade-left" data-aos-delay="200">
              <img
                src={About}
                alt="Dentist with patient"
                className="w-full h-auto rounded-xl object-cover"
              />
              <div className="absolute inset-0 via-transparent to-transparent rounded-xl pointer-events-none"></div>
            </div>
            <div
              className="absolute bottom-0 right-0 w-32 h-32 bg-[#e6c66550] rounded-full z-0"
              data-aos="zoom-in"
              data-aos-delay="300"
            ></div>
            <div
              className="absolute top-0 left-0 w-24 h-24 bg-[#e6c66550] rounded-full z-0"
              data-aos="zoom-in"
              data-aos-delay="400"
            ></div>
          </div>
        </div>
      </div>

      {/* Appointment Modal */}
      <AppointmentModal open={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default Aboutsection;