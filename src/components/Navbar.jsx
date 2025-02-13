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

    const mainNavItems = [
        { label: 'Consulting Services', hasDropdown: true, page: 'explore' },
        { label: 'About us', hasDropdown: true, page: 'about' },
        { label: 'Careers', hasDropdown: true, page: 'careers' }
    ];

    const mobileNavSections = [
        { label: 'Industries', hasDropdown: true, page: '#' },
        { label: 'Financial Services', hasDropdown: true, page: 'explore' },
        { label: 'Retail', hasDropdown: true, page: '#' },
        { label: 'Our Story', hasDropdown: true, page: 'about' },
        { label: 'Careers', hasDropdown: true, page: 'careers' },
    ];
    
    const mobileBottomSections = [
        { label: 'Explore', hasDropdown: true, page: 'explore' },
        { label: 'Contact', hasDropdown: true, page: '#' },
    ];

    return (
        <div className="fixed w-full z-40">
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
                            className={`p-2 z-50 ${
                                hasScrolled ? 'text-gray-900' : 'text-white'
                            }`}
                        >
                            {isOpen ? <AlignLeft size={24}/> : <AlignJustify size={24} />}
                        </button>

                        {/* Logo */}
                        <Link href="/" className="relative right-10">
                            {
                                hasScrolled ?
                                <img src='blackLogo.png' className='h-48'></img>
                                :
                                <img src='whiteLogo.png' className='h-48'></img>
                            }
                        </Link>
                        
                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-8 ml-8">
                            {mainNavItems.map((item) => (
                                <Link href={`/${item.page}`} key={item.label}>
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
                        className={`fixed z-50 inset-0 bg-white shadow-lg border-r-[8px] border-[#CC0000] w-[18rem] h-[38rem] rounded-br-2xl`}
                        // style={{ top: '64px' }}
                    >
                        <div className='flex gap-4 relative px-4'>
                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className={`p-2 transition-colors z-10 top-4 absolute`}
                            >
                                <AlignLeft size={24}/>
                            </button>

                            {/* Logo */}
                            <Link href="/" className="absolute top-[-60px]">
                                <img src='blackLogo.png' className='h-48'></img>
                            </Link>
                        </div>
                        <div className="flex flex-col h-full overflow-y-auto top-20 relative px-4">
                            <div className="py-6 space-y-6 border-b-2 border-gray-200">
                                {mobileNavSections.map((item) => (
                                    <Link href={`/${item.page}`} key={item.label}>
                                        <div className={``}>
                                            <button className={`flex items-center justify-between w-full py-3 text-left text-gray-800`}>
                                                <span className="text-sm font-semibold">{item.label}</span>
                                                {item.hasDropdown && <ChevronRight size={20} className='text-[#CC0000]' />}
                                            </button>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="absolute w-full bottom-20 px-4">
                            <div className="">
                                {mobileBottomSections.map((item) => (
                                    <Link href={`/${item.page}`} key={item.label}>
                                        <div className={``}>
                                            <button className={`flex items-center justify-between w-full py-3 text-left text-gray-800`}>
                                                <span className="text-sm">{item.label}</span>
                                                {item.hasDropdown && <ChevronRight size={20} className='text-[#CC0000]' />}
                                            </button>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className='absolute bg-[#CC0000] top-0 -right-12 p-3 text-[#CC0000]'>
                            <X size={20} className='text-white'/>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;