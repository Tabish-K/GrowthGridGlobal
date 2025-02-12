"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { X, ChevronRight, Search, BookmarkIcon, Globe, Text, ChevronDown, AlignJustify, AlignLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 20);
        };

        // Handle clicks outside the navbar
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const mainNavItems = [
        { label: 'Services', hasDropdown: true, page: 'explore' },
        { label: 'About us', hasDropdown: true, page: 'about' },
        { label: 'Careers', hasDropdown: true, page: 'careers' }
    ];

    // Handler for nav link clicks
    const handleNavLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <div className="fixed w-full z-50" ref={navRef}>
            {/* Main Navigation */}
            <div className={`transition-all duration-300 ${
                hasScrolled 
                ? 'bg-white shadow-lg' 
                : 'bg-transparent'
            }`}>
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className='flex items-center gap-4'>
                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 transition-colors ${
                                hasScrolled ? 'text-gray-900' : 'text-white'
                            }`}
                        >
                            {isOpen ? <AlignLeft size={24}/> : <AlignJustify size={24} />}
                        </button>

                        {/* Logo */}
                        <Link href="/" onClick={handleNavLinkClick} className="flex items-center">
                            <span className={`text-xl font-bold transition-colors ${
                                hasScrolled ? 'text-[#CC0000]' : 'text-white'
                            }`}>
                                GROWTH GRID
                            </span>
                        </Link>
                        
                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-8 ml-8">
                            {mainNavItems.map((item) => (
                                <Link href={`/${item.page}`} key={item.label} onClick={handleNavLinkClick}>
                                    <button
                                        className={`text-sm font-semibold tracking-wider flex items-center space-x-1 transition-colors ${
                                            hasScrolled 
                                            ? 'text-gray-900 hover:text-[#CC0000]' 
                                            : 'text-white hover:text-gray-300'
                                        }`}
                                    >
                                        <span>{item.label}</span>
                                        <ChevronDown size={20}/>
                                    </button>
                                </Link>
                            ))}
                        </div>
                        </div>

                        {/* Right Section */}
                        <div className="flex items-center space-x-4">
                            <button className={`p-2 transition-colors ${
                                hasScrolled 
                                ? 'text-gray-900 hover:text-[#CC0000]' 
                                : 'text-white hover:text-gray-300'
                            }`}>
                                <Search size={20} />
                            </button>
                            <Link 
                                href="/explore" 
                                onClick={handleNavLinkClick}
                                className={`hidden lg:block text-sm font-medium transition-colors ${
                                    hasScrolled 
                                    ? 'text-gray-900 hover:text-[#CC0000]' 
                                    : 'text-white hover:text-gray-300'
                                }`}
                            >
                                Explore
                            </Link>
                            <button className="hidden lg:block">
                                <BookmarkIcon 
                                    size={20} 
                                    className={`transition-colors ${
                                        hasScrolled 
                                        ? 'text-gray-900 hover:text-[#CC0000]' 
                                        : 'text-white hover:text-gray-300'
                                    }`} 
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className={`fixed inset-0 bg-white w-[18rem] h-[35rem] rounded-br-[2rem]`}
                        style={{ top: '64px' }}
                    >
                        <div className="flex flex-col h-full overflow-y-auto">
                            <div className="px-4 py-6 space-y-6">
                                {mainNavItems.map((item) => (
                                    <Link href={`/${item.page}`} key={item.label} onClick={handleNavLinkClick}>
                                        <div className={`border-b ${
                                            hasScrolled ? 'border-gray-200' : 'border-gray-700'
                                        }`}>
                                            <button className={`flex items-center justify-between w-full py-3 text-left text-gray-800`}>
                                                <span className="text-lg font-medium">{item.label}</span>
                                                {item.hasDropdown && <ChevronRight size={20} />}
                                            </button>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className='absolute bg-white border-2 border-[#CC0000] top-0 -right-9 p-2 text-[#CC0000]'>
                            <X size={20}/>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;