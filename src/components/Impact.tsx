/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

    interface CaseStudy {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    imageUrl: string;
    }

    const caseStudies: CaseStudy[] = [
        {
            id: "dtc-brand",
            title:
            "Scaling a DTC brand's revenue 4X with AI-driven paid advertising",
            subtitle: "Accelerating Growth Through AI-Powered Marketing",
            description: "",
            imageUrl: "/wellness-case-study.jpg",
        },
        {
            id: "startup-feature",
            title:
            "How a SaaS startup feature tripled revenue by 285% in 6 months",
            subtitle: "Optimizing Cloud Infrastructure for Scalable Growth",
            description: "",
            imageUrl: "/telecom-case-study.jpg",
        },
        {
            id: "fitness-platforms",
            title:
            "Transforming fitness platforms with data-powered nutrition",
            subtitle: "Revolutionizing Digital Fitness Through Personalized Nutrition",
            description: "",
            imageUrl: "/retail-case-study.jpg",
        },
        ];

    const CaseStudies: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);
    const autoScrollTimerRef = useRef<NodeJS.Timeout | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    // Check if device is mobile
    useEffect(() => {
        const checkIsMobile = () => {
        setIsMobile(window.innerWidth < 768);
        };

        // Initial check
        checkIsMobile();
        
        // Listen for resize events
        window.addEventListener("resize", checkIsMobile);
        
        return () => window.removeEventListener("resize", checkIsMobile);
    }, []);

    // Function to scroll to a specific slide (only on mobile)
    const scrollToSlide = (index: number) => {
        if (scrollContainerRef.current && isMobile) {
        const maxIndex = caseStudies.length - 1;
        const slideIndex = Math.min(Math.max(0, index), maxIndex);

        const slideWidth = scrollContainerRef.current.querySelector('.slide-item')?.clientWidth || 0;
        scrollContainerRef.current.scrollTo({
            left: slideIndex * slideWidth,
            behavior: "smooth",
        });

        setActiveIndex(slideIndex);
        }
    };

    // Setup auto-scrolling for mobile
    useEffect(() => {
        if (!isMobile) return;
        
        const startAutoScroll = () => {
        if (autoScrollTimerRef.current) {
            clearInterval(autoScrollTimerRef.current);
        }

        autoScrollTimerRef.current = setInterval(() => {
            if (!isAutoScrollPaused) {
            const maxIndex = caseStudies.length - 1;
            const nextIndex = activeIndex < maxIndex ? activeIndex + 1 : 0;
            scrollToSlide(nextIndex);
            }
        }, 5000); // Change slide every 5 seconds
        };

        startAutoScroll();

        return () => {
        if (autoScrollTimerRef.current) {
            clearInterval(autoScrollTimerRef.current);
        }
        };
    }, [activeIndex, isAutoScrollPaused, isMobile]);

    // Pause auto-scroll when user interacts
    const handleMouseEnter = () => setIsAutoScrollPaused(true);
    const handleMouseLeave = () => setIsAutoScrollPaused(false);
    const handleTouchStart = () => setIsAutoScrollPaused(true);
    const handleTouchEnd = () => {
        setTimeout(() => setIsAutoScrollPaused(false), 2000);
    };

    // Handle scroll events to update active index
    useEffect(() => {
        if (!isMobile || !scrollContainerRef.current) return;

        const handleScroll = () => {
        if (!scrollContainerRef.current) return;
        
        const scrollPosition = scrollContainerRef.current.scrollLeft;
        const slideWidth = scrollContainerRef.current.querySelector('.slide-item')?.clientWidth || 0;
        
        if (slideWidth > 0) {
            const newIndex = Math.round(scrollPosition / slideWidth);
            if (newIndex !== activeIndex) {
            setActiveIndex(newIndex);
            }
        }
        };

        scrollContainerRef.current.addEventListener('scroll', handleScroll);
        return () => scrollContainerRef.current?.removeEventListener('scroll', handleScroll);
    }, [activeIndex, isMobile]);

    return (
        <div className="max-w-7xl mx-auto px-4 mb-20">
        <div className="text-start mb-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#4F1C51] font-poppins">
            Case studies
            </h2>
            <p className="text-xl leading-tight text-justify md:text-2xl mt-2 mx-auto font-afacad">
            {`Explore how we've helped businesses achieve scalable growth through AI
            automation, data-driven strategies, and innovative digital solutions.`}
            </p>
        </div>

        {isMobile ? (
            // Mobile slideshow view
            <div className="relative overflow-hidden mb-8">
            <div
                ref={scrollContainerRef}
                className="flex snap-x snap-mandatory overflow-x-auto no-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                {caseStudies.map((study) => (
                <div
                    key={study.id}
                    className="slide-item flex-none w-[80vw] snap-center px-2"
                >
                    <div className="relative md:h-[30rem] h-[18rem] rounded-t-lg overflow-hidden">
                    <Image
                        src={study.imageUrl}
                        alt={study.title}
                        fill
                        sizes="80vw"
                        style={{ objectFit: "cover" }}
                        priority
                    />
                    </div>
                    <div className="p-4 bg-black/80 text-white h-[12rem] border-t-2 font-afacad flex flex-col justify-between rounded-b-lg">
                    <p className="mb-4 text-justify text-sm">{study.title}</p>
                    <Link href={`/#/case-studies/${study.id}`}>
                        <p className="inline-flex items-center gap-2 text-sm font-medium">
                        Read Case Study
                        <ArrowRight size={16} />
                        </p>
                    </Link>
                    </div>
                </div>
                ))}
            </div>
            </div>
        ) : (
            // Desktop grid view
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {caseStudies.map((study) => (
            <div
                key={study.id}
                className="rounded-md overflow-hidden shadow-lg relative"
            >
                <div className="relative h-[30rem]">
                <Image
                    src={study.imageUrl}
                    alt={study.title}
                    // layout="fill"
                    width={400}
                    height={400}
                    style={{ objectFit: "cover" }}
                />
                </div>
                <div className="p-4 absolute bottom-0 bg-black/70 text-white h-[40%] border-t-2 font-afacad flex flex-col justify-between">
                <div className="mb-2 text-sm md:text-xl font-medium">
                    {study.subtitle}
                    <div className="bg-gray-300 h-[1px] w-full" />
                </div>
                <p className="mb-4 text-justify">{study.title}</p>
                <Link href={`/company/case-study/${study.id}`}>
                    <p className="inline-flex items-center gap-2 text-sm md:text-lg font-medium">
                    Read Case Study
                    <ArrowRight size={16} />
                    </p>
                </Link>
                </div>
            </div>
            ))}
        </div>
        )}

        <div className="text-center">
            <Link href="/company/case-study">
            <p className="inline-block bg-[#D77914] hover:bg-[#D77914]/80 text-white font-medium font-afacad text-xl md:text-2xl py-2 px-12 rounded-full transition-colors">
                Read all case studies
            </p>
            </Link>
        </div>
        </div>
    );
};

export default CaseStudies;