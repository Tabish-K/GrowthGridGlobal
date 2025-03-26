"use client";

import { motion, useInView } from 'framer-motion';
import { MoveRight } from 'lucide-react';
import { useRef } from 'react';

export default function Impact() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <div id="impact" className="py-12">
            <section className="bg-[#CC0012] text-white py-16 md:py-20 w-full">
            <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left Side - Title & Description */}
                <div>
                <h2 className="text-4xl sm:text-6xl font-bold mb-6 tracking-wide bg-gradient-to-r from-white to-yellow-500 text-transparent bg-clip-text">
                    Case <span className="">Studies</span>
                </h2>
                <p className="text-sm text-justify tracking-wider md:text-lg max-w-lg mb-6">
                    {`Explore how we've helped businesses achieve scalable growth through AI automation,
                    data-driven strategies, and innovative digital solutions. From boosting lead
                    generation to optimizing workflows, our case studies showcase the measurable
                    success we deliver.`}
                </p>
                <p className="text-lg font-semibold tracking-wider">{`Real Results, Proven Impact!`}</p>
                </div>

                {/* Right Side - Case Studies List */}
                <div className="space-y-12">
                {[
                    { title: "Boosted Restaurant Sales", desc: "Targeted PPC campaign driving higher traffic and boosting restaurant sales." },
                    { title: "SEO Traffic Surge", desc: "SEO strategy elevating keyword rankings and increasing organic website traffic." },
                    { title: "Retail Growth Online", desc: "Social media campaign enhancing followers and driving online sales." },
                ].map((item, index) => (
                    <div key={index} className={index === 0 ? "pt-4" : "border-t border-white pt-4 tracking-wide"}>
                    <div className="flex justify-between items-center mt-4">
                        <h3 className="text-xl md:text-2xl font-semibold tracking-wide">{item.title}</h3>
                        <span className="text-xl">
                            <MoveRight/>
                        </span>
                    </div>
                    <p className="text-sm md:text-[16px] tracking-wider text-gray-200">{item.desc}</p>
                    </div>
                ))}
                </div>
            </div>

            {/* Button */}
            <div className="flex justify-center mt-20">
                <button className="flex text-md tracking-wide items-center gap-2 px-6 py-2 border-2 border-white rounded-full text-white font-semibold hover:bg-white hover:text-red-700 transition-all relative">
                <span>Explore all Case Studies</span>
                <span className="w-12 h-12 flex items-center justify-center bg-white text-[#CC0012] rounded-full">
                    <MoveRight/>
                </span>
                </button>
            </div>
            </section>

            <section className='relative'>
                {/* Bottom-right Red Blur */}
                <div className="absolute -bottom-6 right-6 w-[10rem] h-[10rem] bg-[#CC0012]/50 blur-2xl rounded-full"></div>

                {/* Businesses */}
                <div className="container z-20 relative bg-white mx-auto px-4 m-6 rounded-[3rem] py-8">
                    <motion.div 
                                initial={{ width: 0 }}
                                animate={isInView ? { width: "50%" } : { width: 0 }}
                                transition={{ duration: 1, ease: "easeInOut" }}
                                className="h-[2px] bg-[#CC0012] mx-auto mb-8"
                            />
                    <div className="max-w-5xl mx-auto space-y-6 mb-8 lg:mb-10">
                        <h1 className="text-3xl lg:text-5xl font-bold">
                            {`Revolutionizing Businesses with Tailored, AI-Powered Strategies.`}
                        </h1>
                        <p className="tracking-wide text-base lg:text-lg">
                            {`Our work speaks for itself. Dive into the details of how we've transformed industries, solved complex challenges, and driven measurable results for our clients.`}
                        </p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mt-16">
                        
                            <div className="flex flex-col md:flex-row gap-4 lg:gap-6">
                                <img 
                                    src="https://images.unsplash.com/photo-1552960394-c81add8de6b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvcmslMjBpbiUyMG9mZmljZXxlbnwwfDF8MHx8fDA%3D"
                                    alt={`Case study`}
                                    className="w-full md:w-1/2 h-48 md:h-auto object-cover rounded-3xl"
                                />
                                <div className="flex flex-col justify-between md:w-1/2">
                                    <h1 className="text-2xl lg:text-3xl font-semibold mb-6">
                                        {`Transforming Workflow Automation for a Global Tech Firm`}
                                    </h1>
                                    <div className="bg-gray-50 p-6 lg:p-8 border">
                                        <h2 className="text-[#CC0012] font-semibold mb-2 lg:mb-4">Overview</h2>
                                        <p className="tracking-wide text-sm lg:text-base">
                                            {`A global technology company with over 10,000 employees and operations in 15 countries faced significant inefficiencies in its internal workflows, leading to delayed project timelines, mounting operational costs, and employee burnout.`}
                                        </p>
                                        <button className="text-[#CC0012] font-semibold text-xs sm:text-sm mt-2 lg:mt-4 hover:underline">
                                            {`Know more`}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row gap-4 lg:gap-6">
                                <img 
                                    src="https://images.unsplash.com/photo-1521898284481-a5ec348cb555?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHdvcmtpbmclMjBvJTIwbGFwdG9wfGVufDB8fDB8fHww"
                                    alt={`Case study`}
                                    className="w-full md:w-1/2 h-48 md:h-auto object-cover rounded-3xl"
                                />
                                <div className="flex flex-col justify-between md:w-1/2">
                                    <h1 className="text-2xl lg:text-3xl font-semibold mb-6">
                                    {`Scaling E-Commerce Revenue for a Boutique Fashion Brand`}
                                    </h1>
                                    <div className="bg-gray-50 p-6 lg:p-8 border">
                                        <h2 className="text-[#CC0012] font-semibold mb-2 lg:mb-4">Overview</h2>
                                        <p className="tracking-wide text-sm lg:text-base">
                                        {`A fast-growing e-commerce fashion retailer with an international customer base but stagnant growth due to a poorly optimized platform, high cart abandonment rates, and ineffective customer retention strategies.`}
                                        </p>
                                        <button className="text-[#CC0012] font-semibold text-xs sm:text-sm mt-2 lg:mt-4 hover:underline">
                                            {`Know more`}
                                        </button>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </section>
        </div>
    );
}