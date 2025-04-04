/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    name: 'Sophie Tran',
    title: 'VP Marketing, FinTech Platform, UK',
    quote: '"Growth Grid worked like an embedded team—fast, sharp, and obsessed with results."',
    image: '/images/sophie-tran.png'
  },
  {
    name: 'Carlos Mendes',
    title: 'Founder, HealthTech Startup, Spain',
    quote: '"They helped us launch faster, and the chatbot alone brought in 30% of early traction."',
    image: '/images/carlos-mendes.png'
  },
  {
    name: 'Maya Brooks',
    title: 'Strategy Lead, AI Automation Company, USA',
    quote: '"Clear thinkers. Excellent design and research chops. They got the results."',
    image: '/images/maya-brooks.png'
  },
  {
    name: 'Aditya R',
    title: 'Growth Lead, D2C Brand (USA + India)',
    quote: '"From landing pages to influencer scripts, everything they did improved our conversions."',
    image: '/images/aditya-r.png'
  },
  {
    name: 'Elena Novak',
    title: 'Head of Growth, SaaS Platform, Germany',
    quote: '"Growth Grid transformed our website with a sleek design and optimized funnels, boosting our lead conversion by 3x."',
    image: '/images/elena-novak.png'
  },
  {
    name: 'Lucas Bennett',
    title: 'Product Lead, FinTech Startup, Australia',
    quote: '"They understood our vision and delivered a high-impact GTM strategy that accelerated our product adoption."',
    image: '/images/lucas-bennett.png'
  }
];

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);
  const autoScrollTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [visibleSlides, setVisibleSlides] = useState(3);

  // Update visible slides based on screen size
  useEffect(() => {
    const updateVisibleSlides = () => {
      if (window.innerWidth < 768) {
        setVisibleSlides(1);
      } else if (window.innerWidth < 1024) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(3);
      }
    };

    updateVisibleSlides();
    window.addEventListener('resize', updateVisibleSlides);
    return () => window.removeEventListener('resize', updateVisibleSlides);
  }, []);

  // Function to scroll to a specific page (group of 3 slides)
  const scrollToPage = (index: number) => {
    if (scrollContainerRef.current) {
      const maxPage = Math.ceil(testimonials.length / visibleSlides) - 1;
      const pageIndex = Math.min(Math.max(0, index), maxPage);
      
      scrollContainerRef.current.scrollTo({
        left: pageIndex * scrollContainerRef.current.offsetWidth,
        behavior: 'smooth'
      });
      
      setActiveIndex(pageIndex);
    }
  };

  // Setup auto-scrolling
  useEffect(() => {
    const startAutoScroll = () => {
      if (autoScrollTimerRef.current) {
        clearInterval(autoScrollTimerRef.current);
      }
      
      autoScrollTimerRef.current = setInterval(() => {
        if (!isAutoScrollPaused) {
          const maxPage = Math.ceil(testimonials.length / visibleSlides) - 1;
          const nextIndex = activeIndex < maxPage ? activeIndex + 1 : 0;
          scrollToPage(nextIndex);
        }
      }, 5000); // Change slide every 5 seconds
    };

    startAutoScroll();

    return () => {
      if (autoScrollTimerRef.current) {
        clearInterval(autoScrollTimerRef.current);
      }
    };
  }, [activeIndex, isAutoScrollPaused, visibleSlides]);

  // Pause auto-scroll when user interacts
  const handleMouseEnter = () => setIsAutoScrollPaused(true);
  const handleMouseLeave = () => setIsAutoScrollPaused(false);
  const handleTouchStart = () => setIsAutoScrollPaused(true);
  const handleTouchEnd = () => {
    setTimeout(() => setIsAutoScrollPaused(false), 2000);
  };

  // Calculate number of pages
  const pageCount = Math.ceil(testimonials.length / visibleSlides);

  return (
    <div id="testimonials" className="bg-white w-full">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-center text-3xl md:text-5xl font-bold mb-10 md:mb-16 font-poppins">
          What our <span className="text-[#D77914]">Satisfied clients</span> say?
        </h2>
        
        <div className="relative overflow-hidden">
          <div 
            ref={scrollContainerRef}
            className="flex snap-x snap-mandatory overflow-x-auto no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="flex flex-nowrap w-full">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.name} 
                  className={`flex-none px-2 md:px-3 ${
                    visibleSlides === 3 ? 'w-1/3' : 
                    visibleSlides === 2 ? 'w-1/2' : 
                    'w-full'
                  }`}
                >
                  <div className="rounded-lg overflow-hidden h-full flex flex-col">
                    {/* Full image */}
                    <div className="relative w-full pt-[100%] bg-gray-100 rounded-lg">
                      <Image 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        fill
                        className="absolute inset-0 w-full h-full object-cover object-center"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    
                    {/* Text below image */}
                    <div className="pt-3 font-afacad">
                      <div className="font-semibold text-md md:text-xl text-[#4F1C51]">
                        {testimonial.name}
                      </div>
                      <div className="text-xs md:text-sm text-gray-600 mb-2">
                        {testimonial.title}
                      </div>
                      <div className="text-sm md:text-lg italic text-black">
                        {testimonial.quote}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 space-x-3">
          {Array.from({ length: pageCount }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                scrollToPage(index);
                setIsAutoScrollPaused(true);
                setTimeout(() => setIsAutoScrollPaused(false), 5000);
              }}
              className={`h-2 w-2 rounded-full transition-all ${
                activeIndex === index ? 'bg-[#D77914]' : 'bg-black'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
        
        {/* See All Testimonials Button */}
        <div className="flex justify-center mt-6">
          <button className="bg-[#4F1C51] text-white px-8 py-2 rounded-full text-lg md:text-2xl font-afacad font-medium hover:bg-[#4F1C51]/80 transition-all">
            See all testimonials
          </button>
        </div>
      </div>
      <div className="bg-black h-[2px] w-[70dvw] mx-auto mt-10 md:mt-20"/>
    </div>
  );
}