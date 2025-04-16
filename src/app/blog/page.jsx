'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import Link from 'next/link';
import { blogPosts } from '../../lib/blogs';

const BlogListing = ({ params }) => {
    // const { id } = params;
    // const post = blogPosts.find(post => post.id === id);

    // if (!post) {
    //     return <div>Blog post not found</div>
    // }

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div 
                id="hero"
                className="min-h-[20rem] w-full md:h-[22rem] bg-cover bg-center flex justify-start items-center relative"
                style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1638864615951-360884c3a277?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
                }}
            >
                <div className="absolute inset-0 bg-black/20" />
                
                <div className="container mx-auto px-8 sm:px-12 relative z-10">
                    <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "15%" }}
                        transition={{ duration: 1 }}
                        className="h-1 bg-white mb-8"
                    />
                    <h1 className="text-3xl text-white md:text-5xl font-bold mb-6 font-poppins">Insights & Perspectives</h1>
                    <p className="text-xl text-white md:text-2xl max-w-2xl font-afacad">
                        Stay updated with the latest trends in technology, business, and innovation
                    </p>
                </div>
            </div>

            {/* Featured Post */}
            <div className="container mx-auto px-6 md:px-8 -mt-16 relative z-20">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white shadow-xl overflow-hidden"
                >
                    <div className="grid md:grid-cols-2 gap-0">
                        <div className="relative h-64 md:h-auto">
                            <img 
                                src="https://images.unsplash.com/photo-1484542603127-984f4f7d14cb?q=80&w=965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Featured post"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6 sm:p-8 md:p-12">
                            <span className="text-[#D77914] text-sm font-semibold font-poppins">FEATURED POST</span>
                            <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-4 font-poppins">
                                Digital Transformation: A Comprehensive Guide for Modern Businesses
                            </h2>
                            <p className="text-black font-afacad text-lg md:text-xl mb-6">
                                Explore the essential steps and strategies for successful digital transformation in today's rapidly evolving business landscape.
                            </p>
                            <div className="font-afacad grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4 text-md md:text-lg text-gray-500 mb-8">
                                <div className="flex items-center gap-2">
                                    <User size={16} />
                                    <span>Alex Thompson</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} />
                                    <span>Feb 12, 2024</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={16} />
                                    <span>10 min read</span>
                                </div>
                            </div>
                            <Link href="/blog" className="inline-flex items-center text-black font-poppins font-semibold hover:gap-4 gap-2 transition-all duration-300">
                                Read More <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Blog Posts Grid */}
            <div className="container mx-auto px-8 py-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <Link href={`/blog/${post.id}`}>
                                <div className="relative h-48">
                                    <img 
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover"
                                    />
                                    
                                {/* Black overlay */}
                                <div className="absolute inset-0 bg-black/40" />
                                    <span className="absolute top-4 left-4 bg-white/20 text-white px-3 py-1 text-sm">
                                        {post.metadata.category}
                                    </span>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-3 font-poppins">{post.title}</h3>
                                    <p className="text-gray-600 mb-4 font-afacad">{post.excerpt}</p>
                                    <div className="flex font-afacad items-center gap-4 text-md md:text-lg text-gray-500 mb-4">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={16} />
                                            <span>{post.metadata.datePublished}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock size={16} />
                                            <span>{post.metadata.readTime}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center text-[#D77914] font-poppins font-semibold hover:gap-4 gap-2 transition-all duration-300">
                                        Read Article <ArrowRight size={18} />
                                    </div>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogListing;