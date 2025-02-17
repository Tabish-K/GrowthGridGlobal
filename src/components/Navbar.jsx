"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { X, ChevronRight, BookmarkIcon, Globe, Text, ChevronDown, AlignJustify, AlignLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SearchBar from './SearchBar'; // Import the SearchBar component

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const navRef = useRef(null);

    const mainNavItems = [
        { label: 'Consulting Services', hasDropdown: true, page: 'contact' },
        { label: 'About us', hasDropdown: true, page: 'about' },
        { label: 'Blogs', hasDropdown: true, page: 'blog' },
        { label: 'Careers', hasDropdown: true, page: 'careers' }
    ];

    const mobileNavSections = [
        { label: 'Industries', hasDropdown: true, page: '#' },
        { label: 'Services', hasDropdown: true, page: 'explore' },
        { label: 'Consultation Services', hasDropdown: true, page: 'contact' },
        { label: 'Blogs', hasDropdown: true, page: 'blog' },
        { label: 'Retail', hasDropdown: true, page: '#' },
        { label: 'Our Story', hasDropdown: true, page: 'about' },
        { label: 'Careers', hasDropdown: true, page: 'careers' },
    ];
    
    const mobileBottomSections = [
        { label: 'Explore', hasDropdown: true, page: 'explore' },
        { label: 'Contact', hasDropdown: true, page: 'contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 20);
        };

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

    const handleNavLinkClick = () => {
        setIsOpen(false);
        setIsSearchOpen(false);
    };

    return (
        <>
            <div className="fixed w-full z-40" ref={navRef}>
                <div 
                    className={`transition-all duration-300 ${
                        hasScrolled || isHovered || isSearchOpen
                        ? 'bg-white shadow-lg' 
                        : 'bg-transparent'
                    }`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-2">
                        <div className="flex items-center justify-between w-full h-16">
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className={`p-2 z-50 ${
                                        hasScrolled || isHovered || isSearchOpen
                                        ? 'text-gray-500 hidden md:block' 
                                        : 'text-white'
                                    }`}
                                >
                                    {isOpen ? <AlignLeft size={24}/> : <AlignJustify size={24} />}
                                </button>

                                <Link href="/" className={`${isSearchOpen ? 'hidden md:block' : 'block'}`} onClick={handleNavLinkClick}>
                                    {hasScrolled || isHovered || isSearchOpen ?
                                        <img src='/blackLogo1.png' className='h-14' alt="Logo"/> :
                                        <img src='/whiteLogo1.png' className='h-12' alt="Logo"/>
                                    }
                                </Link>

                                {!isSearchOpen && (
                                    <div className="hidden lg:flex items-center space-x-8 ml-8">
                                        {mainNavItems.map((item) => (
                                            <Link href={`/${item.page}`} key={item.label} onClick={handleNavLinkClick}>
                                                <button
                                                    className={`text-sm uppercase tracking-wider flex items-center space-x-1 transition-colors ${
                                                        hasScrolled || isHovered || isSearchOpen
                                                        ? 'text-gray-900 hover:text-[#CC0000]' 
                                                        : 'text-white hover:text-gray-300'
                                                    }`}
                                                >
                                                    <span>{item.label}</span>
                                                </button>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className={`flex items-center space-x-4 relative ${isSearchOpen ? 'w-full md:w-[35rem]' : 'justify-end'}`}>
                                <SearchBar 
                                    isSearchOpen={isSearchOpen} 
                                    setIsSearchOpen={setIsSearchOpen} 
                                    hasScrolled={hasScrolled} 
                                    isHovered={isHovered} 
                                />

                                {!isSearchOpen && (
                                    <>
                                        <Link 
                                            href="explore" 
                                            onClick={handleNavLinkClick}
                                            className={`hidden lg:block text-sm tracking-wider uppercase transition-colors ${
                                                hasScrolled || isHovered || isSearchOpen
                                                ? 'text-gray-500 hover:text-[#CC0000]' 
                                                : 'text-white hover:text-gray-300'
                                            }`}
                                        >
                                            Explore
                                        </Link>

                                        <button className="hidden lg:block">
                                            <BookmarkIcon 
                                                size={24} 
                                                className={`transition-colors ${
                                                    hasScrolled || isHovered || isSearchOpen
                                                    ? 'text-gray-500 hover:text-[#CC0000]' 
                                                    : 'text-white hover:text-gray-300'
                                                }`} 
                                            />
                                        </button>
                                    </>
                                )}
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
                            className={`fixed z-50 inset-0 bg-white shadow-lg border-r-[8px] border-[#CC0000] w-[18rem] h-[34rem]`}
                            style={{ top: '80px' }}
                        >
                            <div className="flex flex-col h-full overflow-y-auto relative px-6">
                                <div className="py-6 space-y-6 border-b-2 border-gray-200">
                                    {mobileNavSections.map((item) => (
                                        <Link href={`/${item.page}`} key={item.label} onClick={handleNavLinkClick}>
                                            <div className={``}>
                                                <button className={`flex items-center justify-between w-full py-3 text-left text-gray-800 hover:text-[#CC0000] transition-all`}>
                                                    <span className="text-xs sm:text-sm uppercase tracking-wider">{item.label}</span>
                                                </button>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="absolute w-full bottom-4 space-y-4 px-4">
                                <div className="">
                                    {mobileBottomSections.map((item) => (
                                        <Link href={`/${item.page}`} key={item.label} onClick={handleNavLinkClick}>
                                            <div className={``}>
                                                <button className={`flex items-center justify-between w-full py-3 text-left text-gray-800`}>
                                                    <span className="text-xs sm:text-sm uppercase font-semibold hover:underline decoration-[#CC0000]">{item.label}</span>
                                                </button>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                                <div className='relative right-0 left-0 m-auto w-max'>
                                    <Link href="/">
                                    <img src='/blackLogo1.png' className='h-14'/>
                                    </Link>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className='absolute bg-[#CC0000] top-0 -right-12 p-3 text-[#CC0000]'
                            >
                                <X size={20} className='text-white'/>
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Backdrop */}
            <AnimatePresence>
                    {isSearchOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/20 z-30"
                            onClick={() => setIsSearchOpen(false)}
                        />
                    )}
                </AnimatePresence>
        </>
    );
};

export default Navbar;