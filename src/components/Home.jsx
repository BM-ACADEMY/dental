import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "../assets/home.jpg";

export default function HomeSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();

    // Cleanup AOS on component unmount
    return () => {
      AOS.refreshHard(); // Reset AOS to prevent memory leaks
    };
  }, []);

  return (
    <section
      className="relative min-h-screen bg-cover bg-top text-white text-center flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10"
      style={{ backgroundImage: `url(${Home})`, backgroundPosition: "top" }}
      id="home"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Text content */}
      <div className="relative z-10 w-full max-w-3xl px-4 sm:px-6">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-quicksand mb-4 sm:mb-6 leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] break-words hyphens-auto"
          data-aos="fade-up"
        >
          Let Your <span className="gnr-gold-text">Smile Shine</span> with{" "}
          <span className="gnr-gold-text">Confidence</span>
        </h1>

        <p
          className="text-base sm:text-lg md:text-xl lg:text-2xl font-commissioner drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)] break-words"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Gentle Care. Lasting Smiles. Trusted Dentistry.
        </p>
      </div>
    </section>
  );
}