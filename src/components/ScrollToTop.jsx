import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled up to given distance
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
        setIsVisible(true);
        } else {
        setIsVisible(false);
        }
    };

    // Scroll to top smoothly
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
        window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <>
        {isVisible && (
            <button
            onClick={scrollToTop}
            className={`
                fixed bottom-4 right-4 p-3 md:p-4
                bg-[#CC0000]/80 hover:bg-[#CC0000]
                text-white rounded-full shadow-lg
                transition-all duration-300 ease-in-out
                transform hover:scale-110
                focus:outline-none focus:ring-2 focus:ring-[#CC0000]
                z-50
            `}
            aria-label="Scroll to top"
            >
            <ArrowUp className="h-4 w-4" />
            </button>
        )}
        </>
    );
};

export default ScrollToTop;