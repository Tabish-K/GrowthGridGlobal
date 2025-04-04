"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    // Show button when page is scrolled beyond a threshold
    const toggleVisibility = (): void => {
        setIsVisible(window.scrollY > 300);
    };

    // Scroll to top smoothly
    const scrollToTop = (): void => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        
        return () => {
        window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <>
        {isVisible && (
            <button
            onClick={scrollToTop}
            className="
                fixed bottom-4 rounded-full right-4 p-3
                bg-[#D77914]/80 hover:bg-[#D77914]
                text-white shadow-md
                transition-all duration-300 ease-in-out
                transform hover:scale-110
                focus:outline-none focus:ring-2 focus:ring-[#D77914]
                z-50
            "
            aria-label="Scroll to top"
            >
            <ArrowUp className="h-4 w-4" />
            </button>
        )}
        </>
    );
};

export default ScrollToTop;
