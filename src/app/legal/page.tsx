"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Shield, Scale, Cookie, AlertTriangle, FileText, ArrowRight } from "lucide-react"

export default function LegalHub() {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
        },
    }

    const legalDocuments = [
        {
        title: "Privacy Policy",
        description: "Learn how we collect, use, and protect your personal information",
        icon: Shield,
        link: "/legal/privacy-policy",
        color: "bg-blue-50 text-blue-600",
        },
        {
        title: "Terms of Service",
        description: "The rules and guidelines for using our website and services",
        icon: Scale,
        link: "/legal/terms-of-service",
        color: "bg-purple-50 text-purple-600",
        },
        {
        title: "Cookie Policy",
        description: "Information about how we use cookies and similar technologies",
        icon: Cookie,
        link: "/legal/cookie-policy",
        color: "bg-green-50 text-green-600",
        },
        {
        title: "Disclaimer",
        description: "Important information about the limitations of our content",
        icon: AlertTriangle,
        link: "/legal/disclaimer",
        color: "bg-amber-50 text-amber-600",
        },
    ]

    return (
        <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#D77914] to-[#4F1C51] py-28">
            <div className="container mx-auto px-6 sm:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <motion.div
                initial={{ width: 0 }}
                animate={{ width: "15%" }}
                transition={{ duration: 1 }}
                className="h-1 bg-white mb-8"
                />
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 font-poppins">Legal Information</h1>
                <p className="text-white/90 max-w-3xl font-afacad text-lg md:text-xl">
                Transparency is important to us. Find all our legal documents and policies in one place.
                </p>
            </motion.div>
            </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 sm:px-8 py-12 -mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {legalDocuments.map((doc, index) => (
                <motion.div
                key={doc.title}
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, delay: index * 0.1 },
                    },
                }}
                >
                <Link href={doc.link}>
                    <div className="bg-white rounded-3xl shadow-sm p-8 h-full hover:shadow-md transition-shadow duration-300 group">
                    <div className={`${doc.color} w-12 h-12 rounded-2xl flex items-center justify-center mb-6`}>
                        <doc.icon className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl font-bold mb-4 font-poppins group-hover:text-[#D77914] transition-colors duration-300">
                        {doc.title}
                    </h2>
                    <p className="text-gray-600 mb-6 font-afacad">{doc.description}</p>
                    <div className="flex items-center font-afacad text-[#D77914] font-semibold group-hover:gap-3 gap-2 transition-all duration-300">
                        Read Document{" "}
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                    </div>
                </Link>
                </motion.div>
            ))}
            </div>

            <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="mt-16 bg-white rounded-3xl shadow-sm p-8 md:p-12"
            >
            <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#D77914]/10 p-2 rounded-full">
                <FileText className="h-5 w-5 text-[#D77914]" />
                </div>
                <h2 className="text-2xl font-bold m-0 font-poppins">Additional Legal Information</h2>
            </div>

            <div className="prose prose-lg max-w-none font-afacad">
                <p>
                At Growth Grid Global, we are committed to transparency and compliance with all applicable laws and
                regulations. Our legal documents are designed to clearly communicate our policies, practices, and the
                terms under which we operate.
                </p>

                <p>
                These documents are regularly reviewed and updated to ensure they remain current with changing laws and
                our business practices. The date at the top of each document indicates when it was last updated.
                </p>

                <p>
                {`If you have any questions about our legal documents or need further clarification, please don't hesitate
                to contact our legal team at`}{" "}
                <a href="mailto:legal@growthgridglobal.com" className="text-[#D77914]">
                    legal@growthgridglobal.com
                </a>
                .
                </p>
            </div>
            </motion.div>

            <div className="mt-16 text-center">
            <p className="text-gray-500 text-sm font-afacad">© 2025 Growth Grid Global. All rights reserved.</p>
            </div>
        </div>
        </div>
    )
}