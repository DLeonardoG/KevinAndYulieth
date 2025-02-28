import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const DualCarousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= Math.ceil(slides.length / 2) - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev <= 0 ? Math.ceil(slides.length / 2) - 1 : prev - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const autoPlay = setInterval(nextSlide, 5000);
    return () => clearInterval(autoPlay);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-auto overflow-hidden group my-10">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {Array.from({ length: Math.ceil(slides.length / 2) }).map((_, slideIndex) => (
          <div
            key={slideIndex}
            className="w-full flex-shrink-0 grid grid-cols-2 gap-1"
          >
            {/* Render 2 images per slide */}
            {slides.slice(slideIndex * 2, slideIndex * 2 + 2).map((slide, index) => (
              <div
                key={index}
                className="w-full relative overflow-hidden"
                style={{ aspectRatio: "16/9" }}
              >
                <img
                  src={slide}
                  alt={`Slide ${slideIndex * 2 + index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/30 p-2 rounded-full hover:bg-white/50 transition-colors duration-300 
             opacity-100"
      >
        <ChevronLeftIcon className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/30 p-2 rounded-full hover:bg-white/50 transition-colors duration-300 
             opacity-100"
      >
        <ChevronRightIcon className="w-6 h-6 text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {Array.from({ length: Math.ceil(slides.length / 2) }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default DualCarousel;
