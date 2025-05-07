"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ScrollToTop from "./ScrollToTop";
import { MoveRight } from "lucide-react";

    type HeroContent = {
        [key: string]: {
            title: string;
            description: string;
        };
    };

    const HERO_CONTENT: HeroContent = {
        SRO: {
            title: "Strategic Resourcing Optimization",
            description:
            "Streamline your workforce with intelligent resource allocation and strategic talent management.",
        },
        "Brand Marketing": {
            title: "Elevate Your Brand Strategy",
            description:
            "Craft compelling narratives and build powerful brand identities that resonate with your target audience.",
        },
        "AI & Automation": {
            title: "Transforming Business with AI Solutions",
            description:
            "Leverage cutting-edge artificial intelligence to automate processes and drive unprecedented efficiency.",
        },
        Technology: {
            title: "Innovative Technology Solutions",
            description:
            "Empower your business with state-of-the-art technological innovations and digital transformation strategies.",
        },
        "Workflow Automation": {
            title: "Optimize Your Operational Workflows",
            description:
            "Design and implement intelligent workflow automation to enhance productivity and reduce operational friction.",
        },
    };

    const HeroSection: React.FC = () => {
    const [activeService, setActiveService] = useState<string>("SRO");
    const buttonLabels = Object.keys(HERO_CONTENT);
    const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const interval = setInterval(() => {
        const currentIndex = buttonLabels.indexOf(activeService);
        const nextIndex = (currentIndex + 1) % buttonLabels.length;
        setActiveService(buttonLabels[nextIndex]);
        }, 5000);

        return () => clearInterval(interval);
    }, [activeService, buttonLabels]);

    useEffect(() => {
        if (buttonRefs.current[activeService] && scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const button = buttonRefs.current[activeService];

        if (button) {
            const scrollLeft =
            button.offsetLeft - container.clientWidth / 2 + button.clientWidth / 2;

            container.scrollTo({
            left: scrollLeft,
            behavior: "smooth",
            });
        }
        }
    }, [activeService]);

    const currentContent = HERO_CONTENT[activeService];
    const backgroundImage =
        "https://plus.unsplash.com/premium_photo-1667354156049-664188e8d53d?q=80&w=1926&auto=format&fit=crop";

    return (
        <motion.div
        initial="hidden"
        animate="visible"
        id="hero"
        className="bg-cover font-outfit bg-center overflow-hidden min-h-[100dvh] z-20 text-white relative flex flex-col justify-between w-full p-4 lg:p-8"
        >
        <motion.div
            className="absolute inset-0 -z-20"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.08, 1] }}
            transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
            }}
            style={{
            backgroundImage: `url('${backgroundImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            }}
        />
        <div className="absolute top-0 inset-0 -z-10 bg-gradient-to-b from-black/20 via-black/10 to-transparent" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

        <motion.div className="hero-content px-6 sm:px-8 max-w-screen-lg w-full flex flex-col justify-center min-h-[90dvh]">
            <motion.h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold mb-6 lg:mb-8 font-poppins tracking-wide h-max">
            {currentContent.title}
            </motion.h1>
            <motion.p className="hero-description text-xl sm:text-2xl lg:text-3xl mb-6 lg:mb-8 max-w-3xl font-afacad">
            {currentContent.description}
            </motion.p>
            <div className="flex flex-wrap gap-4 font-afacad">
            <motion.a
                href="/contact"
                className="px-4 py-2 text-xl lg:px-6 lg:py-4 border-2 border-white border-current"
            >
                Get a Free Consultation
            </motion.a>

            <motion.a
                href="/explore-services"
                className="flex items-center text-xl gap-2 px-4 py-2 lg:px-6 lg:py-4"
            >
                <span>Explore Our Solutions</span>
                <motion.div>
                <MoveRight />
                </motion.div>
            </motion.a>
            </div>
        </motion.div>

        <motion.div className="mt-8 lg:mt-0 absolute bottom-0 w-full left-0 right-0 px-4">
            <div className="relative">
            <motion.div
                ref={scrollContainerRef}
                className="flex overflow-x-auto whitespace-nowrap gap-2 pb-4 scrollbar-hide scroll-smooth"
            >
                {buttonLabels.map((label) => (
                <motion.button
                    key={label}
                    ref={(el) => {
                        buttonRefs.current[label] = el;
                    }}
                    onClick={() => setActiveService(label)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-3 py-2 font-afacad lg:px-6 lg:py-4 text-lg lg:text-xl transition-colors flex-none ${
                    activeService === label
                        ? "border-t-2 border-[#CC0000]"
                        : "hover:border-t-2 border-[#CC0000]"
                    }`}
                >
                    {label}
                </motion.button>
                ))}
                {/* <motion.div className="flex-none"> */}
                {/* <Link href="/explore">
                    <motion.button className="px-3 py-2 lg:px-6 lg:py-4 text-2xl hover:bg-white hover:text-black transition-colors">
                    <MoveRight />
                    </motion.button>
                </Link> */}
                {/* </motion.div> */}
            </motion.div>
            </div>
        </motion.div>

        <div className="absolute z-20 bottom-8">
            <ScrollToTop />
        </div>
        </motion.div>
    );
};

export default HeroSection;
