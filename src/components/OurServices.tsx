"use client";

import React, { useState, useEffect, useRef } from "react";
import { Brain, CheckCircle, Cloud, Cog, Filter, Fingerprint, icons, Magnet, RefreshCw, Rocket, Terminal } from "lucide-react";

interface ServiceCardProps {
    title: string;
    subtitle: string;
    icon: any;
    color: string;
    features: string[];
}

const serviceCards: ServiceCardProps[] = [
    {
        title: "Brand Reboot Sprint",
        subtitle: "2-week sprint to develop or rebrand your brand from scratch.",
        icon: <Rocket size={36}/>,
        color: "bg-[#4F1C51] text-white",
        features: [
        "Competitor & audience research",
        "Brand positioning strategy",
        "Logo, palette, typography, icon design",
        "5-page WordPress/Webflow website",
        "3 branded social media templates",
        "Brand story deck or launch video",
        ],
    },
    {
        title: "Website + Funnel Fix",
        subtitle:
        "Designed for SaaS, AI, and B2B brands to increase web performance.",
        icon: <Filter size={36}/>,
        color: "bg-[#D77914] text-black",
        features: [
        "Website audit",
        "Landing page redesign (1-3 pages)",
        "Conversion-focused copy",
        "Lead-gen tools integration",
        "Analytics setup and tracking",
        ],
    },
    {
        title: "Startup Growth Engine",
        subtitle: "Plug-and-play growth team to handle all your growth channels.",
        icon: <Cog size={36}/>,
        color: "bg-[#4F1C51] text-white",
        features: [
        "Strategy + content planning",
        "Website updates and CRO",
        "Paid social media content",
        "Paid ads (Google, Meta)",
        "Email & LinkedIn outreach campaigns",
        "Analytics and reporting dashboards",
        ],
    },
    {
        title: "Tech Launchpad ",
        subtitle: "Custom development for MVPs or internal tools.",
        icon: <Terminal size={36}/>,
        color: "bg-[#D77914] text-black",
        features: [
            "Custom UI/UX design",
            "Web or mobile app development", 
            "API integrations", 
            "AI chatbot or voice agent", 
            "Cloud deployment & DevOps support"
        ],
    },
    {
        title: "Full Funnel Lead Kit",
        subtitle: "Done-for-you outbound system setup for qualified leads.",
        icon: <Magnet size={36}/>,
        color: "bg-[#4F1C51] text-white",
        features: [
            "ICP & competitor research", 
            "Cold email + LinkedIn campaign setup", 
            "Domain warm-up, automation tracking", 
            "Follow-ups, and inbox management",
            "CRM tracking",
            "SDR hand-off"
        ],
    },
    {
        title: "Cloud Infra Setup",
        subtitle: "Robust, scalable, and secure cloud setup for your application or platform.",
        icon: <Cloud size={36}/>,
        color: "bg-[#D77914] text-black",
        features: [
            "Cloud architecture planning", 
            "Deployment pipelines", 
            " Auto-scaling, monitoring, backups", 
            "Ongoing infra management"
        ],
    },
    {
        title: "AI Voice Agent ",
        subtitle: "Automated voice solutions for sales, support, or onboarding.",
        icon: <Brain size={36}/>,
        color: "bg-[#4F1C51] text-white",
        features: [
            "Custom voice agent flow design", 
            "API/CRM integrations", 
            "Smart fallback & human handoff", 
            "Hosted solution with analytics"
        ],
    },
    {
        title: "Cybersec Essentials",
        subtitle: "Protect your business from digital threats with our essential security services.",
        icon: <Fingerprint size={36}/>,
        color: "bg-[#D77914] text-black",
        features: [
            "Website/app security audit", 
            "SSL, firewall & DDoS setup", 
            "Basic compliance support", 
            "Threat monitoring tools"
        ],
    },
];

const ServiceCard: React.FC<ServiceCardProps> = ({
    title,
    subtitle,
    icon,
    color,
    features,
}) => {
    return (
        <div className={`${color} rounded-lg p-6 h-full flex flex-col`}>
        <div className="bg-white text-black rounded-full w-20 h-20 flex items-center justify-center mb-4">
            {icon}
        </div>

        <div className="mb-4">
            <h3 className={`${color} text-xl md:text-2xl font-bold font-poppins`}>{title}</h3>
            <p className={`${color} opacity-75 text-sm md:text-lg mt-1 font-afacad`}>{subtitle}</p>
        </div>

        <div className="flex-grow font-afacad">
            <ul className="space-y-2">
            {features.map((feature, index) => (
                <li key={index} className={`${color} flex items-center gap-2 font-bold tracking-wide text-sm md:text-lg`}>
                <CheckCircle size={16}/>
                <span>{feature}</span>
                </li>
            ))}
            </ul>
        </div>
        <div className={`h-[1px] bg-white/60 w-full mt-6 mb-2`}></div>
        </div>
    );
};

export default function OurServices() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const autoScrollTimerRef = useRef<NodeJS.Timeout | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [visibleSlides, setVisibleSlides] = useState(3);
    const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // Update visible slides based on screen size
    useEffect(() => {
        const updateVisibleSlides = () => {
        if (window.innerWidth < 768) {
            setVisibleSlides(1.2); // 1 full card + 1 half card
        } else if (window.innerWidth < 1024) {
            setVisibleSlides(2);
        } else {
            setVisibleSlides(3);
        }
    };

    updateVisibleSlides();
    window.addEventListener("resize", updateVisibleSlides);
    return () => window.removeEventListener("resize", updateVisibleSlides);
    }, []);

    // Calculate number of pages
    const pageCount = Math.ceil(serviceCards.length / Math.floor(visibleSlides));

    // Function to scroll to a specific page
    const scrollToPage = (index: number) => {
        if (scrollContainerRef.current) {
        const maxPage = pageCount - 1;
        const pageIndex = Math.min(Math.max(0, index), maxPage);

        // Get visible slides as an integer for calculation
        const visibleSlidesInt = Math.floor(visibleSlides);
        const cardWidth =
            scrollContainerRef.current.scrollWidth / serviceCards.length;

        scrollContainerRef.current.scrollTo({
            left: pageIndex * visibleSlidesInt * cardWidth,
            behavior: "smooth",
        });

        setActiveIndex(pageIndex);
        }
    };

    // Auto-scrolling
    useEffect(() => {
        const startAutoScroll = () => {
        if (autoScrollTimerRef.current) {
            clearInterval(autoScrollTimerRef.current);
        }

        autoScrollTimerRef.current = setInterval(() => {
            if (!isAutoScrollPaused) {
            const nextIndex = (activeIndex + 1) % pageCount;
            scrollToPage(nextIndex);
            }
        }, 5000); // Change slide every 5 seconds
        };

        startAutoScroll();

        return () => {
        if (autoScrollTimerRef.current) {
            clearInterval(autoScrollTimerRef.current);
        }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeIndex, isAutoScrollPaused, pageCount]);

    // Handle scroll events to update active index
    useEffect(() => {
        const handleScroll = () => {
        if (scrollContainerRef.current && !isDragging) {
            const scrollPosition = scrollContainerRef.current.scrollLeft;
            const cardWidth =
            scrollContainerRef.current.scrollWidth / serviceCards.length;
            const visibleSlidesInt = Math.floor(visibleSlides);

            const index = Math.round(
            scrollPosition / (cardWidth * visibleSlidesInt)
            );
            if (index !== activeIndex) {
            setActiveIndex(index);
            }
        }
        };

        const container = scrollContainerRef.current;
        if (container) {
        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
        }
    }, [activeIndex, isDragging, visibleSlides]);

    // Mouse and touch event handlers
    const handleMouseEnter = () => setIsAutoScrollPaused(true);
    const handleMouseLeave = () => setIsAutoScrollPaused(false);

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0));
        setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
        setIsAutoScrollPaused(true);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
        const walk = (x - startX) * 2; // Scroll speed multiplier
        if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        setTimeout(() => setIsAutoScrollPaused(false), 2000);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true);
        setStartX(
        e.touches[0].pageX - (scrollContainerRef.current?.offsetLeft || 0)
        );
        setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
        setIsAutoScrollPaused(true);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;
        const x =
        e.touches[0].pageX - (scrollContainerRef.current?.offsetLeft || 0);
        const walk = (x - startX) * 2;
        if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
        setTimeout(() => setIsAutoScrollPaused(false), 2000);
    };

return (
    <div className="max-w-7xl mx-auto pb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 font-poppins">
            <span className="text-[#4F1C51]">Services</span> designed to drive
            <span className="text-[#D77914]"> Results</span>
        </h2>

        <div
            className="relative overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
            ref={scrollContainerRef}
            className="flex overflow-x-scroll scrollbar-hide snap-x snap-mandatory"
            style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            >
            {serviceCards.map((card, index) => (
                <div
                key={index}
                className={`flex-shrink-0 px-2 snap-start`}
                style={{
                    width: `${100 / visibleSlides}%`,
                }}
                >
                <ServiceCard
                    title={card.title}
                    subtitle={card.subtitle}
                    icon={card.icon}
                    color={card.color}
                    features={card.features}
                />
                </div>
            ))}
            </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center space-x-2 mt-6">
            {Array.from({ length: pageCount }).map((_, index) => (
            <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex === index ? "bg-[#D77914] w-6" : "bg-black"
                }`}
                onClick={() => scrollToPage(index)}
                aria-label={`Go to page ${index + 1}`}
            />
            ))}
        </div>
        <div className="bg-black h-[2px] w-[70dvw] mx-auto mt-10 md:mt-20"/>
        </div>
    );
}
