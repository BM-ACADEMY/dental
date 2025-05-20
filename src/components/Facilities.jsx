import React from 'react';

const Facilities = () => {
  const facilityList = [
    'Digital X-Ray',
    'Pedodontic Treatment',
    'Braces',
    'Clear Aligners',
    'Teeth Cleanings',
    'Dentures',
    'Crown & Bridge',
    'Root Canal Treatment',
    'Cums Problem Treatment',
    'Implants',
    'Oral Surgery (Major/Minor)',
    'Smile Design',
    'Teeth Whitening',
  ];

  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2
          className="text-5xl font-semibold leading-tight text-center mb-10 text-white font-outfit relative z-10"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <span className="gnr-gold-text">Facilities</span>
        </h2>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilityList.map((facility, index) => (
            <div
              key={index}
              className="relative group gnr-gold-border border-2 flex items-center p-6 bg-gray-900 rounded-lg shadow-lg hover:bg-gray-800 transition-all duration-300"
               data-aos="fade-up"
              data-aos-delay={100 + (index * 50)}
            >
              {/* Facility Name - Centered */}
              <h3 className="text-lg font-semibold text-white group-hover:gnr-gold-text transition-colors duration-300 flex-1 text-center">
                {facility}
              </h3>

              {/* Animated Underline */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;