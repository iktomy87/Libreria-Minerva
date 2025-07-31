import React, { useState, useEffect } from 'react';
import img1 from '../assets/img/img1.jpg';
import img2 from '../assets/img/img2.jpg';
import img3 from '../assets/img/img3.jpg';


function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { id: 1, image: img1, alt: "Descripción imagen 1" },
    { id: 2, image: img2, alt: "Descripción imagen 2" },
    { id: 3, image: img3, alt: "Descripción imagen 3" }
  ];

  // Auto-avance de slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Manejo de teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
      } else if (e.key === 'ArrowRight') {
        setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="slideshow-container">
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          aria-hidden={index !== currentSlide}
        >
          <img 
            src={slide.image} 
            alt={slide.alt}
            className="slide-image"
          />
        </div>
      ))}

      <button 
        className="slide-nav prev"
        onClick={() => setCurrentSlide(prev => prev === 0 ? slides.length - 1 : prev - 1)}
        aria-label="Previous slide"
      >
        &#10094;
      </button>
      
      <button 
        className="slide-nav next"
        onClick={() => setCurrentSlide(prev => prev === slides.length - 1 ? 0 : prev + 1)}
        aria-label="Next slide"
      >
        &#10095;
      </button>
      
      <div className="slide-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Slideshow;