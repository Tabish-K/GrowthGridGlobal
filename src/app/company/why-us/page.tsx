"use client"

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Minus, MoveDown, MoveRight, Plus } from 'lucide-react';
import Image from "next/image";

// Define interfaces for the data structures
interface Section {
  title: string;
  content: string;
}

interface PartnershipSection {
  title: string;
  desc: string;
  points: string[];
}

interface ProcessStep {
  id: number;
  title: string;
  content: string;
}

interface Benefit {
  prefix: string;
  highlight: string;
  suffix: string;
}

// Why Us
const sections: Section[] = [
    {
        title: "A Culture of Continuous Innovation",
        content:
        "We’re constantly pushing boundaries—whether reimagining customer journeys, implementing AI-driven business solutions, or enabling digital transformation consulting that adapts to tomorrow’s needs.",
    },
    {
        title: "True Partnership",
        content:
        "We don't just deliver a project and walk away. We're with you every step of the way—from ideation and execution to continuous optimization—ensuring that our solutions evolve as your business grows.",
    },
    {
        title: "Your Future, Our Mission",
        content:
        "At Growth Grid, we're not just building solutions; we're building the future of business. Our mission is to empower you to lead in a digital-first world, armed with the tools and insights to turn every challenge into an opportunity for explosive growth.",
    },
];  

// Partnership
const partSection: PartnershipSection[] = [
        {
            title: "Data-Driven Solutions",
            desc: "Customized strategies powered by AI, automation, and predictive analytics.",
            points: [
                "AI Powered Insights",
                "Automated workflows",
                "Predictive Analytics",
            ],
        },
        {
            title: "Proven Track Record",
            desc: "Delivered measurable success across industries.",
            points: [
                "Industry Expertise",
                "Success Stories",
                "Client Testimonials",
            ],
        },
        {
            title: "Scalable Technologies",
            desc: "Cloud-first, secure, and future-ready systems for long-term growth.",
            points: [
                "Cloud Solutions",
                "Security First Approach",
                "Future Ready Tech",
            ],
        },
        {
            title: "End-to-End Support",
            desc: "From ideation to execution and optimization, we're with you every step of the way.",
            points: [
                "Consulting & Strategy",
                "Implementation Support",
                "Ongoing Optimization",
            ],
        },
];

// Approach
const processSteps: ProcessStep[] = [
    {
        id: 1,
        title: "Consultation",
        content:
            "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
        id: 2,
        title: "Research and Strategy Development",
        content:
            "We conduct in-depth market research and analyze competitors to develop a customized strategy aligned with your business goals. This ensures that our approach is data-driven and designed for maximum impact.",
    },
    {
        id: 3,
        title: "Implementation",
        content:
            "With a clear strategy in place, we begin executing the plan, leveraging advanced tools and technologies to deliver seamless solutions that align with your vision and objectives.",
    },
    {
        id: 4,
        title: "Monitoring and Optimization",
        content:
            "We continuously track performance metrics, identify areas for improvement, and make real-time adjustments to ensure optimal results and sustained growth.",
    },
    {
        id: 5,
        title: "Reporting and Communication",
        content:
            "Regular updates and transparent reporting keep you informed about progress, performance, and key insights, ensuring that you're always aligned with the project's trajectory.",
    },
    {
        id: 6,
        title: "Continual Improvement",
        content:
            "We believe in evolving with your business needs. Through regular reviews and analysis, we refine strategies and processes to drive long-term success and adaptability.",
    },
];  

// Benefits
const benefits: Benefit[] = [
    {
        prefix: "Reduce development costs by up to",
        highlight: "50%.",
        suffix: ""
    },
    {
        prefix: "Accelerate your time-to-market by up to",
        highlight: "70%.",
        suffix: ""
    },
    {
        prefix: "Start your project in just",
        highlight: "one week.",
        suffix: ""
    },
    {
        prefix: "Eliminate overhead and",
        highlight: "recruitment costs.",
        suffix: ""
    },
    {
        prefix: "",
        highlight: "Scale your team",
        suffix: "up or down as needed."
    },
    {
        prefix: "Access the",
        highlight: "right experts",
        suffix: "for every project phase."
    }
];

interface NavLink {
  id: string;
  label: string;
}

const Page: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [activeStep, setActiveStep] = useState<number | null>(null);

    const toggleSection = (index: number): void => {
        setOpenIndex(openIndex === index ? null : index);
    };    

    const whyUsNavLinks: NavLink[] = [
        { id: "why-us", label: "Why Us" },
        { id: "partenership", label: "Partenership" },
        { id: "approach", label: "Our Approach" },
    ];
    
    return (
        <main>
            {/* Hero Section */}
            <div 
                id="hero"
                className="min-h-[20rem] w-full md:h-[22rem] bg-cover bg-center flex justify-start items-center relative"
                style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1638864615951-360884c3a277?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
                }}
            >
                <div className="absolute inset-0 bg-black/20" />
                <div className="max-w-7xl relative mt-12 right-0 left-0 mx-auto">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl mx-4 md:mx-6 font-bold bg-gradient-to-r from-white drop-shadow-2xl to-transparent text-transparent bg-clip-text font-poppins">Why Us</h1>
                </div>
            </div>

            {/* why-us */}
            <section id='why-us' className='py-6 md:py-20 max-w-7xl relative right-0 left-0 lg:mx-auto md:mx-6 mx-4'>
                <div className="mb-8 text-left space-y-4">
                    <h2 className="text-3xl text-center md:text-start md:text-4xl font-bold text-black font-poppins leading-tight">
                    Why{" "}
                    <span className="text-[#D77914]">
                        Growth Grid?
                    </span>
                    </h2>
                    <p className="text-[18px] md:text-[22px] text-center md:text-xl font-medium font-afacad tracking-wide text-gray-900 mt-2">
                        {`Because we turn complexity into opportunity using AI automation solutions, workflow automation software, and predictive analytics to help businesses scale faster.`}
                    </p>
                </div>

                {/* Content Section */}
                <div className="flex h-full lg:h-[22rem] flex-col-reverse justify-between md:flex-row my-10 gap-10 md:gap-0 px-2">
                    {/* Left Side: Collapsible Sections (Standalone) */}
                    <div className="md:w-1/2 flex flex-col justify-between gap-8 md:gap-0">
                    {sections.map((section, index) => (
                        <div
                        key={index}
                        className="cursor-pointer"
                        >
                        <div
                            className="flex justify-between items-center"
                            onClick={() => toggleSection(index)}
                            onKeyDown={(e: React.KeyboardEvent) => {
                            if (e.key === "Enter" || e.key === " ") toggleSection(index);
                            }}
                            tabIndex={0}
                            role="button"
                        >
                            <h3 className="text-[22px] flex items-center pb-4 justify-between font-semibold text-[#4F1C51] border-b-2 border-[#4F1C51] font-afacad w-full">
                            {section.title}
                            <span className="text-[#4F1C51] text-2xl">
                            {openIndex === index ? <MoveDown/> : <MoveRight/>}
                            </span>
                            </h3>
                        </div>
                        <AnimatePresence>
                            {openIndex === index && (
                            <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="text-black text-lg md:text-xl tracking-wide capitalize mt-2 font-afacad"
                            >
                                {section.content}
                            </motion.p>
                            )}
                        </AnimatePresence>
                        </div>
                    ))}
                    </div>
                     {/* Right Side: Image Control */}
                    <div className="">
                    <Image
                        src="/images/pointing-laptop.avif"
                        alt="Growth Grid"
                            height={500}
                            width={700}
                        className="rounded-lg shadow-lg object-cover h-full w-[28rem]"
                    />
                    </div>
                </div>
            </section>

            {/* partenership */}
            <section id='partenership' className='md:py-16 max-w-7xl relative right-0 left-0 lg:mx-auto md:mx-6 mx-4'>
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-4xl font-bold mb-4 font-poppins">
                    Why <span className="text-[#D77914]">Partner With Us?</span>
                    </h2>
                    <p className="text-black font-afacad max-w-3xl tracking-wide text-lg md:text-2xl mx-auto">
                    {`From Industry-Leading Expertise To Innovative Technologies, Here's Why
                    Growth Grid Is The Right Choice For Your Business.`}
                    </p>
                </div>

                {/* Cards Section */}
                <div className="grid grid-cols-2 md:gap-y-6 md:gap-x-20 gap-2 md:px-20 mt-8">
                    {partSection.map((card, index) => (
                        <div
                            key={index}
                            className="bg-[#4F1C51] flex flex-col justify-evenly text-white p-2 md:p-6 rounded-lg shadow-lg"
                        >
                            <h3 className="text-sm md:text-2xl font-bold font-poppins md:font-bold mb-0 md:mb-2">{card.title}</h3>
                            <p className="md-0 md:mb-2 text-white/80 text-xs md:text-sm font-afacad">{card.desc}</p>
                            <ul className="md:space-y-3 mt-2 md:mt-6">
                            {card.points.map((point, idx) => (
                                <li key={idx} className="flex items-center text-xs md:text-sm font-afacad">
                                <span className="bg-white md:p-1 text-[#4F1C51] rounded-full w-3 h-3 md:w-5 md:h-5 flex items-center justify-center mr-2">
                                    <Check />
                                </span>
                                {point}
                                </li>
                            ))}
                            </ul>
                            <div className="w-full border-white/60 border mx-auto mt-3" />
                        </div>
                        ))}
                </div>

                {/* Partnerships Section */}
                <div className="py-12 md:py-20 px-3">
                    <h2 className="text-2xl md:text-4xl font-bold text-black font-poppins">
                    Building <span className="text-[#D77914]">Meaningful Partnerships</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-12 items-center mt-2 md:mt-8">
                    <p className="text-black text-lg md:text-xl tracking-wide text-justify font-afacad">
                        {`At Growth Grid, We Believe In Fostering Long-Term Partnerships Built On`}
                        {" "}
                        <span className="text-[#4F1C51] font-bold">
                        {`Trust, Transparency, And Collaboration.`}
                        </span>
                        {" "}
                        {`Our Commitment Is To Deliver Tailored Solutions That Drive
                        Measurable Results And Sustainable Growth.`}
                    </p>
                    {/* Seperator line */}
                    <div className="md:w-[2px] md:h-36 w-full h-[2px] bg-[#4F1C51]"></div>

                    <p className="text-black text-lg md:text-xl tracking-wide text-justify font-afacad">
                        {`We go beyond delivering services—we become an AI-augmented extension of your team, aligning every solution with your business objectives using cloud migration services, data analytics, and automation tools.`}
                    </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between w-full items-start md:gap-8 md:mt-12 px-2">
                    <div className="">
                    <h2 className="text-2xl md:text-4xl text-gray-900 font-bold font-poppins">
                        Driving Business{" "}
                        <span className="text-[#D77914]">
                        Growth!
                        </span>
                    </h2>
                    <p className="text-black md:mt-4 text-lg sm:text-xl md:text-2xl font-afacad">
                        When you choose Growth Grid, you can expect To:
                    </p>
                    </div>
                    <div className=" mx-auto md:px-4 py-6 font-afacad">
                        <ul className="space-y-5 md:space-y-7">
                            {benefits.map((item, index) => (
                            <li key={index} className="flex">
                                {/* Checkbox container - fixed width on mobile */}
                                <div className="flex-shrink-0 mt-1">
                                <span className="bg-[#4F1C51] rounded-full w-4 h-4 md:w-6 md:h-6 flex items-center justify-center text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 md:w-4 md:h-4">
                                    <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                </div>
                                
                                {/* Text content - with wrapping capabilities */}
                                <div className="ml-3 text-base md:text-lg lg:text-[22px] text-gray-900 tracking-wide leading-tight">
                                {item.prefix && <span>{item.prefix} </span>}
                                <span className="text-[#4F1C51] font-bold">{item.highlight}</span>
                                {item.suffix && <span> {item.suffix}</span>}
                                </div>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* approach */}
            <section id='approach' className='w-full relative right-0 left-0 lg:mx-auto'>
            <section className='bg-[#4F1C51] px-6 py-6 md:py-16 lg:py-20'>
                <div className="max-w-7xl mx-4 sm:mx-6 lg:mx-auto flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 items-start">
                    {/* Left Side - Heading and Image */}
                    <div className="w-full lg:w-1/2">
                    <h2 className="text-2xl md:text-4xl font-poppins font-bold leading-tight text-white text-center md:text-start">
                        Our Approach
                    </h2>
                    <p className="mt-2 text-lg sm:text-xl md:text-2xl tracking-wide text-white font-afacad text-center md:text-start">
                        Marrying Innovation with Impact
                    </p>
                    <div className="mt-6 bg-white/40 py-4 px-3 rounded-xl w-full overflow-hidden">
                        <div className="flex justify-center">
                        <Image
                            src="/images/desk-laptop.avif"
                            alt="Office"
                            height={400}
                            width={700}
                            className="rounded-lg w-full h-auto object-cover max-w-full lg:max-w-[600px] min-h-[180px] sm:min-h-[200px] md:h-[280px] lg:h-[320px]"
                            loading="lazy"
                        />
                        </div>
                    </div>
                    </div>
                    
                    {/* Right Side - Content */}
                    <div className="w-full lg:w-1/2 lg:mt-0 text-white">
                    <div className="space-y-6">
                        <div>
                        <h3 className="text-lg md:text-2xl font-bold font-poppins">AI-Enhanced Marketing</h3>
                        <p className="mt-2 text-[14px] md:text-lg tracking-wide text-justify font-afacad">
                            {`We harness the power of AI to create hyper-personalized campaigns
                            from social media strategies that boost engagement by 3x to paid
                            advertising that delivers 5x ROAS. Our campaigns aren't just
                            creative they're calculated.`}
                        </p>
                        </div>
                        
                        <hr className="border-white/70" />
                        
                        <div>
                        <h3 className="text-lg md:text-2xl font-bold font-poppins">Smart Automation</h3>
                        <p className="mt-2 text-[14px] md:text-lg tracking-wide font-afacad text-justify">
                            {`We replace tedious manual processes with seamless, AI-powered
                            workflows. By integrating advanced tools like UiPath and Power
                            Automate, we ensure that your business runs smarter, faster, and
                            more efficiently.`}
                        </p>
                        </div>
                        
                        <hr className="border-white/70" />
                        
                        <div>
                        <h3 className="text-lg md:text-2xl font-bold font-poppins">Predictive Precision</h3>
                        <p className="mt-2 text-[14px] md:text-lg font-afacad tracking-wide text-justify">
                            {`In today's rapidly evolving market, intuition isn't enough. We
                            employ predictive analytics to forecast trends, optimize
                            inventory, and fine-tune every customer interaction in real time.`}
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </section>

                <section className='max-w-7xl py-12 md:py-20 w-full relative right-0 left-0 lg:mx-auto'>
                        <div className=''>
                            <h2 className="text-2xl md:text-5xl text-black font-bold text-center tracking-wide font-poppins">
                            Our{" "}
                            <span className="text-[#D77914]">
                                Working Process
                            </span>
                            </h2>
                            <p className="text-center text-black font-afacad text-xl md:text-2xl tracking-wide mt-2">
                            Step-By-Step Guide To Achieving Your Business Goals
                            </p>
                        </div>

                        <div className="mt-6 md:mx-6 mx-4">
                    {processSteps.map((step) => (
                        <motion.div
                        key={step.id}
                        className="mb-4 border border-black overflow-hidden shadow-[0_4px_0px_black]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: step.id * 0.1 }}
                        >
                        <div
                            className={`flex font-afacad justify-between items-center p-5 text-xl md:text-2xl cursor-pointer tracking-wide border-b-2 border-white ${
                            activeStep === step.id
                                ? "bg-[#4F1C51] text-white"
                                : "bg-white text-black"
                            }`}
                            onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                        >
                            <span>
                            {step.id.toString().padStart(2, "0")} {step.title}
                            </span>
                            <motion.div
                            initial={{ rotate: 0 }}
                            animate={{ rotate: activeStep === step.id ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            >
                            {activeStep === step.id ? (
                                <Minus className="text-xl" />
                            ) : (
                                <Plus className="text-xl" />
                            )}
                            </motion.div>
                        </div>
                        
                        <AnimatePresence>
                            {activeStep === step.id && (
                            <motion.div
                                className="bg-[#4F1C51] font-afacad text-white font-medium overflow-hidden"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ 
                                height: { duration: 0.4, ease: "easeInOut" },
                                opacity: { duration: 0.3 }
                                }}
                            >
                                <div className="p-5">
                                {step.content}
                                </div>
                            </motion.div>
                            )}
                        </AnimatePresence>
                        </motion.div>
                    ))}
                    </div>
                </section>
            </section>
        </main>
    );
};

export default Page;