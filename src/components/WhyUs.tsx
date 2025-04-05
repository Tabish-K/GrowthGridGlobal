"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

interface StatItem {
    value: number;
    prefix?: string;
    suffix?: string;
    description: string;
    image: string;
}

interface AnimatedNumberProps {
    value: number;
    isInView: boolean;
    prefix?: string;
    suffix?: string;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
    value,
    isInView,
    prefix = "",
    suffix = "",
}) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) {
        // Reset counter when out of view
        setCount(0);
        return;
    }

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

    return (
        <span>
        {prefix}
        <motion.span>{count}</motion.span>
        {suffix}
        </span>
    );
};

const WhyUs: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            staggerChildren: 0.3,
        },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
        },
    };

    const stats: StatItem[] = [
        {
        value: 100,
        suffix: "+",
        description: "Businesses empowered globally",
        image: "/global.jpg",
        },
        {
        value: 40,
        suffix: "%",
        description: "Average operational efficiency achieved",
        image: "/achieved.jpg",
        },
        {
        value: 2,
        prefix: "$",
        suffix: "M+",
        description: "Saved annually accross automated workflows",
        image: "/currency.jpg",
        },
    ];

    return (
        <div
        id="why-us"
        className="bg-white text-black py-8"
        >
        <motion.div
            ref={sectionRef}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="max-w-7xl mx-auto"
        >
            {/* Header Section */}
            <div className="px-4">
            <motion.div variants={itemVariants} className="mb-6">
                <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-3">
                We are <br />
                <span className="text-[#4F1C51]">Growth Grid</span>
                </h1>

                <p className="text-xl md:text-2xl font-afacad leading-tight text-justify">
                    {`we specialize in AI-driven business solutions, cloud migration services leveraging predictive analytics to craft high-impact strategies for scalable success.`}
                </p>
            </motion.div>
            </div>

            {/* Stats Grid - 2x2 on mobile, 3x2 on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 mb-12">
            {/* First stat card with world map */}
            <motion.div
                variants={itemVariants}
                className="relative sm:rounded-lg overflow-hidden"
            >
                <div className="relative aspect-video overflow-hidden bg-black">
                <Image
                    src={stats[0].image}
                    alt="World map with data points"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                    <h2 className="text-4xl font-bold text-white font-poppins">
                    <AnimatedNumber
                        value={stats[0].value}
                        isInView={isInView}
                        suffix={stats[0].suffix}
                    />
                    </h2>
                    <p className="text-white text-lg w-[14rem] font-bold md:text-2xl font-afacad">{stats[0].description}</p>
                </div>
                </div>
            </motion.div>

            {/* Second stat card with office */}
            <motion.div
                variants={itemVariants}
                className="relative sm:rounded-lg overflow-hidden"
            >
                <div className="relative aspect-video overflow-hidden bg-black">
                <Image
                    src={stats[1].image}
                    alt="Office environment"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent flex flex-col justify-end p-4">
                    <h2 className="text-4xl font-bold text-black font-poppins">
                    <AnimatedNumber
                        value={stats[1].value}
                        isInView={isInView}
                        suffix={stats[1].suffix}
                    />
                    </h2>
                    <p className="text-black font-bold text-xl w-[14rem] md:text-2xl font-afacad">{stats[1].description}</p>
                </div>
                </div>
            </motion.div>

            {/* Third stat card with money */}
            <motion.div
                variants={itemVariants}
                className="relative sm:rounded-lg overflow-hidden md:col-span-2 lg:col-span-1"
            >
                <div className="relative aspect-video overflow-hidden bg-black">
                <Image
                    src={stats[2].image}
                    alt="Cash money"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                    <h2 className="text-4xl font-bold text-white font-poppins">
                    <AnimatedNumber
                        value={stats[2].value}
                        isInView={isInView}
                        prefix={stats[2].prefix}
                        suffix={stats[2].suffix}
                    />
                    </h2>
                    <p className="text-white text-lg font-bold w-[14rem] md:text-2xl font-afacad">{stats[2].description}</p>
                </div>
                </div>
            </motion.div>

            
            {/* Text content in desktop view */}
            <motion.div
                variants={itemVariants}
                className="hidden lg:block"
            >
                <div className="h-full flex flex-col justify-center items-center">
                <p className="text-xl md:text-2xl mb-6 font-afacad">
                    Our scalable technologies ensure cloud-first, secure, and
                    future-ready systems that empower long-term growth. With a{" "}
                    <span className="text-[#4F1C51] font-semibold">
                    proven track record
                    </span>{" "}
                    of success across industries, we bring deep expertise, impactful
                    results, and satisfied clients.
                </p>
                <div className="">
                    <button className="flex items-center justify-center bg-[#4F1C51] hover:bg-[#4F1C51] text-white py-2 px-8 rounded-full transition-all">
                    <span className="text-lg md:text-2xl font-medium font-afacad">
                        Learn more about Us
                    </span>
                    </button>
                </div>
                </div>
            </motion.div>
            </div>

            {/* Text content in mobile/tablet view */}
            <motion.div variants={itemVariants} className="lg:hidden mb-8 px-4">
            <p className="text-lg leading-tight text-justify md:text-xl mb-6 font-afacad">
                Our scalable technologies ensure cloud-first, secure, and
                future-ready systems that empower long-term growth. With a{" "}
                <span className="text-[#4F1C51] font-semibold">
                proven track record
                </span>{" "}
                of success across industries, we bring deep expertise, impactful
                results, and satisfied clients.
            </p>
            <div className="mt-8 md:flex justify-center font-afacad hidden">
                <button className="flex items-center justify-center bg-[#4F1C51] hover:bg-[#4F1C51] text-white py-3 px-8 rounded-full transition-all">
                <span className="text-lg font-medium">Learn more about Us</span>
                </button>
            </div>
            </motion.div>

            <div className="flex flex-col gap-10 justify-center w-full relative items-center px-4 md:px-0">
                <div className="bg-black h-[2px] w-[80dvw] mx-auto"/>
                <div>
                    <h1 className="text-black px-4 md:px-0 md:text-start text-4xl text-center md:text-5xl font-extrabold font-poppins">Our capabilities & <span className="text-[#D77914]">Real impact</span></h1>
                </div>
                <div className="flex flex-col gap-6 text-justify">
                    <div className="flex items-center gap-4 font-afacad tracking-wide text-lg md:text-2xl">
                        <CheckCircle/>
                        <p>{`Increased leads by 63% and cut support time by 72%, with 4.6x in driving conversions.`}</p>
                    </div>
                    <div className="flex items-center gap-4 font-afacad tracking-wide text-lg md:text-2xl">
                        <CheckCircle/>
                        <p>{`Boosted form submissions by 41%, improved load time by 1.8s, and reduced bounce rate by 33%`}</p>
                    </div>
                    <div className="flex items-center gap-4 font-afacad tracking-wide text-lg md:text-2xl">
                        <CheckCircle/>
                        <p>{`Delivered investor-ready positioning, global GTM plans, competitor play books.`}</p>
                    </div>
                    <div className="flex items-center gap-4 font-afacad tracking-wide text-lg md:text-2xl">
                        <CheckCircle/>
                        <p>{`Built viral content(1.2M views), improved UX, and rebranded startups from scratch.`}</p>
                    </div>

                    <div className="mt-2 flex justify-center font-afacad md:hidden">
                        <button className="flex items-center justify-center bg-[#4F1C51] hover:bg-[#4F1C51] text-white py-2 px-8 rounded-full transition-all">
                        <span className="text-xl font-medium">Learn more about Us</span>
                        </button>
                    </div>
                </div>
                <div className="bg-black h-[2px] w-[80dvw] mx-auto mt-6"/>
            </div>
        </motion.div>
        </div>
    );
};

export default WhyUs;
