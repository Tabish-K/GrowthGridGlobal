"use client";

import { motion } from "framer-motion";
import {
    Calendar,
    Clock,
    ArrowRight,
    User,
    Search,
    ChevronDown,
    BookOpen,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { blogPosts } from "./blogs";

const BlogListing = () => {
    const featuredPost = blogPosts[1]; // Assuming the second post is the featured one
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Get unique categories
    const categories = [
        "All",
        ...Array.from(new Set(blogPosts.map((post) => post.metadata.category))),
    ];

    // Filter posts based on search and category
    const filteredPosts = blogPosts.filter((post) => {
        const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.structuredContent.sections[0].content
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        const matchesCategory =
        selectedCategory === "All" || post.metadata.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

  return (
    <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div
            id="hero"
            className="min-h-[38rem] w-full md:h-[32rem] bg-cover bg-center flex justify-start items-center relative overflow-hidden"
            style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1638864615951-360884c3a277?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            }}
        >
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"
            />

            <div className="container mx-auto px-8 sm:px-12 relative z-10">
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: "15%" }}
                transition={{ duration: 1 }}
                className="h-1 bg-white mb-8"
            />
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl text-white md:text-6xl font-bold mb-6 font-poppins leading-tight"
            >
                Insights & <span className="text-[#D77914]">Perspectives</span>
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-white md:text-2xl max-w-2xl font-afacad"
            >
                Stay updated with the latest trends in technology, business, and
                innovation
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-8 flex flex-col sm:flex-row gap-4 items-center"
            >
                <div className="relative w-full sm:w-auto">
                <Search
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={18}
                />
                <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-3 rounded-full w-full font-afacad sm:w-80 focus:outline-none focus:ring-2 focus:ring-[#D77914] transition-all duration-300"
                />
                </div>

                <div className="relative w-full sm:w-auto">
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="appearance-none pl-4 pr-10 py-3 font-afacad rounded-full w-full sm:w-48 focus:outline-none focus:ring-2 focus:ring-[#D77914] transition-all duration-300"
                >
                    {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                    ))}
                </select>
                <ChevronDown
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
                    size={18}
                />
                </div>
            </motion.div>
            </div>
        </div>

        {/* Featured Post */}
        <div className="container mx-auto px-6 md:px-8 -mt-20 relative z-20">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white shadow-xl rounded-3xl overflow-hidden"
            >
            <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto p-3">
                <div className="absolute font-poppins top-6 left-6 z-10 bg-[#D77914] text-white px-4 py-1 rounded-full font-medium">
                    FEATURED
                </div>
                <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-full rounded-3xl border border-[#D77914] object-cover transition-transform duration-700 hover:scale-105"
                />
                </div>
                <div className="p-6 sm:p-8 md:p-12">
                <div className="flex items-center gap-2 mb-4">
                    <span className="bg-[#D77914]/10 font-afacad text-[#D77914] px-3 py-1 rounded-full text-sm font-semibold">
                    {featuredPost.metadata.category}
                    </span>
                    <span className="bg-gray-100 text-gray-600 font-afacad px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <BookOpen size={14} /> {featuredPost.metadata.readTime}
                    </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-4 font-poppins leading-tight">
                    {featuredPost.title}
                </h2>
                <p className="text-gray-600 font-afacad text-lg md:text-xl mb-6">
                    {featuredPost.structuredContent.sections[0].content.substring(
                    0,
                    150
                    )}
                    ...
                </p>
                <div className="font-afacad flex items-center gap-4 text-md md:text-lg text-gray-500 mb-8">
                    <div className="flex items-center gap-2">
                    <User size={16} className="text-[#D77914]" />
                    <span>{featuredPost.metadata.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-[#D77914]" />
                    <span>{featuredPost.metadata.datePublished}</span>
                    </div>
                </div>
                <Link
                    href={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center text-[#D77914] font-poppins font-semibold hover:gap-4 gap-2 transition-all duration-300 group"
                >
                    Read More{" "}
                    <ArrowRight
                    size={18}
                    className="group-hover:translate-x-2 transition-transform duration-300"
                    />
                </Link>
                </div>
            </div>
            </motion.div>
        </div>

        {/* Blog Posts Grid */}
        <div className="container mx-auto px-8 py-20">
            <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-12 font-poppins text-center"
            >
            Latest <span className="text-[#D77914]">Articles</span>
            </motion.h2>

            {filteredPosts.length === 0 ? (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
            >
                <h3 className="text-2xl font-semibold mb-4 font-poppins">
                No articles found
                </h3>
                <p className="text-gray-600 font-afacad">
                Try adjusting your search or filter criteria
                </p>
            </motion.div>
            ) : (
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {filteredPosts.map((post, index) => (
                <motion.article
                    key={post.id}
                    variants={itemVariants}
                    className="bg-white rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group"
                >
                    <Link href={`/blog/${post.id}`} className="block">
                    <div className="relative h-56 overflow-hidden">
                        <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                        <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex justify-between items-center">
                            <span className="rounded-full bg-[#D77914] font-afacad text-white px-3 py-1 text-sm">
                            {post.metadata.category}
                            </span>
                            <span className="rounded-full bg-white/20 font-afacad text-white px-3 py-1 text-sm flex items-center gap-1">
                            <Clock size={14} /> {post.metadata.readTime}
                            </span>
                        </div>
                        </div>
                    </div>

                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 font-poppins group-hover:text-[#D77914] transition-colors duration-300">
                        {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4 font-afacad line-clamp-3">
                        {post.structuredContent.sections[0].content.substring(
                            0,
                            120
                        )}
                        ...
                        </p>

                        <div className="flex justify-between items-center font-afacad mt-6">
                        <div className="flex items-center gap-2 text-gray-500">
                            <Calendar size={16} className="text-[#D77914]" />
                            <span className="text-sm">
                            {post.metadata.datePublished}
                            </span>
                        </div>

                        <div className="flex items-center text-[#D77914] font-poppins font-semibold group-hover:gap-3 gap-1 transition-all duration-300">
                            Read{" "}
                            <ArrowRight
                            size={18}
                            className="group-hover:translate-x-1 transition-transform duration-300"
                            />
                        </div>
                        </div>
                    </div>
                    </Link>
                </motion.article>
                ))}
            </motion.div>
            )}

            {/* Pagination */}
            <div className="flex justify-center mt-16">
            <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((page) => (
                <button
                    key={page}
                    className={`w-10 h-10 font-afacad rounded-full flex items-center justify-center transition-colors duration-300 ${
                    page === 1
                        ? "bg-[#D77914] text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                >
                    {page}
                </button>
                ))}
            </div>
            </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-50 py-16">
            <div className="container mx-auto px-6 sm:px-8">
            <div className="text-center mb-12">
                <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-4 font-poppins"
                >
                Frequently Asked <span className="text-[#D77914]">Questions</span>
                </motion.h2>
                <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-600 max-w-2xl mx-auto font-afacad"
                >
                Find answers to common questions about our blog and services
                </motion.p>
            </div>

            <div className="max-w-3xl mx-auto">
                {[
                {
                    question: "How can I contribute an article to your blog?",
                    answer:
                    "We welcome guest contributions! Please send us a message through the contact form with your article idea and a brief outline. Our editorial team will review it and get back to you within 48 hours.",
                },
                {
                    question: "Do you offer advertising opportunities?",
                    answer:
                    "Yes, we offer various advertising options including sponsored posts, banner ads, and newsletter features. Contact us for a media kit and pricing information.",
                },
                {
                    question: "How often do you publish new content?",
                    answer:
                    "We publish new articles 3-4 times per week, typically on Monday, Wednesday, and Friday. Subscribe to our newsletter to get notified when new content is available.",
                },
                {
                    question: "Can I republish your articles on my website?",
                    answer:
                    "Our content is protected by copyright. However, we do offer licensing options for select articles. Please contact us with specific requests.",
                },
                ].map((faq, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="mb-6"
                >
                    <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold mb-3 font-poppins">
                        {faq.question}
                    </h3>
                    <p className="text-gray-600 font-afacad">{faq.answer}</p>
                    </div>
                </motion.div>
                ))}
            </div>
            </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-[#D77914] to-[#4F1C51] py-16 rounded-3xl mx-4 md:mx-8">
            <div className="container mx-auto px-8">
            <div className="max-w-3xl mx-auto text-center">
                <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold mb-4 text-white font-poppins"
                >
                Subscribe to Our Newsletter
                </motion.h2>
                <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white/90 mb-8 font-afacad text-lg"
                >
                Get the latest articles, resources and updates right in your inbox
                </motion.p>

                <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                >
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-grow px-4 font-afacad text-md md:text-lg py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-[#D77914] uppercase font-afacad px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
                    Subscribe
                </button>
                </motion.div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default BlogListing;
