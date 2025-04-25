"use client"

import { useState, useEffect, use } from "react"
import { motion } from "framer-motion"
import {
    Calendar,
    Clock,
    User,
    ArrowLeft,
    Tag,
    Share2,
    Bookmark,
    Heart,
    MessageCircle,
    ChevronRight,
    Facebook,
    Twitter,
    Linkedin,
} from "lucide-react"
import Link from "next/link"
import { type BlogPost, blogPosts } from "../blogs"
import Image from "next/image"

interface BlogDetailProps {
    params: Promise<{ id: string }>; // adjust if needed
}

const BlogDetail = ({ params }: BlogDetailProps) => {
    const { id } = use(params);
    const [post, setPost] = useState<BlogPost | null>(null)
    const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([])
    const [isLiked, setIsLiked] = useState(false)
    const [isBookmarked, setIsBookmarked] = useState(false)
    const [showShareOptions, setShowShareOptions] = useState(false)
    const [activeSection, setActiveSection] = useState(0)

useEffect(() => {
    // Find the current blog post
    const currentPost = blogPosts.find((post) => post.id === id)
    setPost(currentPost || null)

    // If post found, find related posts based on tags
    if (currentPost) {
        const related = blogPosts
            .filter((p) => p.id !== id && p.metadata.tags.some((tag) => currentPost.metadata.tags.includes(tag)))
            .slice(0, 3)
        setRelatedPosts(related)
    }

    // Reset scroll position
    window.scrollTo(0, 0)
}, [id])

// Handle scroll to update active section
useEffect(() => {
    if (!post) return

    const handleScroll = () => {
        const sections = document.querySelectorAll(".content-section")
        let currentActiveSection = 0

        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect()
            if (rect.top <= 200) {
            currentActiveSection = index
            }
        })

        setActiveSection(currentActiveSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
}, [post])

if (!post) {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center font-afacad">
            <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Blog post not found</h1>
            <Link href="/blog" className="inline-flex items-center text-[#D77914] font-semibold gap-2">
                <ArrowLeft size={18} /> Back to Blog
            </Link>
            </div>
        </div>
    )
}

return (
    <div className="min-h-screen bg-gray-50">
        {/* Hero Section with Background Image */}
        <div
            className="min-h-[40rem] md:min-h-[50rem] w-full bg-cover bg-center flex items-center relative"
            style={{ backgroundImage: `url('${post.backgroundImage}')` }}
        >
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"
            />

            <div className="container mx-auto px-8 sm:px-12 relative z-10 py-20 md:py-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="flex flex-col md:flex-row mb-8 gap-4 items-center md:items-start">
                <Link
                    href="/blog"
                    className="inline-flex font-afacad items-center text-white font-semibold gap-2 hover:underline bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm"
                >
                    <ArrowLeft size={18} /> Back to Blog
                </Link>

                <span className="inline-block bg-[#D77914] font-afacad text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {post.metadata.category}
                </span>
                </div>

                <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl font-poppins leading-tight"
                >
                {post.title}
                </motion.h1>

                <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap items-center gap-6 text-white mb-8 font-afacad"
                >
                <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                    <div className="w-8 h-8 bg-[#D77914] rounded-full flex items-center justify-center">
                    <User size={16} className="text-white" />
                    </div>
                    <span>{post.metadata.author}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                    <Calendar size={18} />
                    <span>{post.metadata.datePublished}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                    <Clock size={18} />
                    <span>{post.metadata.readTime}</span>
                </div>
                </motion.div>

                <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap gap-2 mt-4"
                >
                {post.metadata.tags.map((tag, index) => (
                    <span
                    key={index}
                    className="bg-white/10 font-afacad text-white px-4 py-2 rounded-full text-sm flex items-center gap-1 backdrop-blur-sm hover:bg-white/20 transition-colors duration-300 cursor-pointer"
                    >
                    <Tag size={14} /> {tag}
                    </span>
                ))}
                </motion.div>
            </motion.div>
            </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-8 py-12 -mt-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Floating Action Bar */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="hidden lg:flex lg:col-span-1 sticky top-8 h-fit flex-col items-center gap-4 bg-white p-4 rounded-full shadow-lg"
            >
                <button
                onClick={() => setIsLiked(!isLiked)}
                className={`p-3 rounded-full transition-colors duration-300 ${isLiked ? "bg-red-50 text-red-500" : "hover:bg-gray-100"}`}
                >
                <Heart size={20} fill={isLiked ? "currentColor" : "none"} />
                </button>
                <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-3 rounded-full transition-colors duration-300 ${isBookmarked ? "bg-[#D77914]/10 text-[#D77914]" : "hover:bg-gray-100"}`}
                >
                <Bookmark size={20} fill={isBookmarked ? "currentColor" : "none"} />
                </button>
                <div className="relative">
                <button
                    onClick={() => setShowShareOptions(!showShareOptions)}
                    className="p-3 rounded-full hover:bg-gray-100 transition-colors duration-300"
                >
                    <Share2 size={20} />
                </button>

                {showShareOptions && (
                    <div className="absolute left-12 top-0 bg-white rounded-xl shadow-lg p-2 w-10">
                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300 w-full flex justify-center">
                        <Facebook size={18} className="text-blue-600" />
                    </button>
                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300 w-full flex justify-center">
                        <Twitter size={18} className="text-sky-500" />
                    </button>
                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300 w-full flex justify-center">
                        <Linkedin size={18} className="text-blue-700" />
                    </button>
                    </div>
                )}
                </div>
                <button className="p-3 rounded-full hover:bg-gray-100 transition-colors duration-300">
                <MessageCircle size={20} />
                </button>
            </motion.div>

            {/* Main Content */}
            <motion.div
                className="lg:col-span-7 bg-white p-8 md:p-12 rounded-3xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                {/* Mobile Action Bar */}
                <div className="flex lg:hidden justify-between items-center mb-8 p-4 bg-gray-50 rounded-xl">
                <button
                    onClick={() => setIsLiked(!isLiked)}
                    className={`p-2 rounded-full transition-colors duration-300 ${isLiked ? "bg-red-50 text-red-500" : "hover:bg-gray-100"}`}
                >
                    <Heart size={20} fill={isLiked ? "currentColor" : "none"} />
                </button>
                <button
                    onClick={() => setIsBookmarked(!isBookmarked)}
                    className={`p-2 rounded-full transition-colors duration-300 ${isBookmarked ? "bg-[#D77914]/10 text-[#D77914]" : "hover:bg-gray-100"}`}
                >
                    <Bookmark size={20} fill={isBookmarked ? "currentColor" : "none"} />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300">
                    <Share2 size={20} />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300">
                    <MessageCircle size={20} />
                </button>
                </div>

                {post.structuredContent.sections.map((section, index) => (
                <div key={index} className="mb-12 content-section" id={`section-${index}`}>
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 font-poppins border-l-4 border-[#D77914] pl-4">
                    {section.title}
                    </h2>
                    <div className="prose prose-lg max-w-none font-afacad text-gray-700">
                    {section.content.split("\n\n").map((paragraph, pIndex) => (
                        <p key={pIndex} className="mb-6 leading-relaxed">
                        {paragraph}
                        </p>
                    ))}
                    </div>

                    {/* Add a decorative element between sections */}
                    {index < post.structuredContent.sections.length - 1 && (
                    <div className="flex justify-center my-12">
                        <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#D77914]"></div>
                        <div className="w-2 h-2 rounded-full bg-[#D77914]"></div>
                        <div className="w-2 h-2 rounded-full bg-[#D77914]"></div>
                        </div>
                    </div>
                    )}
                </div>
                ))}

                {/* Sources Section */}
                {post.metadata.sources && post.metadata.sources.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <h3 className="text-xl font-bold mb-6 font-poppins">Sources & References</h3>
                    <ul className="list-none space-y-4 font-afacad">
                    {post.metadata.sources.map((source, index) => (
                        <li
                        key={index}
                        className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                        >
                        <div className="flex items-start gap-3">
                            <div className="bg-[#D77914]/10 text-[#D77914] rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                            {index + 1}
                            </div>
                            <div>
                            <span className="font-semibold">{source.name}</span> ({source.year}): {source.citation}
                            </div>
                        </div>
                        </li>
                    ))}
                    </ul>
                </div>
                )}

                {/* Author Bio */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row items-center gap-6 bg-gray-50 p-6 rounded-xl">
                    <div className="w-20 h-20 bg-[#D77914]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <User size={32} className="text-[#D77914]" />
                    </div>
                    <div>
                    <h4 className="font-bold text-lg mb-2">{post.metadata.author}</h4>
                    <p className="text-gray-700 font-afacad">
                        Expert in digital transformation and business technology trends with over a decade of experience in
                        the industry.
                    </p>
                    </div>
                </div>
                </div>

                {/* Next/Previous Article Navigation */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 font-poppins">
                <Link
                    href={`/blog/${Number.parseInt(id) > 1 ? Number.parseInt(id) - 1 : blogPosts.length}`}
                    className="p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-300 flex items-center gap-3"
                >
                    <ArrowLeft size={20} className="text-[#D77914]" />
                    <div>
                    <div className="text-sm text-gray-500">Previous Article</div>
                    <div className="font-semibold">Previous article title</div>
                    </div>
                </Link>
                <Link
                    href={`/blog/${Number.parseInt(id) < blogPosts.length ? Number.parseInt(id) + 1 : 1}`}
                    className="p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-300 flex items-center justify-end gap-3 text-right"
                >
                    <div>
                    <div className="text-sm text-gray-500">Next Article</div>
                    <div className="font-semibold">Next article title</div>
                    </div>
                    <ChevronRight size={20} className="text-[#D77914]" />
                </Link>
                </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
                className="lg:col-span-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
            >
                {/* Table of Contents */}
                <div className="bg-white p-6 rounded-3xl shadow-lg mb-8 sticky top-8">
                <h3 className="text-xl font-bold mb-6 font-poppins border-b pb-4">Table of Contents</h3>
                <nav className="space-y-3">
                    {post.structuredContent.sections.map((section, index) => (
                    <a
                        key={index}
                        href={`#section-${index}`}
                        className={`block py-2 pl-3 font-afacad border-l-2 transition-all duration-300 ${
                        activeSection === index
                            ? "border-[#D77914] text-[#D77914] font-medium pl-4"
                            : "border-gray-200 text-gray-600 hover:border-gray-400 hover:pl-4"
                        }`}
                    >
                        {section.title}
                    </a>
                    ))}
                </nav>
                </div>

                {/* Author Info */}
                <div className="bg-white p-6 rounded-3xl shadow-lg mb-8">
                <h3 className="text-xl font-bold mb-6 font-poppins border-b pb-4">About the Author</h3>
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-[#D77914]/10 rounded-full flex items-center justify-center">
                    <User size={24} className="text-[#D77914]" />
                    </div>
                    <div>
                    <h4 className="font-bold text-lg font-poppins">{post.metadata.author}</h4>
                    <p className="text-gray-600 font-afacad">Content Creator</p>
                    </div>
                </div>
                <p className="text-gray-700 font-afacad mb-6">
                    Expert in digital transformation and business technology trends with over a decade of experience in the
                    industry.
                </p>
                <div className="flex gap-2">
                    <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300">
                    <Twitter size={18} />
                    </button>
                    <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300">
                    <Linkedin size={18} />
                    </button>
                    <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300">
                    <Facebook size={18} />
                    </button>
                </div>
                </div>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                <div className="bg-white p-6 rounded-3xl shadow-lg">
                    <h3 className="text-xl font-bold mb-6 font-poppins border-b pb-4">Related Articles</h3>
                    <div className="space-y-6">
                    {relatedPosts.map((relatedPost) => (
                        <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`} className="block group">
                        <div className="flex gap-4">
                            <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                            <img
                                src={relatedPost.image || "/placeholder.svg"}
                                alt={relatedPost.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            </div>
                            <div>
                            <span className="text-xs md:text-sm text-[#D77914] font-semibold font-afacad">{relatedPost.metadata.category}</span>
                            <h4 className="font-bold font-afacad text-md md:text-lg group-hover:text-[#D77914] transition-colors duration-300 line-clamp-2">
                                {relatedPost.title}
                            </h4>
                            <div className="flex items-center gap-2 text-gray-500 text-sm mt-2 font-afacad">
                                <Calendar size={14} />
                                <span>{relatedPost.metadata.datePublished}</span>
                            </div>
                            </div>
                        </div>
                        </Link>
                    ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-200">
                    <Link
                        href="/blog"
                        className="inline-flex font-poppins items-center text-[#D77914] font-semibold hover:gap-3 gap-2 transition-all duration-300"
                    >
                        View All Articles <ChevronRight size={18} />
                    </Link>
                    </div>
                </div>
                )}
            </motion.div>
            </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-[#D77914] to-[#4F1C51] py-16 mt-12 rounded-3xl mx-4 md:mx-16">
            <div className="container mx-auto px-8 rounded-3xl">
            <div className="max-w-3xl mx-auto text-center">
                <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold mb-4 text-white font-poppins"
                >
                Enjoyed this article?
                </motion.h2>
                <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white/90 mb-8 font-afacad text-lg"
                >
                Subscribe to our newsletter to receive similar content and updates
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
                    className="flex-grow px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white font-afacad text-md md:text-lg"
                />
                <button className="bg-white text-[#D77914] px-6 py-3 font-afacad uppercase rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
                    Subscribe
                </button>
                </motion.div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default BlogDetail
