// components/SearchBar.js
"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { X, Search, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SearchBar = ({ isSearchOpen, setIsSearchOpen, hasScrolled, isHovered }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const searchInputRef = useRef(null);

    // Mock search suggestions
    const searchSuggestions = [
        {
            title: "AI Consulting Services",
            description: "Transform your business with our AI solutions",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "#"
        },
        {
            title: "Digital Transformation",
            description: "Complete guide to digital transformation",
            image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "#"
        },
        {
            title: "Cloud Migration",
            description: "Seamless cloud migration strategies",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "#"
        },
        {
            title: "Recent Blog Post",
            description: "The Future of AI in Business",
            image: "https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "#"
        }
    ];

    useEffect(() => {
        if (isSearchOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isSearchOpen]);

    const handleSearchToggle = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    return (
        <>
            <motion.div 
                className="flex items-center relative w-full md:w-auto"
                animate={{ width: isSearchOpen ? '100%' : 'auto' }}
                transition={{ duration: 0.3 }}
            >
                {isSearchOpen && (
                    <motion.div
                        className="w-full flex items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="flex items-center w-full relative">
                            <Search 
                                size={24} 
                                className={`absolute left-4 ${
                                    hasScrolled || isHovered
                                    ? 'text-[#CC0000]' 
                                    : 'text-gray-500'
                                }`}
                            />
                            <motion.input
                                initial={{ opacity: 0, width: 0 }}
                                animate={{ opacity: 1, width: '100%' }}
                                exit={{ opacity: 0, width: 0 }}
                                transition={{ duration: 0.3 }}
                                ref={searchInputRef}
                                type="text"
                                placeholder="Search insight, services and more"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="text-sm md:text-md w-full p-4 pl-12 bg-gray-50 text-gray-500 outline-none"
                            />
                            <button 
                                onClick={() => setIsSearchOpen(false)}
                                className={`absolute right-4 transition-colors ${
                                    hasScrolled || isHovered
                                    ? 'text-gray-500 hover:text-[#CC0000]' 
                                    : 'text-gray-500 hover:text-[#CC0000]'
                                }`}
                            >
                                <X size={24} />
                            </button>
                        </div>
                    </motion.div>
                )}
                {!isSearchOpen && (
                    <button 
                        onClick={() => setIsSearchOpen(true)}
                        className={`p-2 transition-colors ${
                            hasScrolled || isHovered
                            ? 'text-gray-500 hover:text-[#CC0000]' 
                            : 'text-white hover:text-gray-300'
                        }`}
                    >
                        <Search size={24} />
                    </button>
                )}
            </motion.div>

            {/* Search Results Overlay */}
            <AnimatePresence>
                {isSearchOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full mt-3 right-0 md:right-0 w-full md:w-[70dvw] bg-white shadow-xl border-t border-gray-200"
                    >
                        {/* Recent Searches */}
                        <div className='container mx-auto px-4 py-6'>
                            <h1 className=' text-gray-700 text-sm'>Trending Searches</h1>
                            {/* search topics */}
                            
                        </div>
                        <div className="container mx-auto px-4 py-6">
                            {/* Quick Links */}
                            <div className="mb-14">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {searchSuggestions.map((suggestion, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="group"
                                        >
                                            <Link 
                                                href={suggestion.link} 
                                                className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                                            >
                                                <img 
                                                    src={suggestion.image} 
                                                    alt={suggestion.title}
                                                    className="w-20 h-16 object-cover"
                                                />
                                                <div>
                                                    <h4 className="font-medium text-gray-900 group-hover:text-[#CC0000] transition-colors">
                                                        {suggestion.title}
                                                    </h4>
                                                    <p className="text-sm text-gray-500 mt-1">
                                                        {suggestion.description}
                                                    </p>
                                                </div>
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Recent Searches */}
                            <div>
                                <div className="flex flex-wrap gap-2">
                                    {['AI Services', 'Cloud Solutions', 'Digital Strategy', 'Consulting'].map((term, index) => (
                                        <motion.button
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="px-4 py-2 rounded-full bg-gray-100 text-sm text-gray-700 hover:bg-gray-200 transition-colors flex items-center gap-2"
                                        >
                                            {term}
                                            <ArrowRight size={14} />
                                        </motion.button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default SearchBar;