import React, { useEffect } from 'react';
import About from '../assets/about.png';
import { BadgeCheck, MapPin } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS styles

const Aboutsection = () => {
  // Initialize AOS when component mounts
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true, // Animations will only happen once
    });
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black" id='about'>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <div className="relative">
              <div className="mb-6" data-aos="fade-right">
                <span className="inline-block gnr-gold-text text-3xl font-semiboldn font-dancing tracking-wider">
                  About Us
                </span>
              </div>
              
              <h1 
                className="text-5xl font-semibold leading-tight text-white font-outfit relative z-10"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <span className="gnr-gold-text">Crafting</span> Confident <br className="hidden sm:block"/>Smiles with Care
              </h1>

              <p 
                className="mt-6 text-gray-300 text-lg font-outfit"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                At <span className="gnr-gold-text font-medium">Hridhayam Dentistry</span>, we are committed to providing exceptional dental care in a welcoming environment. As one of the best dental clinics in Coimbatore, we offer a comprehensive range of services.
              </p>

              <div 
                className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="group">
                  <div className="flex items-start gap-3">                    
                    <BadgeCheck className="w-6 h-6 text-[#debe73]" />
                    <div>
                      <h3 className="text-xl font-outfit text-white">Experienced Dentist</h3>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-[#debe73]" />
                    <div>
                      <h3 className="text-xl font-outfit text-white">Friendly Clinic</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div 
                className="mt-8 flex flex-col sm:flex-row gap-4 font-outfit"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <button className="relative border-2 gnr-gold-border bg-gradient-to-r from-amber-900/20 to-amber-800/20 !text-white font-semibold py-3 px-8 rounded-lg transition-all duration-500 transform hover:bg-amber-500/30 shadow-md hover:shadow-amber-500/40 animate-pulse-slow overflow-hidden group">
                  <span className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/20 to-amber-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                  <span className="relative z-10">Book an Appointment</span>
                </button>
              </div>
            </div>
          </div>

          <div 
            className="md:w-1/2 relative"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="relative z-10 group">
              <img 
                src={About} 
                alt="Dentist with patient" 
                className="w-full h-auto rounded-xl transform transition duration-500"
              />
              <div className="absolute inset-0 via-transparent to-transparent rounded-xl pointer-events-none"></div>
            </div>
            <div 
              className="absolute -bottom-6 -right-1 w-32 h-32 bg-[#e6c66550] rounded-full z-0"
              data-aos="zoom-in"
              data-aos-delay="500"
            ></div>
            <div 
              className="absolute -top-6 left-10 w-24 h-24 bg-[#e6c66550] rounded-full z-0"
              data-aos="zoom-in"
              data-aos-delay="600"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutsection;