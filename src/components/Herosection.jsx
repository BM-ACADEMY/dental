import React from 'react';
import Doctor from '../assets/doctor.webp';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-blue-50 flex items-center justify-center py-12 relative">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Side: Content */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <span className="text-blue-600 text-lg font-semibold">Welcome to Dentia</span>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Transforming Smiles With Precision And Gentle Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-md mx-auto lg:mx-0">
            We offer high-quality dental care tailored for the whole family. From routine checkups to advanced treatments, our compassionate team ensures your smile stays healthy and confident.
          </p>
          <button className="px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors duration-300">
            Book Appointment
          </button>
          <div className="flex items-center justify-center lg:justify-start space-x-2 mt-4">
            <span className="text-gray-600">Google Rating</span>
            <span className="text-gray-800 font-semibold">5.0</span>
            <div className="flex space-x-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-600">Based on 23K Reviews</span>
          </div>
        </div>

        {/* Right Side: Image and Info Cards */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex flex-col items-center relative">
          {/* Doctor Image */}
          <img
            src={Doctor}
            alt="Dentist"
            className="object-cover rounded-lg"
          />

          {/* Opening Hours Card */}
          <div className="absolute top-1/3 right-0 bg-blue-900 text-white p-4 rounded-lg shadow-lg flex items-center space-x-3">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="text-lg font-semibold">Opening Hours</h3>
              <p className="text-sm">Mon to Sat: 08:00 – 20:00</p>
            </div>
          </div>

          {/* Need Dental Services Card */}
          <div className="absolute bottom-0 left-0 bg-white text-gray-800 p-4 rounded-lg shadow-lg flex items-center space-x-3">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <div>
              <h3 className="text-lg font-semibold">Need Dental Services?</h3>
              <p className="text-sm">Call: +1123 456 789</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;