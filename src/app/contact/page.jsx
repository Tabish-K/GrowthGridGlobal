"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Building, Globe, Clock } from 'lucide-react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const features = [
        {
            icon: Building,
            title: "Technology Solutions",
            description: "AI-powered strategies for business growth"
        },
        {
            icon: Globe,
            title: "Global Reach",
            description: "Serving clients across multiple industries"
        },
        {
            icon: Clock,
            title: "24/7 Support",
            description: "Round-the-clock technical assistance"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <motion.section 
                className="bg-[#CC0000] text-white py-28 relative overflow-hidden"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
            >
                {/* Abstract Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute transform rotate-45 -right-1/4 -top-1/4 w-1/2 h-1/2 bg-white/20" />
                    <div className="absolute transform -rotate-45 -left-1/4 -bottom-1/4 w-1/2 h-1/2 bg-white/20" />
                </div>
                
                <div className="container mx-auto px-6 sm:px-12 relative z-10">
                    <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "15%" }}
                        transition={{ duration: 1 }}
                        className="h-1 bg-white mb-8"
                    />
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Let's Build Something<br />Extraordinary Together</h1>
                    <p className="text-xl md:text-2xl max-w-2xl opacity-90">
                        Transform your business with Growth Grid's innovative AI and automation solutions
                    </p>
                </div>
            </motion.section>

            {/* Features Section */}
            <div className="container mx-auto px-6 sm:px-8 -mt-16 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <feature.icon className="w-8 h-8 text-[#CC0000] mb-4" />
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-6 sm:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column - Contact Information */}
                    <motion.div 
                        className="space-y-8"
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                    >
                        <div>
                            <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: "15%" }}
                                transition={{ duration: 1 }}
                                className="h-1 bg-[#CC0000] mb-8"
                            />
                            <h2 className="text-3xl font-bold mb-6 text-gray-800">Ready to Transform Your Business?</h2>
                            <p className="text-gray-600 mb-8 md:text-xl leading-relaxed">
                                Join the growing number of businesses leveraging Growth Grid's expertise in AI, automation, 
                                and data-driven solutions to achieve extraordinary results.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <motion.div 
                                className="flex items-start space-x-4 p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                                whileHover={{ scale: 1.02 }}
                            >
                                <MapPin className="w-6 h-6 text-[#CC0000] mt-1" />
                                <div>
                                    <h3 className="font-semibold text-gray-800">Visit Us</h3>
                                    <p className="text-gray-600">Gk2, New Delhi, India. 110048</p>
                                </div>
                            </motion.div>

                            <motion.div 
                                className="flex items-start space-x-4 p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                                whileHover={{ scale: 1.02 }}
                            >
                                <Phone className="w-6 h-6 text-[#CC0000] mt-1" />
                                <div>
                                    <h3 className="font-semibold text-gray-800">Call Us</h3>
                                    <p className="text-gray-600">+91 9990006274
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div 
                                className="flex items-start space-x-4 p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                                whileHover={{ scale: 1.02 }}
                            >
                                <Mail className="w-6 h-6 text-[#CC0000] mt-1" />
                                <div>
                                    <h3 className="font-semibold text-gray-800">Email Us</h3>
                                    <p className="text-gray-600">CEO@growthgrid.in</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Column - Contact Form */}
                    <motion.div 
                        className="bg-white p-6 sm:p-8 shadow-lg"
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                    >
                        <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                                        First Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-[#CC0000] focus:border-[#CC0000] transition-all duration-200"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                                        Last Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-[#CC0000] focus:border-[#CC0000] transition-all duration-200"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Other form fields remain the same but with enhanced styling */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-[#CC0000] focus:border-[#CC0000] transition-all duration-200"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                                    Company
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-[#CC0000] focus:border-[#CC0000] transition-all duration-200"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-[#CC0000] focus:border-[#CC0000] transition-all duration-200"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-[#CC0000] focus:border-[#CC0000] transition-all duration-200"
                                    required
                                />
                            </div>

                            <motion.button
                                type="submit"
                                className="w-full bg-[#CC0000] text-white py-3 px-6 hover:bg-[#CC0000]/90 transition-all duration-200 flex items-center justify-center space-x-2"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span>Send Message</span>
                                <Send className="w-4 h-4" />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;