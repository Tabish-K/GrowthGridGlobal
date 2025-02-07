import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

function Footer() {
    return (
        <div>
            {/* Call to Action Section */}
            <div className='bg-[#CC0000] py-12 lg:py-16 px-4 text-white'>
                <div className='text-center max-w-xl lg:max-w-3xl mx-auto'>
                    <h1 className='text-2xl lg:text-3xl font-semibold'>
                        Let's Shape the Future Together.
                    </h1>
                    <p className='text-sm lg:text-md tracking-wider mt-4 lg:mt-8'>
                        Get in touch today to start your journey toward innovation, efficiency, and growth.
                    </p>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mt-8 lg:mt-12'>
                        <button className='border px-4 lg:px-6 py-2 lg:py-3 hover:bg-white hover:text-[#CC0000] transition-colors'>
                            Schedule a Call
                        </button>
                        <button className='border px-4 lg:px-6 py-2 lg:py-3 hover:bg-white hover:text-[#CC0000] transition-colors'>
                            Request a Proposal
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <div className="bg-[#000000] text-white py-8 lg:py-12 px-4 lg:px-12">
                <div className="container mx-auto">
                    {/* Top Section */}
                    <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-12 mb-12">
                        {/* Brand Section */}
                        <div className="max-w-sm">
                            <p className="text-md md:text-lg">
                                "Stay Updated on the Latest in AI and Business Growth."
                            </p>
                            <Link 
                                href="/" 
                                className="text-xl lg:text-2xl font-bold text-white hover:text-gray-300 mt-4 lg:mt-8 inline-block tracking-wide"
                            >
                                Growth Grid
                            </Link>
                        </div>

                        {/* Newsletter Section */}
                        <div className="space-y-6">
                            <div className="flex flex-col sm:flex-row gap-2">
                                <input 
                                    type="email" 
                                    placeholder="Your Email Address" 
                                    className="bg-gray-500 text-white placeholder:text-white py-2 lg:py-4 px-4 lg:px-10 w-full sm:w-auto"
                                />
                                <button className="bg-[#CC0000] uppercase py-2 lg:py-4 px-4 lg:px-6 font-semibold tracking-wide hover:bg-red-700 transition-colors">
                                    Subscribe
                                </button>
                            </div>
                            <div className="flex justify-start lg:justify-end gap-4">
                                <Twitter className="w-5 h-5 lg:w-6 lg:h-6 hover:text-gray-300 cursor-pointer" />
                                <Facebook className="w-5 h-5 lg:w-6 lg:h-6 hover:text-gray-300 cursor-pointer" />
                                <Instagram className="w-5 h-5 lg:w-6 lg:h-6 hover:text-gray-300 cursor-pointer" />
                                <Linkedin className="w-5 h-5 lg:w-6 lg:h-6 hover:text-gray-300 cursor-pointer" />
                                <Youtube className="w-5 h-5 lg:w-6 lg:h-6 hover:text-gray-300 cursor-pointer" />
                            </div>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-wrap gap-4 lg:gap-8 text-sm lg:text-base">
                        <Link href="/services" className="hover:text-gray-300">Services</Link>
                        <Link href="/blog" className="hover:text-gray-300">Blog</Link>
                        <Link href="/case-studies" className="hover:text-gray-300">Case Studies</Link>
                        <Link href="/contact" className="hover:text-gray-300">Contact Us</Link>
                        <Link href="/about" className="hover:text-gray-300">About Us</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;