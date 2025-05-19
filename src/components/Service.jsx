import React, { useEffect } from 'react';
import { Smile, Heart, Zap, Sparkles, Stethoscope, AlignCenter } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS styles

const Service = () => {
  // Initialize AOS when component mounts
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true, // Animations will only happen once
    });
  }, []);

  const services = [
    {
      id: "cosmetic-dentistry",
      title: "Cosmetic Dentistry",
      description: "Enhance your smile with our cosmetic dentistry services, including veneers and bonding. We focus on aesthetics to help you achieve your dream smile.",
      icon: <Smile className="w-8 h-8 text-[#debe73]" />,
      animation: "fade-up",
      delay: 100
    },
    {
      id: "root-canal",
      title: "Root Canal",
      description: "When tooth decay reaches the inner pulp and causes pain, root canal treatment is essential. Our gentle approach ensures a comfortable experience.",
      icon: <Heart className="w-8 h-8 text-[#debe73]" />,
      animation: "fade-up",
      delay: 200
    },
    {
      id: "dental-implant",
      title: "Dental Implant",
      description: "Lost a tooth? Dental implants provide a natural-looking replacement, fully restoring your smile with the look and feel of real teeth.",
      icon: <Zap className="w-8 h-8 text-[#debe73]" />,
      animation: "fade-up",
      delay: 300
    },
    {
      id: "teeth-whitening",
      title: "Teeth Whitening",
      description: "Brighten your smile with our teeth whitening treatments, designed to eliminate stains and give you the radiant smile you've always wanted!",
      icon: <Sparkles className="w-8 h-8 text-[#debe73]" />,
      animation: "fade-up",
      delay: 400
    },
    {
      id: "consultation-scaling",
      title: "Consultation & Scaling",
      description: "Begin your path to dental wellness with a consultation. Our scaling service removes plaque and tartar, promoting healthy gums.",
      icon: <Stethoscope className="w-8 h-8 text-[#debe73]" />,
      animation: "fade-up",
      delay: 500
    },
    {
      id: "braces-aligners",
      title: "Braces & Aligners",
      description: "Achieve the smile you've always wanted with our braces and aligners! We offer personalized treatment options to straighten your teeth comfortably.",
      icon: <AlignCenter className="w-8 h-8 text-[#debe73]" />,
      animation: "fade-up",
      delay: 600
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900" id='services'>
      <div className="max-w-7xl mx-auto">
        {/* Header section with animations */}
        <div className="text-center mb-16" data-aos="fade-down">
          <div className="mb-6" data-aos="fade-right">
            <span className="inline-block gnr-gold-text text-3xl font-semibold font-dancing tracking-wider">
              Our Services
            </span>
          </div>
          <h2
            className="text-5xl font-semibold leading-tight text-white font-outfit relative z-10"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span className="gnr-gold-text">All Your</span> Dental Needs at One Place
          </h2>
        </div>

        {/* Services grid with staggered animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-900  shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 gnr-gold-border border-2 relative group"
              data-aos={service.animation}
              data-aos-delay={service.delay}
            >
              {/* Pseudo-elements for hover effect */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute w-0 h-0 top-0 right-0 bg-[#3a39365e] group-hover:w-full group-hover:h-full transition-all duration-500 origin-top-right" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}></div>
              </div>
              <div className="p-6 relative z-10">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#debe73]/20 mb-6 relative group-hover:bg-[#debe73]/30 transition-all duration-300">
                  {service.icon}
                  <div className="absolute inset-0 rounded-full bg-[#debe73]/10 scale-0 group-hover:scale-150 transition-transform duration-500"></div>
                </div>
                <h3 className="text-2xl font-medium gnr-gold-text font-outfit mb-3">{service.title}</h3>
                <p className="text-gray-300 font-light mb-6 font-outfit">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;