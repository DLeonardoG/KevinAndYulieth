import React from 'react';

const Timeline = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8 md:mb-12">
        <p className="heading-primary">Time Line</p>
      </div>
      
      <div className="mb-8 md:mb-12">
        <p className="heading-primary">Orden del Día</p>
      </div>

      {/* Contenedor de la imagen */}
      <div className="relative w-full mb-8 md:mb-16">
        <img
          src="/timeline.svg"
          sizes="(max-width: 768px) 100vw, 644px"
          alt="Diagrama de timeline"
          className="w-full h-auto max-w-[644px] mx-auto block rounded-lg shadow-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Espaciador */}
      <div className="h-16 md:h-24"></div>
      <style jsx>{`
    .heading-primary {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell;
  font-weight: 700;
  text-align: center;
  color: #2d3748;
  margin: 0;
  
  /* Tamaños responsive */
  font-size: 2rem; /* 32px */
  line-height: 1.2;
}

.shadow-image {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
}

/* Media queries para elementos específicos */
@media (max-width: 768px) {
  .heading-primary {
    font-size: 1.5rem; /* 24px */
  }
}

@media (max-width: 480px) {
  .heading-primary {
    font-size: 1.25rem; /* 20px */
    line-height: 1.3;
  }
  
  .shadow-image {
    border-radius: 4px;
  }
}
      `}</style>
    </div>
  );
  
};

export default Timeline;