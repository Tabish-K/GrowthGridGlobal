"use client";

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from "next/link";

const HERO_CONTENT = {
    "SRO": {
        title: "Strategic Resourcing Optimization",
        description: "Streamline your workforce with intelligent resource allocation and strategic talent management.",
    },
    "Brand Marketing": {
        title: "Elevate Your Brand Strategy",
        description: "Craft compelling narratives and build powerful brand identities that resonate with your target audience.",
    },
    "AI & Automation": {
        title: "Transforming Business with AI Solutions",
        description: "Leverage cutting-edge artificial intelligence to automate processes and drive unprecedented efficiency.",
    },
    "Technology": {
        title: "Innovative Technology Solutions",
        description: "Empower your business with state-of-the-art technological innovations and digital transformation strategies.",
    },
    "Workflow Automation": {
        title: "Optimize Your Operational Workflows",
        description: "Design and implement intelligent workflow automation to enhance productivity and reduce operational friction.",
    }
};

const HeroSection = () => {
    const [activeService, setActiveService] = useState("SRO");
    const buttonLabels = Object.keys(HERO_CONTENT);
    const buttonRefs = useRef({});

    // Auto-rotate content every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            const currentIndex = buttonLabels.indexOf(activeService);
            const nextIndex = (currentIndex + 1) % buttonLabels.length;
            setActiveService(buttonLabels[nextIndex]);
        }, 5000);

        return () => clearInterval(interval);
    }, [activeService]);

    // Auto-scroll to active button
    // useEffect(() => {
    //     if (buttonRefs.current[activeService]) {
    //         buttonRefs.current[activeService].scrollIntoView({
    //             behavior: "smooth",
    //             inline: "center",
    //             block: "nearest",
    //         });
    //     }
    // }, [activeService]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.7,
                ease: "easeOut"
            }
        }
    };

    const currentContent = HERO_CONTENT[activeService];
    const backgroundImage = 'https://plus.unsplash.com/premium_photo-1667354156049-664188e8d53d?q=80&w=1926&auto=format&fit=crop';

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="bg-cover bg-center h-screen z-20 text-white relative flex flex-col justify-between w-full p-4 lg:p-8"
            style={{
                backgroundImage: `url('${backgroundImage}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'background-image 0.5s ease-in-out'
            }}
        >
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

            {/* Main content section */}
            <motion.div 
                variants={containerVariants}
                className="hero-content max-w-screen-lg w-full mt-32 lg:mt-48"
            >
                <motion.h1 
                    key={activeService}
                    variants={itemVariants}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="hero-title text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6"
                >
                    {currentContent.title}
                </motion.h1>
                <motion.p 
                    key={`desc-${activeService}`}
                    variants={itemVariants}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="hero-description text-base sm:text-lg lg:text-xl mb-6 lg:mb-8 max-w-3xl"
                >
                    {currentContent.description}
                </motion.p>
                <motion.div 
                    variants={containerVariants}
                    className="hero-cta flex flex-wrap gap-4"
                >
                    {['Get a Free Consultation', 'Explore Our Solutions →'].map((label, index) => (
                        <motion.a 
                            key={label}
                            variants={itemVariants}
                            href={index === 0 ? "#" : "/explore"}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="border-b-2 px-4 py-2 lg:px-6 lg:py-4 hover:bg-white hover:text-black transition-colors"
                        >
                            {label}
                        </motion.a>
                    ))}
                </motion.div>
            </motion.div>

            {/* Services section */}
            <motion.div
                variants={itemVariants}
                className="mt-8 lg:mt-0 absolute bottom-0 w-full left-0 right-0 px-4"
            >
                {/* <h2 className="text-md lg:text-lg mb-3 px-2">Our services:</h2> */}
                <div className="relative">
                    <motion.div
                        variants={containerVariants}
                        className="flex overflow-x-auto whitespace-nowrap gap-2 pb-4 scrollbar-hide"
                    >
                        {buttonLabels.map((label) => (
                            <motion.button
                                key={label}
                                ref={(el) => (buttonRefs.current[label] = el)}
                                variants={itemVariants}
                                onClick={() => setActiveService(label)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-3 py-2 lg:px-6 lg:py-4 text-sm lg:text-base transition-colors flex-none 
                                    ${activeService === label
                                        ? 'border-t-2 border-[#CC0000]'
                                        : 'hover:border-t-2 border-[#CC0000]'
                                    }`}
                            >
                                {label}
                            </motion.button>
                        ))}
                        <motion.div variants={itemVariants} className="flex-none">
                            <Link href="/inside">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="px-3 py-2 lg:px-6 lg:py-4 border-2 border-white transition-colors"
                                >
                                    →
                                </motion.button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default HeroSection;
