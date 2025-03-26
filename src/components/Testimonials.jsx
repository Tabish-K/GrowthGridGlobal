"use client"

import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

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
  return (
    <div id="testimonials" className="">
      <section className="bg-white py-16 w-full">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <section className="">
          {/* Testimonials Grid */}
            <div className="max-w-7xl mx-auto">

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                What Our <br />
                <span className="bg-gradient-to-r from-[#CC0012] via-[#CC0012]/80 to-[#CC0012]/60 text-transparent bg-clip-text">Satisfied Clients Say?</span>
              </h2>

              {/* Subheading */}
              <p className="text-gray-700 font-medium tracking-wide max-w-3xl text-base mx-auto my-8">
                {`Real success stories from businesses we've helped grow. Hear firsthand how our expertise in marketing, automation, and technology has transformed their operations, increased efficiency, and driven measurable results.`}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16 p-4">
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.name} 
                    className="rounded-lg overflow-hidden"
                  >
                    <div className="relative w-full h-96">
                      <Image 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        fill
                        className="object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                        <p className="text-xs bg-black rounded-lg px-2 py-1">
                          {testimonial.quote}
                        </p>
                      </div>
                    </div>
                        <div className="mt-2">
                          <h3 className="font-semibold text-gray-900 text-lg text-start">{testimonial.name}</h3>
                          <p className="text-md text-gray-600 text-start">{testimonial.title}</p>
                        </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pagination Dots */}
          {/* <div className="flex justify-center mt-6 space-x-2">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <span key={index} className={`h-2 w-2 rounded-full ${index === 0 ? 'bg-[#CC0012]' : 'bg-gray-300'}`} />
            ))}
          </div> */}

          {/* See All Testimonials Button */}
          {/* <div className="flex justify-center mt-6">
            <button className="flex items-center gap-2 px-7 py-2 border-2 border-[#CC0012] rounded-full text-black-500 font-bold hover:bg-[#CC0012] hover:text-white transition-all relative">
              <span className="text-md">See all Testimonials</span>
              <span className="w-10 h-10 text-xl flex items-center justify-center bg-gradient-to-l from-[#CC0012] to-[#CC0012]/50 text-white rounded-full">
                <MoveRight/>
              </span>
            </button>
          </div> */}
        </div>
      </section>
    </div>
  );
}
