"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, AlertTriangle, FileText, ExternalLink, Info } from "lucide-react"

export default function Disclaimer() {
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
                <AlertTriangle className="h-6 w-6 text-white" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-white font-poppins">Disclaimer</h1>
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
                className="whitespace-nowrap px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium text-sm transition-colors duration-300"
                >
                Cookie Policy
                </Link>
                <Link
                href="/legal/disclaimer"
                className="whitespace-nowrap px-4 py-2 rounded-full bg-[#D77914] text-white font-medium text-sm"
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
                    <h2 className="text-2xl font-bold m-0 font-poppins">Website Disclaimer</h2>
                </div>

                <p>
                    {`The information provided by Growth Grid Global ("we," "us," or "our") on our website
                    (growthgridglobal.com) is for general informational purposes only. All information on the site is
                    provided in good faith, however, we make no representation or warranty of any kind, express or implied,
                    regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any
                    information on the site.`}
                </p>

                <p>
                    Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as
                    a result of the use of the site or reliance on any information provided on the site. Your use of the
                    site and your reliance on any information on the site is solely at your own risk.
                </p>

                <div className="flex items-center gap-3 mb-6 mt-10">
                    <div className="bg-[#D77914]/10 p-2 rounded-full">
                    <ExternalLink className="h-5 w-5 text-[#D77914]" />
                    </div>
                    <h2 className="text-2xl font-bold m-0 font-poppins">External Links Disclaimer</h2>
                </div>

                <p>
                    The site may contain (or you may be sent through the site) links to other websites or content belonging
                    to or originating from third parties or links to websites and features in banners or other advertising.
                    Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity,
                    reliability, availability, or completeness by us.
                </p>

                <p>
                    We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any
                    information offered by third-party websites linked through the site or any website or feature linked in
                    any banner or other advertising. We will not be a party to or in any way be responsible for monitoring
                    any transaction between you and third-party providers of products or services.
                </p>

                <div className="flex items-center gap-3 mb-6 mt-10">
                    <div className="bg-[#D77914]/10 p-2 rounded-full">
                    <AlertTriangle className="h-5 w-5 text-[#D77914]" />
                    </div>
                    <h2 className="text-2xl font-bold m-0 font-poppins">Professional Disclaimer</h2>
                </div>

                <p>
                    The site cannot and does not contain business/financial/legal/medical/health advice. The
                    business/financial/legal/medical/health information is provided for general informational and
                    educational purposes only and is not a substitute for professional advice.
                </p>

                <p>
                    Accordingly, before taking any actions based upon such information, we encourage you to consult with the
                    appropriate professionals. We do not provide any kind of business/financial/legal/medical/health advice.
                    The use or reliance of any information contained on the site is solely at your own risk.
                </p>

                <div className="flex items-center gap-3 mb-6 mt-10">
                    <div className="bg-[#D77914]/10 p-2 rounded-full">
                    <FileText className="h-5 w-5 text-[#D77914]" />
                    </div>
                    <h2 className="text-2xl font-bold m-0 font-poppins">Testimonials Disclaimer</h2>
                </div>

                <p>
                    The site may contain testimonials by users of our products and/or services. These testimonials reflect
                    the real-life experiences and opinions of such users. However, the experiences are personal to those
                    particular users, and may not necessarily be representative of all users of our products and/or
                    services. We do not claim, and you should not assume, that all users will have the same experiences.
                </p>

                <p>
                    Your individual results may vary. The testimonials on the site are submitted in various forms such as
                    text, audio and/or video, and are reviewed by us before being posted. They appear on the site verbatim
                    as given by the users, except for the correction of grammar or typing errors. Some testimonials may have
                    been shortened for the sake of brevity where the full testimonial contained extraneous information not
                    relevant to the general public.
                </p>

                <p>
                    The views and opinions contained in the testimonials belong solely to the individual user and do not
                    reflect our views and opinions.
                </p>

                <div className="flex items-center gap-3 mb-6 mt-10">
                    <div className="bg-[#D77914]/10 p-2 rounded-full">
                    <FileText className="h-5 w-5 text-[#D77914]" />
                    </div>
                    <h2 className="text-2xl font-bold m-0 font-poppins">Contact Information</h2>
                </div>

                <p>
                    If you have any questions about this Disclaimer, please contact us at:
                    <br />
                    <a href="mailto:legal@growthgridglobal.com" className="text-[#D77914]">
                    legal@growthgridglobal.com
                    </a>
                </p>
                </motion.div>
            </div>

            <div className="mt-8 text-center">
                <p className="text-gray-500 text-sm font-afacad">
                This Disclaimer was last updated on May 8, 2025.
                <br />© 2025 Growth Grid Global. All rights reserved.
                </p>
            </div>
            </div>
        </div>
        </div>
    )
}