"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Shield, Lock, Eye, FileText } from "lucide-react"

export default function PrivacyPolicy() {
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
                <Shield className="h-6 w-6 text-white" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-white font-poppins">Privacy Policy</h1>
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
                className="whitespace-nowrap px-4 py-2 rounded-full bg-[#D77914] text-white font-medium text-sm"
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
                    <Eye className="h-5 w-5 text-[#D77914]" />
                    </div>
                    <h2 className="text-2xl font-bold m-0 font-poppins">Introduction</h2>
                </div>

                <p>
                    {`At Growth Grid Global ("we," "our," or "us"), we respect your privacy and are committed to protecting it
                    through our compliance with this policy. This Privacy Policy describes the types of information we may
                    collect from you or that you may provide when you visit our website [website address] (our "Website")
                    and our practices for collecting, using, maintaining, protecting, and disclosing that information.`}
                </p>

                <p>
                    This policy applies to information we collect on this Website, in email, text, and other electronic
                    messages between you and this Website, and through any mobile applications you download from this
                    Website, which provide dedicated non-browser-based interaction between you and this Website.
                </p>

                <div className="flex items-center gap-3 mb-6 mt-10">
                    <div className="bg-[#D77914]/10 p-2 rounded-full">
                    <FileText className="h-5 w-5 text-[#D77914]" />
                    </div>
                    <h2 className="text-2xl font-bold m-0 font-poppins">Information We Collect</h2>
                </div>

                <p>We collect several types of information from and about users of our Website, including information:</p>

                <ul>
                    <li>
                    {`By which you may be personally identified, such as name, postal address, e-mail address, telephone
                    number, or any other identifier by which you may be contacted online or offline ("personal
                    information");`}
                    </li>
                    <li>
                    That is about you but individually does not identify you, such as your internet connection, the
                    equipment you use to access our Website, and usage details;
                    </li>
                    <li>About your internet connection, the equipment you use to access our Website, and usage details.</li>
                </ul>

                <p>We collect this information:</p>

                <ul>
                    <li>Directly from you when you provide it to us.</li>
                    <li>
                    Automatically as you navigate through the site. Information collected automatically may include usage
                    details, IP addresses, and information collected through cookies, web beacons, and other tracking
                    technologies.
                    </li>
                    <li>From third parties, for example, our business partners.</li>
                </ul>

                <div className="flex items-center gap-3 mb-6 mt-10">
                    <div className="bg-[#D77914]/10 p-2 rounded-full">
                    <Lock className="h-5 w-5 text-[#D77914]" />
                    </div>
                    <h2 className="text-2xl font-bold m-0 font-poppins">How We Use Your Information</h2>
                </div>

                <p>
                    We use information that we collect about you or that you provide to us, including any personal
                    information:
                </p>

                <ul>
                    <li>To present our Website and its contents to you.</li>
                    <li>To provide you with information, products, or services that you request from us.</li>
                    <li>To fulfill any other purpose for which you provide it.</li>
                    <li>To provide you with notices about your account, including expiration and renewal notices.</li>
                    <li>
                    To carry out our obligations and enforce our rights arising from any contracts entered into between
                    you and us, including for billing and collection.
                    </li>
                    <li>
                    To notify you about changes to our Website or any products or services we offer or provide through it.
                    </li>
                    <li>In any other way we may describe when you provide the information.</li>
                    <li>For any other purpose with your consent.</li>
                </ul>

                <div className="flex items-center gap-3 mb-6 mt-10">
                    <div className="bg-[#D77914]/10 p-2 rounded-full">
                    <Shield className="h-5 w-5 text-[#D77914]" />
                    </div>
                    <h2 className="text-2xl font-bold m-0 font-poppins">Disclosure of Your Information</h2>
                </div>

                <p>
                    We may disclose aggregated information about our users, and information that does not identify any
                    individual, without restriction.
                </p>

                <p>
                    We may disclose personal information that we collect or you provide as described in this privacy policy:
                </p>

                <ul>
                    <li>To our subsidiaries and affiliates.</li>
                    <li>
                    To contractors, service providers, and other third parties we use to support our business and who are
                    bound by contractual obligations to keep personal information confidential and use it only for the
                    purposes for which we disclose it to them.
                    </li>
                    <li>
                    {`To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization,
                    dissolution, or other sale or transfer of some or all of Growth Grid Global's assets, whether as a
                    going concern or as part of bankruptcy, liquidation, or similar proceeding, in which personal
                    information held by Growth Grid Global about our Website users is among the assets transferred.`}
                    </li>
                    <li>To fulfill the purpose for which you provide it.</li>
                    <li>For any other purpose disclosed by us when you provide the information.</li>
                    <li>With your consent.</li>
                </ul>

                <p>We may also disclose your personal information:</p>

                <ul>
                    <li>
                    To comply with any court order, law, or legal process, including to respond to any government or
                    regulatory request.
                    </li>
                    <li>
                    To enforce or apply our terms of use and other agreements, including for billing and collection
                    purposes.
                    </li>
                    <li>
                    If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of
                    Growth Grid Global, our customers, or others.
                    </li>
                </ul>

                <div className="flex items-center gap-3 mb-6 mt-10">
                    <div className="bg-[#D77914]/10 p-2 rounded-full">
                    <FileText className="h-5 w-5 text-[#D77914]" />
                    </div>
                    <h2 className="text-2xl font-bold m-0 font-poppins">Contact Information</h2>
                </div>

                <p>
                    To ask questions or comment about this privacy policy and our privacy practices, contact us at:
                    <br />
                    <a href="mailto:privacy@growthgridglobal.com" className="text-[#D77914]">
                    privacy@growthgridglobal.com
                    </a>
                </p>
                </motion.div>
            </div>

            <div className="mt-8 text-center">
                <p className="text-gray-500 text-sm font-afacad">
                This privacy policy was last updated on May 8, 2025.
                <br />© 2025 Growth Grid Global. All rights reserved.
                </p>
            </div>
            </div>
        </div>
        </div>
    )
}