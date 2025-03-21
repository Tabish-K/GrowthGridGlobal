"use client"

import { Instagram, Linkedin, Twitter, ArrowRight, Send, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

function Footer() {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 }
    };

    const staggerChildren = {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { staggerChildren: 0.1 }
    };

    const socialIcons = [
        { Icon: Twitter, href: "https://x.com/growth__grid" },
        { Icon: Instagram, href: "https://www.instagram.com/growthgrid_global?igsh=MWNtODZrY25wd2N1bQ%3D%3D&utm_source=qr" },
        { Icon: Linkedin, href: "https://www.linkedin.com/company/growthgrid-global/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B2MQEUtmaRCG7jvTcCVYdww%3D%3D" },
        // { Icon: Youtube, href: "#" }
    ];

    const footerLinks = [
        { label: "Services", href: "explore" },
        { label: "Blog", href: "#" },
        { label: "Case Studies", href: "#" },
        { label: "Contact Us", href: "contact" },
        { label: "About Us", href: "about" }
    ];

    return (
        <div className="relative">
            {/* Call to Action Section */}
            <motion.div 
                className="relative bg-gradient-to-r from-[#CC0000] to-red-700 py-16 px-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="text-center max-w-4xl mx-auto">
                    <motion.h1 
                        className="text-3xl lg:text-4xl font-bold text-white"
                        {...fadeInUp}
                    >
                        {`Let's Shape the Future Together`}
                    </motion.h1>
                    <motion.p 
                        className="text-lg text-red-100 mt-6 leading-relaxed"
                        {...fadeInUp}
                    >
                        {`Get in touch today to start your journey toward innovation, efficiency, and growth.`}
                    </motion.p>
                    <motion.div 
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12"
                        variants={staggerChildren}
                    >
                        <motion.button 
                            className="group bg-white text-[#CC0000] px-8 py-4 font-semibold flex items-center justify-center gap-2 hover:bg-red-50 transition-colors"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Schedule a Call
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                        <motion.button 
                            className="group border-2 border-white text-white px-8 py-4 font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Request a Proposal
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </motion.div>
                </div>
            </motion.div>

            <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-16 px-6 lg:px-20 border-t border-red-500/30">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Brand Section with animated logo */}
                    <div className="lg:col-span-1 flex flex-col gap-4">
                        <div className="relative overflow-hidden group">
                            <img src="whiteLogo1.png" className="h-12 w-max relative z-10 group-hover:opacity-90 transition-all duration-300" alt="Growth Grid Logo" />
                            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-yellow-500 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
                        </div>
                        <p className="text-gray-400 text-sm">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500 font-medium">Powering tomorrow's</span> business growth with AI
                        </p>
                    </div>
                    
                    {/* Services with hover effects */}
                    <div>
                        <h3 className="text-red-500 font-bold mb-4 flex items-center gap-2">
                            <span className="inline-block w-2 h-2 bg-red-500 animate-pulse"></span>
                            SERVICES
                        </h3>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            {[
                                "Website And App Development",
                                "E-Commerce Optimization",
                                "Data And Cloud Solutions",
                                "Social Media Management",
                                "Paid Advertising",
                                "Content Creation",
                                "Market Research",
                                "Engagement With AI",
                                "Workflow Automation",
                                "Predictive Analytics"
                            ].map((service, index) => (
                                <li key={index} className="hover:text-red-400 transition-colors cursor-pointer relative group">
                                    <a href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center">
                                        {service}
                                        <span className="absolute left-0 bottom-0 w-0 h-px bg-gradient-to-r from-red-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Industries with similar hover effects */}
                    <div>
                        <h3 className="text-red-500 font-bold mb-4 flex items-center gap-2">
                            <span className="inline-block w-2 h-2 bg-red-500 animate-pulse"></span>
                            INDUSTRIES
                        </h3>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            {[
                                "Technology",
                                "E-Commerce",
                                "Healthcare",
                                "Financial Services",
                                "Manufacturing",
                                "Education",
                                "All Industries"
                            ].map((industry, index) => (
                                <li key={index} className="hover:text-red-400 transition-colors cursor-pointer relative group">
                                    <a href={`/industries/${industry.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center">
                                        {industry}
                                        <span className="absolute left-0 bottom-0 w-0 h-px bg-gradient-to-r from-red-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Top Reads with animation */}
                    <div>
                        <h3 className="text-red-500 font-bold mb-4 flex items-center gap-2">
                            <span className="inline-block w-2 h-2 bg-red-500 animate-pulse"></span>
                            TOP READS
                        </h3>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            {[
                                "AI For SME Digital Transformation",
                                "AI In Product Development",
                                "AI In E-Com Customer Experience",
                                "AI-Driven Supply Chain Optimization",
                                "Automating Business Workflows",
                                "AI In Content Marketing & Engagement"
                            ].map((article, index) => (
                                <li key={index} className="hover:text-red-400 transition-colors cursor-pointer relative group">
                                    <a href={`/blog/${article.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center">
                                        {article}
                                        <span className="absolute left-0 bottom-0 w-0 h-px bg-gradient-to-r from-red-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Contact Section with glassmorphism effect */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-red-500/5 backdrop-blur-sm rounded-lg -z-10"></div>
                        <div className="p-4">
                            <h3 className="text-red-500 font-bold mb-4 flex items-center gap-2">
                                <span className="inline-block w-2 h-2 bg-red-500 animate-pulse"></span>
                                CONTACT US
                            </h3>
                            <a href="mailto:Ceo@Growthgrid.in" className="text-gray-300 text-sm hover:text-red-400 transition-colors flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                {`Ceo@Growthgrid.in`}
                            </a>
                            
                            <h3 className="text-red-500 font-bold mt-4 flex items-center gap-2">
                                <span className="inline-block w-2 h-2 bg-red-500 animate-pulse"></span>
                                CALL
                            </h3>
                            {["+91 1234 123 123", "+91 1234 123 123", "+91 1234 123 123"].map((phone, index) => (
                                <a key={index} href={`tel:${phone.replace(/\s+/g, '')}`} className="text-gray-300 text-sm block hover:text-red-400 transition-colors flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    {phone}
                                </a>
                            ))}
                            
                            <h3 className="text-red-500 font-bold mt-4 flex items-center gap-2">
                                <span className="inline-block w-2 h-2 bg-red-500 animate-pulse"></span>
                                OFFICE
                            </h3>
                            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 text-sm hover:text-red-400 transition-colors flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {`Greater Kailash 2, New Delhi 110048`}
                            </a>
                            
                            {/* Social icons with hover effects */}
                            <div className="flex gap-4 mt-4">
                                {socialIcons.map(({ Icon, href }, index) => (
                                    <a
                                        key={index}
                                        href={href}
                                        className="bg-gradient-to-br from-gray-800 to-black p-3 hover:from-red-600 hover:to-red-800 transition-all duration-300 rounded-lg relative group"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Icon className="w-5 h-5 text-white relative z-10" />
                                        <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-yellow-500 rounded-lg opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300"></div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Newsletter Section with animated button */}
                <div className="mt-12 max-w-lg mx-auto">
                    <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-gray-900 to-black p-0.5">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-yellow-500 blur animate-pulse opacity-20"></div>
                        <div className="relative flex">
                            <input 
                                type="email" 
                                placeholder="Your Email Address" 
                                className="w-full bg-black/50 text-white placeholder:text-gray-400 py-4 px-6 focus:outline-none rounded-l-lg"
                            />
                            <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 transition-all duration-300 px-6 rounded-r-lg flex items-center gap-2 relative overflow-hidden group">
                                <span className="relative z-10">Subscribe</span>
                                <Send className="w-5 h-5 text-white relative z-10 group-hover:translate-x-1 transition-transform" />
                                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-yellow-500 opacity-0 group-hover:opacity-30 transition-opacity"></div>
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Copyright section with animated line */}
                <div className="mt-12 text-center text-gray-500 text-sm">
                    <div className="w-full max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent mb-6"></div>
                    <p>© {new Date().getFullYear()} Growth Grid. All rights reserved.</p>
                    <div className="flex justify-center gap-6 mt-4">
                        <a href="/privacy-policy" className="hover:text-red-400 transition-colors">Privacy Policy</a>
                        <a href="/terms" className="hover:text-red-400 transition-colors">Terms of Service</a>
                        <a href="/sitemap" className="hover:text-red-400 transition-colors">Sitemap</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;