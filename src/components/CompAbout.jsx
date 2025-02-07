"use client";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion';

function CompAbout() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [selectedIndustry, setSelectedIndustry] = useState(null);

    const industries = [
        { id: 'tech', name: 'Technology' },
        { id: 'ecom', name: 'E-Commerce' },
        { id: 'health', name: 'Healthcare' },
        { id: 'finance', name: 'Financial Services' },
        { id: 'manuf', name: 'Manufacturing' },
        { id: 'others', name: 'Others' }
    ];

    const slides = [
        {
        headingCount: "1",
        heading: "94% of first impressions are based on website design.",
        boxes: [
            {
            title: "Why It Matters",
            content: "A website is your digital storefront, and its design directly impacts how customers perceive your credibility and professionalism. Poor design drives visitors away, while modern, responsive designs can increase retention by 50%."
            },
            {
            title: "How We Help",
            content: "Growth Grid specializes in AI-enhanced website and app development, ensuring your platforms leave a lasting, positive impression."
            }
        ]
        },
        {
        headingCount: "2",
        heading: "Companies adopting workflow automation experience a 30% cost reduction.",
        boxes: [
            {
            title: "Why It Matters",
            content: "Manual processes drain time and resources. Workflow automation eliminates repetitive tasks, enhances operational accuracy, and significantly reduces overhead costs."
            },
            {
            title: "How We Help",
            content: "Using tools like UiPath, Zapier, and predictive analytics platforms, we streamline processes to maximize efficiency and savings."
            }
        ]
        },
        {
        headingCount: "3",
        heading: "70% of consumers demand personalized experiences powered by AI.",
        boxes: [
            {
            title: "Why It Matters",
            content: "Generic marketing is no longer effective. Customers expect personalized recommendations, tailored ads, and dynamic shopping experiences that reflect their preferences. Businesses offering personalization see a 20% increase in conversion rates."
            },
            {
            title: "How We Help",
            content: "Through services like social media management, paid advertising, and content creation, Growth Grid uses AI tools like Dynamic Yield and Adobe Target to deliver personalization at scale."
            }
        ]
        },
        {
        headingCount: "4",
        heading: "Businesses migrating to cloud infrastructures save $250,000 annually.",
        boxes: [
            {
            title: "Why It Matters",
            content: "Legacy systems are costly, inflexible, and prone to downtime. Cloud migration not only reduces operational costs but also enhances scalability and security. Organizations that leverage cloud-based platforms report improved agility and 99.99%"
            },
            {
            title: "How We Help",
            content: "Growth Grid’s data and cloud solutions provide seamless migration strategies, integrate scalable cloud infrastructures like AWS and Google Cloud, and ensure long-term cost efficiency."
            }
        ]
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    // Auto-advance slides every 5 seconds
    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className='w-full'>
            {/* First Section */}
            <div className='bg-white min-h-screen lg:h-max py-16 lg:py-28'>
                <div className='container mx-auto px-4 lg:px-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-16'>
                <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "50%" }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="h-[2px] bg-[#CC0000] mx-auto"
                    />
                <h1 className='font-bold text-3xl lg:text-5xl text-gray-800 block sm:hidden'>The Numbers That Drive the Future of Business.</h1>
                    <img 
                        src='https://images.unsplash.com/photo-1579389083046-e3df9c2b3325?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE1fHxvZmZpY2UlMjBleHBsYWluYXRpb258ZW58MHwxfDB8fHww'
                        alt="Office explanation"
                        className='w-full lg:w-1/2 h-64 lg:h-[30rem] object-cover'
                    />
                    <div className='w-full lg:w-1/2 space-y-12'>
                        <div className='bg-gray-50 border p-4'>
                            <h1 className='font-bold text-3xl lg:text-5xl text-gray-800 hidden sm:block'>The Numbers That Drive the Future of Business.</h1>
                            <p className='text-gray-800 tracking-wider text-base lg:text-lg py-3'>From efficiency to innovation, discover why businesses that harness AI, automation, and data analytics are thriving in a competitive world.</p>
                        </div>

                        <div className='bg-[#CC0000] h-[2px] w-[50%] relative left-0 right-0 m-auto'></div>

                        <div className="relative">
                            <h2 className="text-2xl lg:text-3xl font-bold text-start mb-4 lg:mb-8 text-gray-800">
                                <span className='text-[#CC0000] text-4xl lg:text-5xl mr-2'>{slides[currentSlide].headingCount}.</span>
                                {slides[currentSlide].heading}
                            </h2>
                            
                            <div className="grid md:grid-cols-2 gap-4 lg:gap-6 mt-4 lg:mt-6 mb-4">
                                {slides[currentSlide].boxes.map((box, index) => (
                                    <div 
                                        key={index}
                                        className="border bg-gray-50 p-4 lg:p-6"
                                    >
                                        <h3 className="text-lg lg:text-xl font-semibold mb-2 lg:mb-4 text-gray-700 tracking-wide">
                                            {box.title}
                                        </h3>
                                        <p className="text-sm lg:text-base text-gray-600 tracking-wide">
                                            {box.content}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-center space-x-2 mt-6">
                                {slides.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`w-3 h-3 rounded-full transition-all ${
                                            currentSlide === index ? 'bg-[#CC0000] w-6' : 'bg-gray-300'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Red Section */}
            <div className='bg-[#CC0000] text-white py-16 mt-12 mb-12'>
                <div className='container mx-auto px-4 lg:px-10'>
                    <div className='max-w-4xl mx-auto text-center'>
                        <h1 className='text-2xl lg:text-3xl font-semibold'>Curious About How These Insights Can Transform Your Business?</h1>
                        <p className='text-sm lg:text-md tracking-wider mt-4 lg:mt-8'>Explore the strategies and tools that position your business for success in the digital age.</p>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mt-8 lg:mt-20'>
                            <button className='border px-4 lg:px-6 py-2 lg:py-3 hover:bg-white hover:text-[#CC0000] transition-colors'>Learn More About Our Approach</button>
                            <button className='border px-4 lg:px-6 py-2 lg:py-3 hover:bg-white hover:text-[#CC0000] transition-colors'>Speak to an Expert</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Challenge Section */}
            <section className="bg-white text-gray-800 py-16 border-t border-gray-100">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <div className="space-y-4">
                            <motion.h1 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-3xl lg:text-4xl font-bold text-gray-900"
                            >
                                What's Your Business Challenge?
                            </motion.h1>
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-base md:text-lg text-gray-600 leading-relaxed"
                            >
                                Answer two questions and put our thinking to work on your unique business challenges.
                            </motion.p>
                        </div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="space-y-6"
                        >
                            <h2 className="text-xl font-semibold text-gray-800">
                                What is your industry?
                            </h2>
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                                {industries.map((industry) => (
                                    <motion.button
                                        key={industry.id}
                                        onClick={() => setSelectedIndustry(industry.id)}
                                        className={`
                                            px-6 py-4 text-sm font-medium 
                                            border border-gray-300
                                            transition-all duration-200
                                            hover:border-[#CC0000] hover:text-[#CC0000]
                                            focus:outline-none focus:ring-2 focus:ring-[#CC0000] focus:ring-opacity-50
                                            ${selectedIndustry === industry.id 
                                                ? 'border-[#CC0000] text-[#CC0000] bg-red-50' 
                                                : 'text-gray-700'
                                            }
                                        `}
                                    >
                                        {industry.name}
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="pt-4"
                        >
                            <button className="bg-[#CC0000] text-white px-8 py-3 font-medium hover:bg-[#CC0000]/60 transition-colors">
                                Next Question →
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Image */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative h-[400px] lg:h-[500px] w-full">
                            <img
                                src="https://images.unsplash.com/photo-1523875194681-bedd468c58bf?w=1200&auto=format&fit=crop&q=80"
                                alt="Business challenge visualization"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default CompAbout
