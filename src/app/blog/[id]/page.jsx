'use client';

import { blogPosts } from '@/lib/blogs';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const BlogPost = ({ params }) => {
    const { id } = params;
    const post = blogPosts.find(post => post.id === id);

    if (!post) {
        return <div>Blog post not found</div>;
    }

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    // Split content into paragraphs
    const contentParagraphs = post.fullContent.split('\n\n').filter(para => para.trim());

    return (
        <div className="min-h-screen bg-gray-50 relative">
            {/* Hero Section */}
            <motion.section 
                className="text-white w-full h-80 relative"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                style={{
                    backgroundImage: `url('${post.backgroundImage || "/api/placeholder/1200/400"}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Black overlay */}
                <div className="absolute inset-0 bg-black/50" />  
            </motion.section>

            {/* Breadcrumb */}
            <div className="bg-white border-b">
                <div className="container mx-auto px-8 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Link href="/blog" className="hover:text-red-600">Blog</Link>
                        <ChevronRight size={16} />
                        <span className="text-gray-400">{post.metadata.category}</span>
                    </div>
                </div>
            </div>

            {/* Article Header */}
            <motion.header 
                className="bg-white border-b"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className="container mx-auto px-6 md:px-8 py-12">
                    <div className="max-w-3xl mx-auto">
                        <span className="text-red-600 font-semibold">{post.metadata.category}</span>
                        <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-6">{post.title}</h1>
                        <div className="items-center gap-6 text-gray-500 grid grid-cols-2 md:grid-cols-3">
                            <div className="flex items-center gap-2 text-sm">
                                <User size={20} />
                                <span>{post.metadata.author}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <Calendar size={20} />
                                <span>{new Date(post.metadata.datePublished).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <Clock size={20} />
                                <span>{post.readTime || '5 min read'}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.header>

            {/* Article Content */}
            <motion.article 
                className="container mx-auto px-8 py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <div className="max-w-3xl mx-auto">
                    <div className="prose prose-lg">
                        {contentParagraphs.map((paragraph, index) => (
                            <p key={index} className="text-gray-600 leading-relaxed mb-6">
                                {paragraph}
                            </p>
                        ))}

                        {/* Structured Sections */}
                        {post.structuredContent.sections.map((section, index) => (
                            <div key={index} className="mt-8">
                                <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {section.content}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Sources */}
                    {post.metadata.sources && post.metadata.sources.length > 0 && (
                        <div className="mt-12 pt-8 border-t">
                            <h3 className="text-xl font-bold mb-4">Sources</h3>
                            <ul className="space-y-2">
                                {post.metadata.sources.map((source, index) => (
                                    <li key={index} className="text-gray-600">
                                        {source.name} ({source.year}): {source.citation}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Tags */}
                    <div className="mt-12 pt-8 border-t">
                        <div className="flex flex-wrap gap-2">
                            {post.metadata.tags.map(tag => (
                                <span 
                                    key={tag}
                                    className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.article>
        </div>
    );
};

export default BlogPost;