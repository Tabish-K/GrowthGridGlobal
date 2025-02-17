"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

function CompAbout() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [selectedIndustry, setSelectedIndustry] = useState(null);
    const [selectedNeed, setSelectedNeed] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [showAllIndustries, setShowAllIndustries] = useState(false);
    const [showAllNeeds, setShowAllNeeds] = useState(false);

    const industries = [
        { id: 1, name: "Technology" },
        { id: 2, name: "E-Commerce" },
        { id: 3, name: "Healthcare" },
        { id: 4, name: "Financial Services" },
        { id: 5, name: "Manufacturing" },
        { id: 6, name: "Education" },
    ];

    const businessNeeds = [
        { id: 1, name: "Digital Strategy" },
        { id: 2, name: "Cost Reduction" },
        { id: 3, name: "Market Expansion" },
        { id: 4, name: "Operations" },
        { id: 5, name: "Innovation" },
        { id: 6, name: "Change Management" },
        { id: 7, name: "Revenue Growth" },
        { id: 8, name: "Data Analytics" },
        { id: 9, name: "Customer Experience" },
        { id: 10, name: "Transformation" },
        { id: 11, name: "Sales & Marketing" },
        { id: 12, name: "Organization" },
    ];

    // Initial limited options
    const initialIndustries = industries.slice(0, 4);
    const initialNeeds = businessNeeds.slice(0, 6);

    const handleNext = () => {
        if (currentQuestion === 1 && selectedIndustry) {
        setCurrentQuestion(2);
        } else if (currentQuestion === 2 && selectedNeed) {
        console.log("Selected Industry:", selectedIndustry);
        console.log("Selected Need:", selectedNeed);
        }
    };

    const handleBack = () => {
        if (showAllIndustries) {
        setShowAllIndustries(false);
        } else if (showAllNeeds) {
        setShowAllNeeds(false);
        } else if (currentQuestion === 2) {
        setCurrentQuestion(1);
        }
    };

    const renderQuestionSection = () => {
        if (showAllIndustries) {
        return (
            <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center gap-3">
                <button
                onClick={handleBack}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                <ArrowLeft className="w-5 h-5" />
                </button>
                <h2 className="text-xl font-semibold text-gray-800">
                All Industries
                </h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                {industries.map((industry) => (
                <button
                    key={industry.id}
                    onClick={() => {
                    setSelectedIndustry(industry.id);
                    setShowAllIndustries(false);
                    }}
                    className={`
                            px-4 py-3 text-sm font-medium 
                            border border-gray-300
                            transition-all duration-200
                            hover:border-[#CC0000] hover:text-[#CC0000]
                            focus:outline-none focus:ring-2 focus:ring-[#CC0000] focus:ring-opacity-50
                            ${
                            selectedIndustry === industry.id
                                ? "border-[#CC0000] text-[#CC0000] bg-red-50"
                                : "text-gray-700"
                            }
                            `}
                >
                    {industry.name}
                </button>
                ))}
            </div>
            </div>
        );
        }

        if (showAllNeeds) {
        return (
            <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center gap-3">
                <button
                onClick={handleBack}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                <ArrowLeft className="w-5 h-5" />
                </button>
                <h2 className="text-xl font-semibold text-gray-800">
                All Business Needs
                </h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                {businessNeeds.map((need) => (
                <button
                    key={need.id}
                    onClick={() => {
                    setSelectedNeed(need.id);
                    setShowAllNeeds(false);
                    }}
                    className={`
                            px-4 py-3 text-sm font-medium 
                            border border-gray-300
                            transition-all duration-200
                            hover:border-[#CC0000] hover:text-[#CC0000]
                            focus:outline-none focus:ring-2 focus:ring-[#CC0000] focus:ring-opacity-50
                            ${
                            selectedNeed === need.id
                                ? "border-[#CC0000] text-[#CC0000] bg-red-50"
                                : "text-gray-700"
                            }
                        `}
                >
                    {need.name}
                </button>
                ))}
            </div>
            </div>
        );
        }

        return (
        <div className="space-y-6">
            {currentQuestion === 1 ? (
            <>
                <h2 className="text-xl font-semibold text-gray-800">
                <span className="text-[#CC0000] text-2xl mr-2">1.</span>What is your industry?
                </h2>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                {initialIndustries.map((industry) => (
                    <button
                    key={industry.id}
                    onClick={() => setSelectedIndustry(industry.id)}
                    className={`
                            px-4 py-3 text-sm font-medium 
                            border border-gray-300
                            transition-all duration-200
                            hover:border-[#CC0000] hover:text-[#CC0000]
                            focus:outline-none focus:ring-2 focus:ring-[#CC0000] focus:ring-opacity-50
                            ${
                                selectedIndustry === industry.id
                                ? "border-[#CC0000] text-[#CC0000] bg-red-50"
                                : "text-gray-700"
                            }
                            `}
                    >
                    {industry.name}
                    </button>
                ))}
                <button
                    onClick={() => setShowAllIndustries(true)}
                    className="px-4 py-3 text-sm font-medium border border-gray-300
                            transition-all duration-200 hover:border-[#CC0000] hover:text-[#CC0000]
                            focus:outline-none focus:ring-2 focus:ring-[#CC0000] focus:ring-opacity-50"
                >
                    Other Industries →
                </button>
                </div>
            </>
            ) : (
            <>
                <h2 className="text-xl font-semibold text-gray-800">
                <span className="text-[#CC0000] text-2xl mr-2">2.</span>What is your business need?
                </h2>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                {initialNeeds.map((need) => (
                    <button
                    key={need.id}
                    onClick={() => setSelectedNeed(need.id)}
                    className={`
                            px-4 py-3 text-sm font-medium 
                            border border-gray-300
                            transition-all duration-200
                            hover:border-[#CC0000] hover:text-[#CC0000]
                            focus:outline-none focus:ring-2 focus:ring-[#CC0000] focus:ring-opacity-50
                            ${
                                selectedNeed === need.id
                                ? "border-[#CC0000] text-[#CC0000] bg-red-50"
                                : "text-gray-700"
                            }
                            `}
                    >
                    {need.name}
                    </button>
                ))}
                <button
                    onClick={() => setShowAllNeeds(true)}
                    className="px-4 py-3 text-sm font-medium border border-gray-300
                            transition-all duration-200 hover:border-[#CC0000] hover:text-[#CC0000]
                            focus:outline-none focus:ring-2 focus:ring-[#CC0000] focus:ring-opacity-50"
                >
                    Other Needs →
                </button>
                </div>
            </>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4 pt-4">
            {currentQuestion === 2 && !showAllNeeds && (
                <button
                onClick={handleBack}
                className="px-8 py-3 font-medium border border-gray-300 hover:border-[#CC0000] hover:text-[#CC0000] transition-colors"
                >
                ← Back
                </button>
            )}
            {!showAllIndustries && !showAllNeeds && (
                <button
                disabled={currentQuestion === 1 ? !selectedIndustry : !selectedNeed}
                className="bg-[#CC0000] text-white px-8 py-3 font-medium hover:bg-[#CC0000]/90 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
                {currentQuestion === 1 ? (
                    <span onClick={handleNext}>Next Question →</span>
                ) : (
                    <Link href="explore">Submit →</Link>
                )}
            </button>
            )}
            </div>
        </div>
        );
    };

    const slides = [
        {
        headingCount: "1",
        heading: "94% of first impressions are based on website design.",
        boxes: [
            {
            title: "Why It Matters",
            content:
                "A website is your digital storefront, and its design directly impacts how customers perceive your credibility and professionalism. Poor design drives visitors away, while modern, responsive designs can increase retention by 50%.",
            },
            {
            title: "How We Help",
            content:
                "Growth Grid specializes in AI-enhanced website and app development, ensuring your platforms leave a lasting, positive impression.",
            },
        ],
        },
        {
        headingCount: "2",
        heading:
            "Companies adopting workflow automation experience a 30% cost reduction.",
        boxes: [
            {
            title: "Why It Matters",
            content:
                "Manual processes drain time and resources. Workflow automation eliminates repetitive tasks, enhances operational accuracy, and significantly reduces overhead costs.",
            },
            {
            title: "How We Help",
            content:
                "Using tools like UiPath, Zapier, and predictive analytics platforms, we streamline processes to maximize efficiency and savings.",
            },
        ],
        },
        {
        headingCount: "3",
        heading:
            "70% of consumers demand personalized experiences powered by AI.",
        boxes: [
            {
            title: "Why It Matters",
            content:
                "Generic marketing is no longer effective. Customers expect personalized recommendations, tailored ads, and dynamic shopping experiences that reflect their preferences. Businesses offering personalization see a 20% increase in conversion rates.",
            },
            {
            title: "How We Help",
            content:
                "Through services like social media management, paid advertising, and content creation, Growth Grid uses AI tools like Dynamic Yield and Adobe Target to deliver personalization at scale.",
            },
        ],
        },
        {
        headingCount: "4",
        heading:
            "Businesses migrating to cloud infrastructures save $250,000 annually.",
        boxes: [
            {
            title: "Why It Matters",
            content:
                "Legacy systems are costly, inflexible, and prone to downtime. Cloud migration not only reduces operational costs but also enhances scalability and security. Organizations that leverage cloud-based platforms report improved agility and 99.99%",
            },
            {
            title: "How We Help",
            content:
                "Growth Grid’s data and cloud solutions provide seamless migration strategies, integrate scalable cloud infrastructures like AWS and Google Cloud, and ensure long-term cost efficiency.",
            },
        ],
        },
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
        <div className="w-full">
        {/* Challenge Section */}
        <section className="bg-white text-gray-800 py-8 md:py-16 border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
                {/* Left Content Container */}
                <div className="w-full lg:w-1/2 space-y-8">
                {/* Progress Indicator */}
                {!showAllIndustries && !showAllNeeds && (
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <div
                        className={`h-2 w-2 rounded-full ${
                        currentQuestion >= 1 ? "bg-[#CC0000]" : "bg-gray-300"
                        }`}
                    />
                    <div
                        className={`h-2 w-2 rounded-full ${
                        currentQuestion >= 2 ? "bg-[#CC0000]" : "bg-gray-300"
                        }`}
                    />
                    <span className="ml-2 text-gray-500">Question {currentQuestion} of 2</span>
                    </div>
                )}

                {/* Header Content */}
                {!showAllIndustries && !showAllNeeds && (
                    <div className="space-y-4">
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
                        What's Your Business Challenge?
                    </h1>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                        Answer two questions and put our thinking to work on your
                        unique business challenges.
                    </p>
                    </div>
                )}

                {/* Questions Container */}
                <div className="hidden lg:block">{renderQuestionSection()}</div>
                </div>

                {/* Right Image - Hide when showing all options */}
                {!showAllIndustries && !showAllNeeds && (
                <div className="w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-[500px] relative">
                    <img
                    src="https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Business challenge visualization"
                    className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-lg" />
                </div>
                )}

                {/* Mobile Questions Container */}
                <div className="lg:hidden">{renderQuestionSection()}</div>
            </div>
            </div>
        </section>
        {/* First Section */}
        <div className="bg-white min-h-screen lg:h-max py-16 lg:py-28">
            <div className="container mx-auto px-4 lg:px-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="w-full lg:w-1/2 space-y-12">
                <div className="bg-[#CC0000] h-[2px] w-[50%] relative left-0 right-0 m-auto"></div>

                <div className="relative">
                <h2 className="text-2xl lg:text-3xl font-bold text-start mb-4 lg:mb-8 text-gray-800">
                    <span className="text-[#CC0000] text-4xl lg:text-5xl mr-2">
                    {slides[currentSlide].headingCount}.
                    </span>
                    {slides[currentSlide].heading}
                </h2>

                <div className="grid md:grid-cols-2 gap-4 lg:gap-6 mt-4 lg:mt-6 mb-4">
                    {slides[currentSlide].boxes.map((box, index) => (
                    <div key={index} className="border bg-gray-50 p-4 lg:p-6">
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
                        currentSlide === index
                            ? "bg-[#CC0000] w-6"
                            : "bg-gray-300"
                        }`}
                    />
                    ))}
                </div>
                </div>
            </div>
            </div>
        </div>

        {/* Red Section */}
        <div className="bg-[#CC0000] text-white py-16 mt-12 mb-12">
            <div className="container mx-auto px-4 lg:px-10">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-2xl lg:text-3xl font-semibold">
                Curious About How These Insights Can Transform Your Business?
                </h1>
                <p className="text-sm lg:text-md tracking-wider mt-4 lg:mt-8">
                Explore the strategies and tools that position your business for
                success in the digital age.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mt-8 lg:mt-20">
                <button className="border px-4 lg:px-6 py-2 lg:py-3 hover:bg-white hover:text-[#CC0000] transition-colors">
                    Learn More About Our Approach
                </button>
                <button className="border px-4 lg:px-6 py-2 lg:py-3 hover:bg-white hover:text-[#CC0000] transition-colors">
                    Speak to an Expert
                </button>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default CompAbout;
