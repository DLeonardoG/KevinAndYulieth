import React from "react";

const Timeline = () => {
  return (
    <>
    <div className="h-16 md:h-24"></div>
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-8">
      <p className="heading-primary font-script text-5xl sm:text-7xl">Time Line</p>
      <div className="mb-3 md:mb-8">
        <p className="heading-primary">Orden del Día</p>
      </div>

      <div className="relative w-full mb-5 md:mb-16">
        <img
          src="/timeline.svg"
          sizes="(max-width: 768px) 100vw, 644px"
          alt="Diagrama de timeline"
          className="w-full h-auto max-w-[644px] mx-auto block rounded-lg shadow-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="h-16 md:h-24"></div>
      <style jsx>{`
        .heading-primary {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell;
          font-weight: 400;
          text-align: center;
          color: #2d3748;
          margin: 0;

          /* Tamaños responsive */
          line-height: 1.2;
        }

        /* Media queries para elementos específicos */
        @media (max-width: 768px) {
          .heading-primary {
          }
        }

        @media (max-width: 480px) {
          .heading-primary {
            line-height: 1.3;
          }

          .shadow-image {
            border-radius: 4px;
          }
        }
      `}</style>
    </div>
    </>
  );
};

export default Timeline;
