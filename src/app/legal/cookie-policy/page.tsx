"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Cookie, FileText, Settings, Info } from "lucide-react"

export default function CookiePolicy() {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
        },
    }

    return (
        <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#D77914] to-[#4F1C51] py-24 md:py-28">
            <div className="container mx-auto px-6 sm:px-8">
            {/* <Link
                href="/"
                className="inline-flex items-center text-white/90 hover:text-white mb-8 transition-colors duration-300"
            >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
            </Link> */}

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-4 mb-6"
            >
                <div className="bg-white/10 p-3 rounded-full">
                <Cookie className="h-6 w-6 text-white" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-white font-poppins">Cookie Policy</h1>
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white/90 max-w-3xl font-afacad text-lg"
            >
                Last Updated: May 8, 2025
            </motion.p>
            </div>
        </div>

        {/* Legal Navigation */}
        <div className="bg-white border-b">
            <div className="container mx-auto px-6 sm:px-8">
            <div className="flex font-afacad overflow-x-auto py-4 gap-4 scrollbar-hide">
                <Link
                href="/legal/privacy-policy"
                className="whitespace-nowrap px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium text-sm transition-colors duration-300"
                >
                Privacy Policy
                </Link>
                <Link
                href="/legal/terms"
                className="whitespace-nowrap px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium text-sm transition-colors duration-300"
                >
                Terms of Service
                </Link>
                <Link
                href="/legal/cookie-policy"
                className="whitespace-nowrap px-4 py-2 rounded-full bg-[#D77914] text-white font-medium text-sm"
                >
                Cookie Policy
                </Link>
                <Link
                href="/legal/disclaimer"
                className="whitespace-nowrap px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium text-sm transition-colors duration-300"
                >
                Disclaimer
                </Link>
            </div>
            </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 sm:px-8 py-12">
            <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12">
                <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="prose prose-lg max-w-none font-afacad"
                >
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-[#D77914]/10 p-2 rounded-full">
                    <Info className="h-5 w-5 text-[#D77914]" />
                    </div>
                    <h2 className="text-2xl font-bold m-0 font-poppins">What Are Cookies</h2>
                </div>

                <p>
                    Cookies are small text files that are placed on your computer or mobile device when you visit a website.
                    They are widely used to make websites work more efficiently and provide information to the owners of the
                    site. Cookies enhance user experience by allowing websites to remember your preferences and understand
                    how you use different parts of a website.
                </p>

                <div className="flex items-center gap-3 mb-6 mt-10">
                    <div className="bg-[#D77914]/10 p-2 rounded-full">
                    <Cookie className="h-5 w-5 text-[#D77914]" />
                    </div>
                    <h2 className="text-2xl font-bold m-0 font-poppins">How We Use Cookies</h2>
                </div>

                <p>
                    Growth Grid Global uses cookies for a variety of reasons. We use cookies to understand how you use our
                    website and to improve your experience. This includes personalizing content, providing social media
                    features, and analyzing our traffic.
                </p>

                <p>We use the following types of cookies:</p>

                <ul>
                    <li>
                    <strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly.
                    They enable core functionality such as security, network management, and account access. You may
                    disable these by changing your browser settings, but this may affect how the website functions.
                    </li>
                    <li>
                    <strong>Analytics Cookies:</strong> These cookies allow us to count visits and traffic sources so we
                    can measure and improve the performance of our site. They help us to know which pages are the most and
                    least popular and see how visitors move around the site.
                    </li>
                    <li>
                    <strong>Functionality Cookies:</strong> These cookies enable the website to provide enhanced
                    functionality and personalization. They may be set by us or by third-party providers whose services we
                    have added to our pages.
                    </li>
                    <li>
                    <strong>Advertising Cookies:</strong> These cookies may be set through our site by our advertising
                    partners. They may be used by those companies to build a profile of your interests and show you
                    relevant advertisements on other sites.
                    </li>
                </ul>

                <div className="flex items-center gap-3 mb-6 mt-10">
                    <div className="bg-[#D77914]/10 p-2 rounded-full">
                    <Settings className="h-5 w-5 text-[#D77914]" />
                    </div>
                    <h2 className="text-2xl font-bold m-0 font-poppins">Managing Cookies</h2>
                </div>

                <p>
                    Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse
                    cookies, or to alert you when cookies are being sent. The methods for doing so vary from browser to
                    browser, and from version to version.
                </p>

                <p>You can obtain up-to-date information about blocking and deleting cookies via these links:</p>

                <ul>
                    <li>
                    <a
                        href="https://support.google.com/chrome/answer/95647"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D77914]"
                    >
                        Google Chrome
                    </a>
                    </li>
                    <li>
                    <a
                        href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D77914]"
                    >
                        Mozilla Firefox
                    </a>
                    </li>
                    <li>
                    <a
                        href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D77914]"
                    >
                        Microsoft Edge
                    </a>
                    </li>
                    <li>
                    <a
                        href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D77914]"
                    >
                        Safari
                    </a>
                    </li>
                </ul>

                <p>
                    Please note that restricting cookies may impact the functionality of this website and many others that
                    you visit. Disabling cookies will usually result in disabling certain functionality and features of this
                    site. Therefore, it is recommended that you do not disable cookies.
                </p>

                <div className="flex items-center gap-3 mb-6 mt-10">
                    <div className="bg-[#D77914]/10 p-2 rounded-full">
                    <FileText className="h-5 w-5 text-[#D77914]" />
                    </div>
                    <h2 className="text-2xl font-bold m-0 font-poppins">Changes to Our Cookie Policy</h2>
                </div>

                <p>
                    {`We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new
                    Cookie Policy on this page and updating the "Last Updated" date at the top of this policy.`}
                </p>

                <p>
                    You are advised to review this Cookie Policy periodically for any changes. Changes to this Cookie Policy
                    are effective when they are posted on this page.
                </p>

                <div className="flex items-center gap-3 mb-6 mt-10">
                    <div className="bg-[#D77914]/10 p-2 rounded-full">
                    <FileText className="h-5 w-5 text-[#D77914]" />
                    </div>
                    <h2 className="text-2xl font-bold m-0 font-poppins">Contact Information</h2>
                </div>

                <p>
                    If you have any questions about our Cookie Policy, please contact us at:
                    <br />
                    <a href="mailto:privacy@growthgridglobal.com" className="text-[#D77914]">
                    privacy@growthgridglobal.com
                    </a>
                </p>
                </motion.div>
            </div>

            <div className="mt-8 text-center">
                <p className="text-gray-500 text-sm font-afacad">
                This Cookie Policy was last updated on May 8, 2025.
                <br />© 2025 Growth Grid Global. All rights reserved.
                </p>
            </div>
            </div>
        </div>
        </div>
    )
}