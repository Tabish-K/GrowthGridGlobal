"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, FileText, Scale, AlertTriangle, CheckCircle } from "lucide-react"

export default function TermsOfService() {
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
                <Scale className="h-6 w-6 text-white" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-white font-poppins">Terms of Service</h1>
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
            <div className="flex overflow-x-auto py-4 gap-4 scrollbar-hide font-afacad">
                <Link
                href="/legal/privacy-policy"
                className="whitespace-nowrap px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium text-sm transition-colors duration-300"
                >
                Privacy Policy
                </Link>
                <Link
                href="/legal/terms"
                className="whitespace-nowrap px-4 py-2 rounded-full bg-[#D77914] text-white font-medium text-sm"
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
                    <FileText className="h-5 w-5 text-[#D77914]" />
                    </div>
                    <h2 className="text-2xl font-bold m-0 font-poppins">Introduction</h2>
                </div>

                <p>
                    {`Welcome to Growth Grid Global. These Terms of Service ("Terms") govern your access to and use of the
                    Growth Grid Global website, products, and services ("Services"). Please read these Terms carefully, and
                    contact us if you have any questions.`}
                </p>

                <p>
                    By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you
                    do not agree to these Terms, please do not use our Services.
                </p>

                <div className="flex items-center gap-3 mb-6 mt-10">
                    <div className="bg-[#D77914]/10 p-2 rounded-full">
                    <CheckCircle className="h-5 w-5 text-[#D77914]" />
                    </div>
                    <h2 className="text-2xl font-bold m-0 font-poppins">Using Our Services</h2>
                </div>

                <p>
                    You must follow any policies made available to you within the Services. You may use our Services only as
                    permitted by law. We may suspend or stop providing our Services to you if you do not comply with our
                    terms or policies or if we are investigating suspected misconduct.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4 font-poppins">Account Registration</h3>

                <p>
                    To access certain features of our Services, you may be required to register for an account. When you
                    register for an account, you may be required to provide us with some information about yourself, such as
                    your email address or other contact information. You agree that the information you provide to us is
                    accurate and that you will keep it accurate and up-to-date at all times.
                </p>

                <p>
                    You are responsible for maintaining the confidentiality of your account password and for restricting
                    access to your account. You agree to accept responsibility for all activities that occur under your
                    account.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4 font-poppins">User Content</h3>

                <p>
                    {`Our Services may allow you to store or share content such as text, images, videos, or other materials
                    ("User Content"). You retain ownership of any intellectual property rights that you hold in that User
                    Content.`}
                </p>

                <p>
                    When you upload, submit, store, send or receive User Content to or through our Services, you give Growth
                    Grid Global (and those we work with) a worldwide license to use, host, store, reproduce, modify, create
                    derivative works, communicate, publish, publicly perform, publicly display and distribute such User
                    Content. The rights you grant in this license are for the limited purpose of operating, promoting, and
                    improving our Services, and to develop new ones.
                </p>

                <div className="flex items-center gap-3 mb-6 mt-10">
                    <div className="bg-[#D77914]/10 p-2 rounded-full">
                    <AlertTriangle className="h-5 w-5 text-[#D77914]" />
                    </div>
                    <h2 className="text-2xl font-bold m-0 font-poppins">Prohibited Uses</h2>
                </div>

                <p>You agree not to use the Services:</p>

                <ul>
                    <li>
                    In any way that violates any applicable federal, state, local, or international law or regulation.
                    </li>
                    <li>
                    {`To transmit, or procure the sending of, any advertising or promotional material, including any "junk
                    mail," "chain letter," "spam," or any other similar solicitation.`}
                    </li>
                    <li>
                    To impersonate or attempt to impersonate Growth Grid Global, a Growth Grid Global employee, another
                    user, or any other person or entity.
                    </li>
                    <li>
                    {`To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Services,
                    or which, as determined by us, may harm Growth Grid Global or users of the Services or expose them to
                    liability.`}
                    </li>
                </ul>

                <div className="flex items-center gap-3 mb-6 mt-10">
                    <div className="bg-[#D77914]/10 p-2 rounded-full">
                    <Scale className="h-5 w-5 text-[#D77914]" />
                    </div>
                    <h2 className="text-2xl font-bold m-0 font-poppins">Intellectual Property Rights</h2>
                </div>

                <p>
                    The Services and their entire contents, features, and functionality (including but not limited to all
                    information, software, text, displays, images, video, and audio, and the design, selection, and
                    arrangement thereof) are owned by Growth Grid Global, its licensors, or other providers of such material
                    and are protected by United States and international copyright, trademark, patent, trade secret, and
                    other intellectual property or proprietary rights laws.
                </p>

                <p>
                    These Terms permit you to use the Services for your personal, non-commercial use only. You must not
                    reproduce, distribute, modify, create derivative works of, publicly display, publicly perform,
                    republish, download, store, or transmit any of the material on our Services, except as follows:
                </p>

                <ul>
                    <li>
                    Your computer may temporarily store copies of such materials in RAM incidental to your accessing and
                    viewing those materials.
                    </li>
                    <li>
                    You may store files that are automatically cached by your Web browser for display enhancement
                    purposes.
                    </li>
                    <li>
                    You may print or download one copy of a reasonable number of pages of the Services for your own
                    personal, non-commercial use and not for further reproduction, publication, or distribution.
                    </li>
                    <li>
                    If we provide social media features with certain content, you may take such actions as are enabled by
                    such features.
                    </li>
                </ul>

                <div className="flex items-center gap-3 mb-6 mt-10">
                    <div className="bg-[#D77914]/10 p-2 rounded-full">
                    <FileText className="h-5 w-5 text-[#D77914]" />
                    </div>
                    <h2 className="text-2xl font-bold m-0 font-poppins">Contact Information</h2>
                </div>

                <p>
                    If you have any questions about these Terms, please contact us at:
                    <br />
                    <a href="mailto:legal@growthgridglobal.com" className="text-[#D77914]">
                    legal@growthgridglobal.com
                    </a>
                </p>
                </motion.div>
            </div>

            <div className="mt-8 text-center">
                <p className="text-gray-500 text-sm font-afacad">
                These Terms of Service were last updated on May 8, 2025.
                <br />© 2025 Growth Grid Global. All rights reserved.
                </p>
            </div>
            </div>
        </div>
        </div>
    )
}