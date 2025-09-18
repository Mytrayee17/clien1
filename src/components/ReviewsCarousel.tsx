'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Review = {
  initials: string;
  name: string;
  age: number;
  treatment: string;
  review: string;
};

export function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardWidth = 320; // Width of each card + margin
  const cardMargin = 16; // mx-4 = 1rem = 16px

  const reviews: Review[] = [
    {
      initials: 'RK',
      name: 'Rajesh Kumar',
      age: 42,
      treatment: 'Root Canal Therapy',
      review: 'The root canal treatment was completely painless. The doctor explained each step and made sure I was comfortable throughout the procedure.'
    },
    {
      initials: 'SP',
      name: 'Sunitha Patel',
      age: 35,
      treatment: 'Porcelain Veneers',
      review: 'I was very conscious about my smile. The cosmetic dentistry treatment transformed my confidence. The veneers look completely natural.'
    },
    {
      initials: 'AM',
      name: 'Amit Mehta',
      age: 38,
      treatment: 'Dental Implant',
      review: 'After losing a tooth in an accident, I was worried about the implant procedure. The team made it completely painless. The implant looks and feels just like a natural tooth!'
    },
    {
      initials: 'PK',
      name: 'Priya Kulkarni',
      age: 28,
      treatment: 'Teeth Whitening',
      review: 'The teeth whitening treatment gave me a radiant smile in just one session. The results were beyond my expectations and the process was completely comfortable.'
    },
    {
      initials: 'VS',
      name: 'Vikram Sharma',
      age: 45,
      treatment: 'Dentures',
      review: 'The custom dentures fit perfectly and look incredibly natural. The entire process was handled with great care and professionalism.'
    }
  ];

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX - translateX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const x = e.clientX - startX;
    setTranslateX(x);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    // Calculate if we should snap to next/previous card
    const threshold = cardWidth / 3;
    if (translateX < -threshold && currentIndex < reviews.length - 1) {
      handleNext();
    } else if (translateX > threshold && currentIndex > 0) {
      handlePrev();
    }
    setTranslateX(0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setIsDragging(true);
    setStartX(touch.clientX - translateX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const x = touch.clientX - startX;
    setTranslateX(x);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  // Calculate the transform for the carousel
  const calculateTransform = () => {
    const containerWidth = containerRef.current?.offsetWidth || 0;
    const centerOffset = (containerWidth - cardWidth) / 2;
    const targetX = -(currentIndex * (cardWidth + cardMargin * 2)) + centerOffset;
    return `translateX(${targetX + translateX}px)`;
  };

  return (
    <div className="relative w-full overflow-hidden py-8">
      {/* Navigation Arrows */}
      <Button 
        variant="outline" 
        size="icon" 
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full shadow-lg w-10 h-10"
        onClick={handlePrev}
        aria-label="Previous review"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>
      
      <div 
        ref={containerRef}
        className="relative w-full h-[400px] overflow-visible"
      >
        <div 
          ref={carouselRef}
          className="absolute top-0 left-0 w-full h-full transition-transform duration-300 ease-out"
          style={{
            transform: calculateTransform(),
            cursor: isDragging ? 'grabbing' : 'grab',
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
        >
          <div className="flex items-center h-full">
            {reviews.map((review, index) => (
              <div 
                key={index}
                className={`flex-shrink-0 mx-4 transition-all duration-300 ${
                  index === currentIndex ? 'scale-100 opacity-100' : 'scale-95 opacity-70'
                }`}
                style={{ width: `${cardWidth}px` }}
              >
                <div className="bg-white rounded-xl shadow-xl p-6 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          className="w-5 h-5 text-yellow-400 flex-shrink-0" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">
                    "{review.review}"
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-primary font-bold text-lg">
                        {review.initials}
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-gray-900">{review.name}</h4>
                        <p className="text-xs text-gray-500">
                          <span className="font-medium">Age:</span> {review.age} • 
                          <span className="font-medium ml-1">{review.treatment}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Button 
        variant="outline" 
        size="icon" 
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full shadow-lg w-10 h-10"
        onClick={handleNext}
        aria-label="Next review"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
      
      {/* Indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {reviews.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'w-6 bg-primary' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to review ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
