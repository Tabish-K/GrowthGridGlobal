"use client";
// components/ScrollNavbar.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PreNav = () => {
    const [visible, setVisible] = useState(false);
    const [activeLink, setActiveLink] = useState("solutions");

    // List of navigation links
    const navLinks = [
        { id: "solutions", label: "Solutions" },
        { id: "why-us", label: "Why Us" },
        { id: "services", label: "Services" },
        { id: "testimonials", label: "Testimonials" },
        { id: "impact", label: "Impact" },
    ];

    useEffect(() => {
        const heroSection = document.getElementById("hero");

        const handleScroll = () => {
        // Check if hero section exists
        if (!heroSection) return;

        // Show secondary navbar when scrolled past hero section
        const heroHeight = heroSection.offsetHeight;
        if (window.scrollY > heroHeight - 100) {
            setVisible(true);
        } else {
            setVisible(false);
        }

        // Update active link based on current section
        const sections = navLinks.map((link) => document.getElementById(link.id));
        const scrollPosition = window.scrollY + 100;

        sections.forEach((section, index) => {
            if (!section) return;

            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
            ) {
            setActiveLink(navLinks[index].id);
            }
        });
        };

        window.addEventListener("scroll", handleScroll);

        // Check initial state
        handleScroll();

        // Clean up
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Scroll to section
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
        window.scrollTo({
            top: element.offsetTop - 80,
            behavior: "smooth",
        });
        setActiveLink(id);
        }
    };

    return (
        <AnimatePresence>
        {visible && (
            <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 flex justify-center left-0 w-full py-2 bg-red-50 z-50"
            >
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-center md:justify-start items-center h-16">
                <div className="flex md:space-x-12">
                    {navLinks.map((link) => (
                    <div key={link.id} className="relative">
                        <button
                        onClick={() => scrollToSection(link.id)}
                        className="text-gray-600 hover:text-black px-2 py-2 text-[13px] md:text-[16px] tracking-wide font-medium"
                        >
                        {link.label}
                        </button>
                        {activeLink === link.id && (
                        <motion.div
                            layoutId="scroll-underline"
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500 font-semibold"
                            initial={false}
                            transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                            }}
                        />
                        )}
                    </div>
                    ))}
                </div>
                </div>
            </div>
            </motion.nav>
        )}
        </AnimatePresence>
    );
};

export default PreNav;
