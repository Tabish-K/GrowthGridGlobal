"use client"

import { Facebook, Instagram, Linkedin, Twitter, Youtube, ArrowRight, Send, ChevronRight } from "lucide-react";
import Link from "next/link";
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
            {/* Diagonal Background Divider */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-black to-gray-900 transform -skew-y-2" />

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
                        Let's Shape the Future Together
                    </motion.h1>
                    <motion.p 
                        className="text-lg text-red-100 mt-6 leading-relaxed"
                        {...fadeInUp}
                    >
                        Get in touch today to start your journey toward innovation, efficiency, and growth.
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

            {/* Footer Section */}
            <div className="bg-gradient-to-b from-black to-gray-900 text-white py-16 px-4 lg:px-12">
                <div className="container mx-auto">
                    {/* Top Section */}
                    <motion.div 
                        className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-24 mb-16"
                        variants={staggerChildren}
                    >
                        {/* Brand Section */}
                        <motion.div 
                            className="lg:w-1/3"
                            {...fadeInUp}
                        >
                            <p className="text-lg text-gray-300">
                                "Stay Updated on the Latest in AI and Business Growth"
                            </p>
                            <Link 
                                href="/" 
                                className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent hover:to-red-500 transition-all duration-300 mt-6 inline-block"
                            >
                                <img src='whiteLogo1.png' className='h-12'></img>
                            </Link>
                        </motion.div>

                        {/* Newsletter Section */}
                        <motion.div 
                            className="lg:w-1/2 space-y-8"
                            {...fadeInUp}
                        >
                            <div className="relative">
                                <input 
                                    type="email" 
                                    placeholder="Your Email Address" 
                                    className="w-full bg-white/10 text-white placeholder:text-gray-400 py-4 px-6 pr-12 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                                />
                                <motion.button 
                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#CC0000] p-2 hover:bg-red-700 transition-colors"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Send className="w-5 h-5" />
                                </motion.button>
                            </div>
                            <motion.div 
                                className="flex justify-start gap-6"
                                variants={staggerChildren}
                            >
                                {socialIcons.map(({ Icon, href }, index) => (
                                    <motion.a
                                        key={index}
                                        href={href}
                                        className="bg-white/10 p-3 hover:bg-[#CC0000] transition-colors"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                        target="_blank"
                                    >
                                        <Icon className="w-5 h-5" />
                                    </motion.a>
                                ))}
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Navigation Links */}
                    <motion.div 
                        className="flex flex-wrap gap-8 text-sm border-t border-white/10 pt-8"
                        variants={staggerChildren}
                    >
                        {footerLinks.map((link, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="relative group"
                            >
                                <Link 
                                    href={link.href} 
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    {link.label}
                                </Link>
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#CC0000] group-hover:w-full transition-all duration-300" />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Footer;