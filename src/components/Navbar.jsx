"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronRight, Search, BookmarkIcon, Globe, Text, ChevronDown, AlignJustify, AlignLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // const topNavItems = [
    //     { label: 'OFFICES', hasDropdown: true },
    //     { label: 'ALUMNI', hasDropdown: false },
    //     { label: 'MEDIA CENTER', hasDropdown: false },
    //     { label: 'SUBSCRIBE', hasDropdown: false },
    //     { label: 'CONTACT', hasDropdown: false }
    // ];

    const mainNavItems = [
        { label: 'Services', hasDropdown: true },
        { label: 'About us', hasDropdown: true },
        { label: 'Careers', hasDropdown: true }
    ];

    return (
        <div className="fixed w-full z-50">
            {/* Top Navigation Bar */}
            {/* <div className={`transition-all duration-300 border-b ${
                hasScrolled ? 'bg-white' : 'bg-transparent'
            }`}>
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="hidden lg:flex items-center justify-between h-10">
                        <div className="flex space-x-6 text-xs">
                            {topNavItems.map((item) => (
                                <div key={item.label} className="flex items-center">
                                    <button className={`p-2 transition-colors ${
                                        hasScrolled ? 'text-gray-900' : 'text-white'
                                    }`}>
                                        {item.label}
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center space-x-6 text-xs">
                            <button className={`p-2 flex items-center gap-1 transition-colors ${
                                hasScrolled ? 'text-gray-900' : 'text-white'
                            }`}>
                                <Globe size={14} />
                                <span>GLOBAL | ENGLISH</span>
                            </button>
                            <button className={`p-2 flex items-center gap-1 transition-colors ${
                                hasScrolled ? 'text-gray-900' : 'text-white'
                            }`}>
                                <BookmarkIcon size={14} />
                                <span>SAVED ITEMS</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* Main Navigation */}
            <div className={`transition-all duration-300 border-b ${
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
                        <Link href="/" className="flex items-center">
                            <span className={`text-xl font-bold transition-colors ${
                                hasScrolled ? 'text-[#CC0000]' : 'text-white'
                            }`}>
                                GROWTH GRID
                            </span>
                        </Link>
                        
                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-8 ml-8">
                            {mainNavItems.map((item) => (
                                <button
                                    key={item.label}
                                    className={`text-sm font-semibold tracking-wider flex items-center space-x-1 transition-colors ${
                                        hasScrolled 
                                        ? 'text-gray-900 hover:text-[#CC0000]' 
                                        : 'text-white hover:text-gray-300'
                                    }`}
                                >
                                    <span>{item.label}</span>
                                    <ChevronDown size={20}/>
                                </button>
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
                                    <div key={item.label} className={`border-b ${
                                        hasScrolled ? 'border-gray-200' : 'border-gray-700'
                                    }`}>
                                        <button className={`flex items-center justify-between w-full py-3 text-left text-gray-800`}>
                                            <span className="text-lg font-medium">{item.label}</span>
                                            {item.hasDropdown && <ChevronRight size={20} />}
                                        </button>
                                    </div>
                                ))}
                            </div>
                            
                            {/* <div className={`mt-auto px-4 py-6 space-y-4 ${
                                hasScrolled ? 'bg-gray-50' : 'bg-gray-800'
                            }`}>
                                {topNavItems.map((item) => (
                                    <button 
                                        key={item.label}
                                        className={`block w-full text-left text-sm py-2 ${
                                            hasScrolled 
                                            ? 'text-gray-600 hover:text-gray-900' 
                                            : 'text-gray-300 hover:text-white'
                                        }`}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                                <button className={`flex items-center space-x-2 text-sm py-2 ${
                                    hasScrolled 
                                    ? 'text-gray-600 hover:text-gray-900' 
                                    : 'text-gray-300 hover:text-white'
                                }`}>
                                    <Globe size={16} />
                                    <span>GLOBAL | ENGLISH</span>
                                </button>
                                <button className={`flex items-center space-x-2 text-sm py-2 ${
                                    hasScrolled 
                                    ? 'text-gray-600 hover:text-gray-900' 
                                    : 'text-gray-300 hover:text-white'
                                }`}>
                                    <BookmarkIcon size={16} />
                                    <span>SAVED ITEMS</span>
                                </button>
                            </div> */}
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