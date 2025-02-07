"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRightIcon, Target, Eye } from "lucide-react";

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

function MoreAbout() {
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

    const cards = [
        {
            title: "Our Mission",
            description: "To revolutionize businesses by delivering data-driven solutions powered by AI and automation.",
            icon: Target,
            details: ["Data-Driven Solutions", "AI Integration", "Process Automation"]
        },
        {
            title: "Our Vision",
            description: "A future where businesses harness the power of technology to innovate and thrive in a competitive landscape.",
            icon: Eye,
            details: ["Innovation Focus", "Competitive Edge", "Technological Growth"]
        }
    ];

    const cards2 = [
        {
            title: "Data-Driven Solutions",
            description: "Customized strategies powered by AI, automation, and predictive analytics.",
            details: ["AI-powered insights", "Automated workflows", "Predictive analytics"]
        },
        {
            title: "Proven Track Record",
            description: "Delivered measurable success across industries.",
            details: ["Industry expertise", "Success stories", "Client testimonials"]
        },
        {
            title: "Scalable Technologies",
            description: "Cloud-first, secure, and future-ready systems for long-term growth.",
            details: ["Cloud solutions", "Security-first approach", "Future-ready tech"]
        },
        {
            title: "End-to-End Support",
            description: "From ideation to execution and optimization, we're with you every step of the way.",
            details: ["Consulting & Strategy", "Implementation support", "Ongoing optimization"]
        }
    ];

    return (
        <div className="bg-white text-gray-800">
            {/* We are growth grid */}
            <div className="container mx-auto px-4 lg:px-16 py-8 lg:py-12">
                <div className="max-w-4xl mx-auto space-y-12">
                <section className="bg-white">
                    <motion.div 
                        ref={sectionRef}
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="container mx-auto px-6 lg:px-12 max-w-6xl"
                    >
                        <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: "50%" }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            className="h-[2px] bg-[#CC0000] mx-auto mb-8"
                        />

                        {/* Heading Section */}
                        <motion.div variants={itemVariants} className="text-center mb-16 space-y-6">
                            <h1 className="text-3xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
                                We are Growth Grid.
                            </h1>
                            <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                Empowering businesses through technology, AI, and strategic insights, 
                                Growth Grid enables organizations to scale, adapt, and lead in their industries.
                            </p>
                        </motion.div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="text-center space-y-4 p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
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

                <motion.section 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="py-8 lg:py-12"
                >
                    <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
                        <motion.div 
                            variants={containerVariants}
                            className="grid md:grid-cols-2 gap-6 lg:gap-12"
                        >
                            {cards.map((card, index) => {
                                const Icon = card.icon;
                                return (
                                    <motion.div
                                        key={card.title}
                                        variants={itemVariants}
                                        className="group bg-gray-50 p-6 lg:p-8 border border-gray-100 hover:border-[#CC0000] transition-all duration-300"
                                    >
                                        <div className="flex items-center gap-3 mb-6">
                                            <Icon className="w-6 h-6 text-[#CC0000]" />
                                            <h2 className="text-[#CC0000] font-semibold text-lg lg:text-xl">
                                                {card.title}
                                            </h2>
                                        </div>

                                        <p className="text-gray-700 tracking-wide text-base lg:text-lg leading-relaxed mb-8">
                                            {card.description}
                                        </p>

                                        <div className="space-y-3">
                                            {card.details.map((detail, idx) => (
                                                <div 
                                                    key={idx}
                                                    className="flex items-center gap-2 text-sm lg:text-base text-gray-600"
                                                >
                                                    <ArrowRightIcon className="w-4 h-4 text-[#CC0000]" />
                                                    <span>{detail}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="h-1 w-0 group-hover:w-full bg-[#CC0000] mt-8 transition-all duration-500 opacity-20" />
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </motion.section>
                </div>
            </div>

            {/* Partner */}
            <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="py-12 lg:py-16"
        >
            <div className="container mx-auto px-4 lg:px-16">
                <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "50%" }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="h-[2px] bg-[#CC0000] mx-auto mb-8"
                />
                <h1 className="text-3xl lg:text-5xl font-bold text-center mb-6">Why Partner with Us?</h1>
                <p className="tracking-wide text-base lg:text-lg text-center mb-12">
                    From industry-leading expertise to innovative technologies, here's why Growth Grid is the right choice for your business.
                </p>
                <motion.div variants={containerVariants} className="grid md:grid-cols-2 gap-6 lg:gap-12">
                    {cards2.map((card, index) => (
                        <motion.div
                            key={card.title}
                            variants={itemVariants}
                            className="group bg-gray-50 p-6 lg:p-8 border border-gray-100 hover:border-[#CC0000] transition-all duration-300"
                        >
                            <h2 className="text-[#CC0000] font-semibold text-lg lg:text-xl mb-4">{card.title}</h2>
                            <p className="text-gray-700 tracking-wide text-base lg:text-lg leading-relaxed mb-6">{card.description}</p>
                            <div className="space-y-3">
                                {card.details.map((detail, idx) => (
                                    <div key={idx} className="flex items-center gap-2 text-sm lg:text-base text-gray-600">
                                        <ArrowRightIcon className="w-4 h-4 text-[#CC0000]" />
                                        <span>{detail}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="h-1 w-0 group-hover:w-full bg-[#CC0000] mt-8 transition-all duration-500 opacity-20" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
            {/* Explore solution */}
            <div className="container mx-auto px-4 lg:px-16 py-12 lg:py-16">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    {/* Red Line */}
                    <motion.div 
                            initial={{ width: 0 }}
                            animate={isInView ? { width: "50%" } : { width: 0 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            className="h-[2px] bg-[#CC0000] mx-auto mb-8"
                        />
                    <h1 className="text-3xl lg:text-5xl font-bold">
                        Explore Solutions Designed to Solve Your Challenges
                    </h1>
                    <p className="tracking-wide text-base lg:text-lg">
                        Our tailored services are built to address your unique pain points and deliver transformative results.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-3 lg:gap-4 mt-8 lg:mt-10">
                    {[
                        "Social Media Management",
                        "Paid Advertising",
                        "Content Creation",
                        "Website and App Development",
                        "E-Commerce Optimization",
                        "Workflow Automation",
                        "Predictive Analytics",
                        "Data and Cloud Solutions",
                        "Custom Tech Solutions",
                        "Explore All Services",
                    ].map((service, index) => (
                        <button
                            key={index}
                            className="px-4 lg:px-6 py-2 text-sm font-medium 
                                            border border-gray-300
                                            transition-all duration-200
                                            hover:border-[#CC0000] hover:text-[#CC0000]
                                            focus:outline-none focus:ring-2 focus:ring-[#CC0000] focus:ring-opacity-50"
                        >
                            {service}
                        </button>
                    ))}
                </div>
            </div>

            {/* Businesses */}
            <div className="container mx-auto px-4 lg:px-16 py-12 lg:py-16">
                {/* Red Line */}
                <motion.div 
                            initial={{ width: 0 }}
                            animate={isInView ? { width: "50%" } : { width: 0 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            className="h-[2px] bg-[#CC0000] mx-auto mb-8"
                        />
                <div className="max-w-4xl mx-auto space-y-6 mb-8 lg:mb-10">
                    <h1 className="text-3xl lg:text-5xl font-bold">
                        Revolutionizing Businesses with Tailored, AI-Powered Strategies.
                    </h1>
                    <p className="tracking-wide text-base lg:text-lg">
                        Our work speaks for itself. Dive into the details of how we've transformed industries, solved complex challenges, and driven measurable results for our clients.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {[1, 2].map((item) => (
                        <div key={item} className="flex flex-col md:flex-row gap-4 lg:gap-6">
                            <img 
                                src="https://images.unsplash.com/photo-1552960394-c81add8de6b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvcmslMjBpbiUyMG9mZmljZXxlbnwwfDF8MHx8fDA%3D"
                                alt={`Case study ${item}`}
                                className="w-full md:w-1/2 h-48 md:h-auto object-cover"
                            />
                            <div className="flex flex-col justify-between md:w-1/2">
                                <h1 className="text-2xl lg:text-3xl font-semibold mb-6">
                                    Transforming Workflow Automation for a Global Tech Firm
                                </h1>
                                <div className="bg-gray-50 p-6 lg:p-8 border border-gray-100 hover:border-[#CC0000] transition-all duration-300">
                                    <h2 className="text-[#CC0000] font-semibold mb-2 lg:mb-4">Overview</h2>
                                    <p className="tracking-wide text-sm lg:text-base">
                                        A global technology company with over 10,000 employees and operations in 15 countries faced significant inefficiencies in its internal workflows, leading to delayed project timelines, mounting operational costs, and employee burnout.
                                    </p>
                                    <button className="text-[#CC0000] text-sm lg:text-base mt-2 lg:mt-4 hover:underline">
                                        Know more
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MoreAbout;
