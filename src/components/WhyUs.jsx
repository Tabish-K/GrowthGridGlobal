"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRightIcon } from "lucide-react";

const AnimatedNumber = ({ value, isInView }) => {
    const [count, setCount] = useState(0);
    
        useEffect(() => {
        if (!isInView) return; // Only animate when in view
    
        let start = 0;
        const duration = 2000; // 2 seconds
        const stepTime = Math.max(Math.floor(duration / value), 10); // Prevent divide-by-zero issues
    
        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= value) clearInterval(timer);
        }, stepTime);
    
        return () => clearInterval(timer);
    }, [isInView, value]);

    return <motion.span>{count}</motion.span>;
};

function WhyUs() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                staggerChildren: 0.3
            }
        }
    };
    
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const stats = [
        {
            value: 100,
            suffix: "+",
            description: "Businesses empowered globally"
        },
        {
            value: 40,
            suffix: "%",
            description: "Average operational efficiency achieved for clients"
        },
        {
            value: 2,
            prefix: "$",
            suffix: "M+",
            description: "Saved annually across automated workflows"
        }
    ];

    // const cards = [
    //     {
    //         title: "Our Mission",
    //         description: "To revolutionize businesses by delivering data-driven solutions powered by AI and automation.",
    //         icon: Target,
    //         details: ["Data-Driven Solutions", "AI Integration", "Process Automation"]
    //     },
    //     {
    //         title: "Our Vision",
    //         description: "A future where businesses harness the power of technology to innovate and thrive in a competitive landscape.",
    //         icon: Eye,
    //         details: ["Innovation Focus", "Competitive Edge", "Technological Growth"]
    //     }
    // ];

    // const cards2 = [
    //     {
    //         title: "Data-Driven Solutions",
    //         description: "Customized strategies powered by AI, automation, and predictive analytics.",
    //         details: ["AI-powered insights", "Automated workflows", "Predictive analytics"]
    //     },
    //     {
    //         title: "Proven Track Record",
    //         description: "Delivered measurable success across industries.",
    //         details: ["Industry expertise", "Success stories", "Client testimonials"]
    //     },
    //     {
    //         title: "Scalable Technologies",
    //         description: "Cloud-first, secure, and future-ready systems for long-term growth.",
    //         details: ["Cloud solutions", "Security-first approach", "Future-ready tech"]
    //     },
    //     {
    //         title: "End-to-End Support",
    //         description: "From ideation to execution and optimization, we're with you every step of the way.",
    //         details: ["Consulting & Strategy", "Implementation support", "Ongoing optimization"]
    //     }
    // ];

    return (
        <div id="why-us" className="bg-white text-gray-800">
            {/* We are growth grid */}
            <div className="container mx-auto px-4 lg:px-16 py-8 lg:py-12">
                <div className="max-w-6xl mx-auto space-y-12">
                <section className="bg-white">
                    <motion.div 
                        ref={sectionRef}
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="container"
                    >
                        <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: "50%" }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            className="h-[2px] bg-[#CC0000] mx-auto mb-16"
                        />

                        {/* Heading Section */}
                        <motion.div variants={itemVariants} className="text-center mb-16 flex flex-col md:flex-row gap-12">
                            <div className="lg:w-1/2 text-center lg:text-left space-y-4 flex flex-col items-center sm:items-start">
                                <h1 className="text-3xl mb-8 sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                    We are <br />
                                    <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent">Growth Grid</span>
                                </h1>
                                <button className="relative flex items-center justify-between border-2 border-[#CC0000] px-6 sm:px-8 py-2 sm:py-3 rounded-full overflow-hidden min-w-[14rem] h-[50px] sm:h-[55px]">
                                    <span className="text-base sm:text-lg relative z-10 text-gray-800 font-semibold">
                                        Learn More
                                    </span>
                                    <span className="absolute right-2 mb-2 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gradient-to-r from-red-300 via-red-500 to-red-700 rounded-full z-10 translate-y-1">
                                        <ArrowRightIcon width={18} height={18} className="text-white" />
                                    </span>
                                    {/* <span className="absolute inset-0 bg-gradient-to-r from-transparent to-[#CC0000] opacity-20"></span> */}
                                </button>
                            </div>
                            <div className="lg:w-1/2 text-gray-700 space-y-4 text-center lg:text-left">
                                <p className="text-md sm:text-xl font-semibold text-black tracking-wide">
                                    {`We deliver data-driven solutions by leveraging AI, automation, and predictive analytics to craft customized strategies that drive measurable success.`}
                                </p>
                                <p className="text-md sm:text-lg tracking-wide">
                                    {`Our scalable technologies ensure cloud-first, secure, and future-ready systems that empower long-term growth. With a `}<span className="text-[#CC0000] font-semibold">proven track record</span> {`of success across industries, we bring deep expertise, impactful results, and satisfied clients.`}
                                </p>
                                <p className="text-md sm:text-lg tracking-wide">
                                    Our <span className="text-[#CC0000] font-semibold">{`end-to-end support`}</span> guarantees a seamless journey from ideation and strategy to implementation and ongoing optimization.
                                </p>
                            </div>
                        </motion.div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="text-center space-y-4 p-6"
                                >
                                    <h2 className="text-[#CC0000] text-4xl lg:text-5xl font-semibold tracking-tight">
                                        {stat.prefix}<AnimatedNumber value={stat.value} isInView={isInView} />{stat.suffix}
                                    </h2>
                                    <div className="w-12 h-[1px] bg-[#CC0000] mx-auto" />
                                    <p className="text-gray-600 font-medium">
                                        {stat.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>
                </div>
            </div>
        </div>
    );
}

export default WhyUs;