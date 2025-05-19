import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ReviewSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Prakash Easwaran",
      content: "The doctor and the other staff members are very attentive and professional. The service is very good and efficient. A friend of mine recommended the clinic because of their attention to preserving the patients' natural teeth. I 100% recommend the clinic.",
      rating: 5,
    },
    {
      id: 2,
      name: "Reshma vipparthi",
      content: "Thank you Dr.Rakesh for the best ever dental treatment at reasonable prices with utmost care and concern. I would love to refer my family and friends.",
      rating: 4,
    },
    {
      id: 3,
      name: "PANDITH NISHI SHARMA",
      content: "I was very concerned about my smile,Thank you so much Dr.Rakesh for the wonderful treatment and giving me the confidence to Smile. Dr Rakesh is Very humble and does the treatment with advanced equipment,good hygiene loved the treatment.",
      rating: 5,
    },
    {
      id: 4,
      name: "Shiny Asir",
      content: "Thank you dr. Rakeshwar for your outstanding service.You are very friendly, compassionate and helpful, being knowledgeable, being an expert, and being trustworthy",
      rating: 5,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto mb-7">
        <div className="text-center mb-12">
          <div className="mb-6" data-aos="fade-down" data-aos-delay="100">
            <span className="inline-block gnr-gold-text text-3xl font-semibold font-dancing tracking-wider">
              Reviews
            </span>
          </div>
          <h2
            className="text-5xl font-semibold leading-tight text-white font-outfit relative z-10"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            <span className="gnr-gold-text">What's our</span> Client Say's
          </h2>
        </div>

        <div className="relative overflow-hidden">
          {/* Reviews Container */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="w-full flex-shrink-0 px-4"
                data-aos="fade-up"
                data-aos-delay={300 + review.id * 100} // Stagger reviews
              >
                <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-amber-500/20 h-full flex flex-col">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < review.rating ? 'text-amber-400' : 'text-gray-500'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 text-lg flex-grow">"{review.content}"</p>
                  <div className="flex items-center mt-auto">
                    <div className="bg-amber-500/20 text-amber-400 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{review.name}</h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons with Gold Gradient */}
          <div
            className="flex justify-center mt-8 space-x-4"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <button
              onClick={prevSlide}
              className="p-3 rounded-full gnr-gold-border bg-gradient-to-r from-amber-700/80 to-amber-500/80 text-white"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full gnr-gold-border bg-gradient-to-r from-amber-700/80 to-amber-500/80 text-white transition-all duration-300"
              aria-label="Next review"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSlider;