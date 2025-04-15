"use client"

import { Instagram, Linkedin, Twitter, SendIcon, MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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
                className="relative bg-gradient-to-t from-black via-black/60 to-transparent pt-16 px-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="text-center max-w-2xl mx-auto">
                    <motion.h1 
                        className="text-xl lg:text-4xl drop-shadow-2xl font-bold text-[#4F1C51] font-poppins"
                        {...fadeInUp}
                    >
                        {`Let's Shape the Future Together`}
                    </motion.h1>
                    <motion.p 
                        className="text-lg leading-tight drop-shadow-2xl md:text-xl tracking-wide text-black font-afacad mt-3 md:mt-6"
                        {...fadeInUp}
                    >
                        {`Get in touch today to start your journey toward innovation, efficiency and growth`}
                    </motion.p>
                    <motion.div 
                        className="grid grid-cols-1 gap-6 mt-12"
                        variants={staggerChildren}
                    >
                        <motion.button 
                            className="group text-lg md:text-2xl font-afacad text-white bg-[#D77914] px-8 py-4 font-semibold shadow-xl rounded-full flex items-center justify-center gap-2 hover:bg-[#D77914]/80 transition-colors"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Schedule a Call
                        </motion.button>
                        <motion.button 
                            className="group text-lg md:text-2xl font-afacad border-2 border-white text-white px-8 py-4 font-semibold rounded-full flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Request a Proposal
                        </motion.button>
                    </motion.div>
                </div>
            </motion.div>

            <div className="bg-black text-white py-16 px-6 sm:28 md:36 lg:px-48">
                    {/* Brand Section with animated logo */}
                    <div className="lg:col-span-1 flex flex-col gap-4 mb-10">
                        <div className="relative overflow-hidden group">
                            <Image src="/whiteLogo1.png" width={100} height={100} className="h-14 w-max relative z-10 group-hover:opacity-90 transition-all duration-300" alt="Growth Grid Logo" />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#CC00] to-yellow-500 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
                        </div>
                    </div>

                <div className="w-full flex flex-col md:flex-row justify-between items-start gap-6 md:gap-0">
                    
                    {/* Services with hover effects */}
                    <div>
                        <h3 className="text-[#D77914] font-poppins font-bold mb-4 flex items-center gap-2">
                            SERVICES
                        </h3>
                        <ul className="space-y-2 font-afacad text-gray-300 text-sm md:text-md tracking-wide">
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
                                "Predictive Analytics",
                                "Custom Tech Solutions",
                                "Cybersecurity Services"
                            ].map((service, index) => (
                                <li key={index} className="hover:text-[#D77914] transition-colors cursor-pointer relative group">
                                    <a href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center">
                                        {service}
                                        <span className="absolute left-0 bottom-0 w-0 h-px bg-[#D77914] group-hover:w-full transition-all duration-300"></span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Industries with similar hover effects */}
                    <div>
                        <h3 className="text-[#D77914] font-poppins font-bold mb-4 flex items-center gap-2">
                            INDUSTRIES
                        </h3>
                        <ul className="space-y-2 font-afacad text-gray-300 text-sm md:text-md tracking-wide">
                            {[
                                "Technology",
                                "E-Commerce",
                                "Healthcare",
                                "Financial Services",
                                "Manufacturing",
                                "Education",
                                "All Industries"
                            ].map((industry, index) => (
                                <li key={index} className="hover:text-[#D77914] transition-colors cursor-pointer relative group">
                                    <a href={`/industries/${industry.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center">
                                        {industry}
                                        <span className="absolute left-0 bottom-0 w-0 h-px bg-[#D77914] group-hover:w-full transition-all duration-300"></span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-[#D77914] font-poppins font-bold mb-4 flex items-center gap-2">
                            COMPANY
                        </h3>
                        <ul className="space-y-2 font-afacad text-gray-300 text-sm md:text-md tracking-wide w-max">
                            {[
                                "About Us",
                                "Why Us",
                                "Careers",
                            ].map((company, index) => (
                                <li key={index} className="hover:text-[#D77914] transition-colors cursor-pointer relative group">
                                    <a href={`/company/${company.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center">
                                        {company}
                                        <span className="absolute left-0 bottom-0 w-0 h-px bg-[#D77914] group-hover:w-full transition-all duration-300"></span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Top Reads with animation */}
                    <div>
                        <h3 className="text-[#D77914] font-poppins font-bold mb-4 flex items-center gap-2">
                            TOP READS
                        </h3>
                        <ul className="space-y-2 text-gray-300 font-afacad text-sm md:text-sm tracking-wide w-max">
                            {[
                                "AI For SME Digital Transformation",
                                "AI In Product Development",
                                "AI In E-Com Customer Experience",
                                "AI-Driven Supply Chain Optimization",
                                "Automating Business Workflows",
                                "AI In Content Marketing & Engagement"
                            ].map((article, index) => (
                                <li key={index} className="hover:text-[#D77914] transition-colors cursor-pointer relative group">
                                    <a href={`/blog/${article.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center">
                                        {article}
                                        <span className="absolute left-0 bottom-0 w-0 h-px bg-[#D77914] group-hover:w-full transition-all duration-300"></span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                            <Link href="/blog">
                                <p className="uppercase text-sm text-gray-400 font-bold relative top-2 font-afacad">read all blog posts</p>
                            </Link>
                    </div>
                    
                    {/* Contact Section with glassmorphism effect */}
                    <div className="relative">
                        <div className="absolute inset-0 backdrop-blur-sm rounded-lg -z-10"></div>
                        <div className="">
                            <h3 className="text-[#D77914] font-bold mb-4 flex items-center gap-2 font-poppins">
                                CONTACT US
                            </h3>
                            <a href="mailto:Ceo@Growthgrid.in" className="text-gray-300 font-afacad text-sm tracking-wide hover:text-[#D77914] transition-colors flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                {`info@Growthgrid.in`}
                            </a>
                            
                            <h3 className="text-[#D77914] font-poppins tracking-wide font-bold mt-4 flex items-center gap-2">
                                CALL
                            </h3>
                            {["+91 9990 006 274"].map((phone, index) => (
                                <a key={index} href={`tel:${phone.replace(/\s+/g, '')}`} className="text-gray-300 font-afacad flex text-sm hover:text-[#D77914] transition-colors items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    {phone}
                                </a>
                            ))}
                            
                            <h3 className="text-[#D77914] font-poppins font-bold mt-4 flex items-center gap-2">
                                OFFICE
                            </h3>
                            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 font-afacad text-sm tracking-wide hover:text-[#D77914] transition-colors flex items-center gap-2">
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
                                        className="bg-gray-800 p-3 hover:from-[#D77914] transition-all duration-300 relative group"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Icon className="w-5 h-5 text-white relative z-10" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Newsletter Section with animated button */}
                <div className="mt-12 max-w-lg">
                        <p className="text-gray-500 text-sm md:text-md py-[15px] font-afacad">
                            {`"Stay Updates on the latest in AI and Business Growth"`}
                        </p>
                    <div className="relative font-afacad overflow-hidden bg-gray-800">
                        <div className="relative flex">
                            <input 
                                type="email" 
                                placeholder="Your Email Address" 
                                className="w-full bg-gray-800 text-white placeholder:text-gray-400 py-3 px-5 focus:outline-none"
                            />
                            <button className="m-2 bg-gradient-to-r from-[#D77914] to-[#D77914] hover:from-[#D77914] hover:to-[#D77914] hover:opacity-70 transition-all duration-300 flex items-center gap-2 relative p-3 overflow-hidden group">
                                <SendIcon/>
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Copyright section with animated line */}
                {/* <div className="mt-12 text-center text-gray-500 text-sm">
                    <div className="w-full max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent mb-6"></div>
                    <p>© {new Date().getFullYear()} Growth Grid. All rights reserved.</p>
                    <div className="flex justify-center gap-6 mt-4">
                        <a href="/#/privacy-policy" className="hover:text-[#D77914] transition-colors">Privacy Policy</a>
                        <a href="/#/terms" className="hover:text-[#D77914] transition-colors">Terms of Service</a>
                        <a href="/#/sitemap" className="hover:text-[#D77914] transition-colors">Sitemap</a>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Footer;