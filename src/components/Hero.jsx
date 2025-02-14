"use client";

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from "next/link";
import ScrollToTop from './ScrollToTop';
import { ArrowRight } from 'lucide-react';

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

    const buttonVariants = {
        initial: { 
            scale: 1,
            backgroundColor: 'transparent',
            color: 'currentColor'
            },
            hover: { 
            scale: 1.02,
            backgroundColor: 'white',
            color: 'black',
            transition: { duration: 0.3 }
            },
            tap: { 
            scale: 0.98 
            }
        };
        
        const arrowVariants = {
            initial: { x: 0 },
            hover: { 
            x: 8,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };

    const currentContent = HERO_CONTENT[activeService];
    // const backgroundImage = 'https://plus.unsplash.com/premium_photo-1667354156049-664188e8d53d?q=80&w=1926&auto=format&fit=crop';
    // const backgroundImage = 'https://images.unsplash.com/photo-1542545486-b9c33cdd26a4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    // const backgroundImage = 'https://plus.unsplash.com/premium_photo-1711418213820-4eb379d10614?q=80&w=1793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    // const backgroundImage = 'https://images.unsplash.com/photo-1575041051612-323e644ca1b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    // const backgroundImage = 'https://images.unsplash.com/photo-1569536013655-0c62cecf2618?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    // const backgroundImage = 'https://images.unsplash.com/photo-1652212976544-f385a3b484f0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    const backgroundImage = 'https://cdn.pixabay.com/photo/2014/03/23/00/22/the-background-293017_960_720.png';
    // const backgroundImage = 'https://cdn.pixabay.com/photo/2014/03/22/17/03/the-background-292729_1280.png';
    // const backgroundImage = '';

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="bg-cover bg-center overflow-hidden min-h-[100dvh] z-20 text-white relative flex flex-col justify-between w-full p-4 lg:p-8"
            // style={{
            //     backgroundImage: `url('${backgroundImage}')`,
            //     backgroundSize: 'cover',
            //     backgroundPosition: 'center',
            //     // transition: 'background-image 0.5s ease-in-out'
            // }}
            // transition={{
            //     duration: 20,
            //     repeat: Infinity,
            //     repeatType: "reverse",
            //     ease: "linear"
            // }}
        >
            {/* Animated Background */}
            <motion.div
                className="absolute inset-0 -z-20"
                initial={{ scale: 1 }}
                animate={{ 
                    scale: [1, 1.08, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear"
                }}
                style={{
                    backgroundImage: `url('${backgroundImage}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <div className="absolute top-0 inset-0 -z-10 bg-gradient-to-b from-black/30 via-black/20 to-transparent" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

            {/* Main content section */}
            <motion.div 
                variants={containerVariants}
                className="hero-content px-6 sm:px-8 max-w-screen-lg w-full flex flex-col justify-center min-h-[90dvh]"
            >
                <motion.h1 
                    key={activeService}
                    variants={itemVariants}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold mb-10 lg:mb-6"
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
                <div className="flex flex-wrap gap-4">
                    <motion.a
                        href="/contact"
                        variants={buttonVariants}
                        initial="initial"
                        whileHover="hover"
                        whileTap="tap"
                        className="px-4 py-2 lg:px-6 lg:py-4 border-2 border-white border-current"
                    >
                        Get a Free Consultation
                    </motion.a>
                    
                    <motion.a
                        href="/explore"
                        variants={buttonVariants}
                        initial="initial"
                        whileHover="hover"
                        whileTap="tap"
                        className="flex items-center gap-2 px-4 py-2 lg:px-6 lg:py-4"
                    >
                        <span>Explore Our Solutions</span>
                        <motion.div
                        variants={arrowVariants}
                        >
                        → 
                        </motion.div>
                    </motion.a>
                </div>
            </motion.div>

            {/* Services section */}
            <motion.div
                variants={itemVariants}
                className="mt-8 lg:mt-0 absolute bottom-0 w-full left-0 right-0 px-4"
            >
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
                                    className="px-3 py-2 lg:px-6 lg:py-4 text-2xl hover:bg-white hover:text-black transition-colors"
                                >
                                    →
                                </motion.button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
            <div className='absolute z-20 bottom-8'>
            <ScrollToTop/>
            </div>
        </motion.div>
    );
};

export default HeroSection;