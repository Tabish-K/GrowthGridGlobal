import { ChevronRight } from "lucide-react"

function page() {
    return (
        <div className="w-full bg-white">
            {/* Hero Section */}
            <div 
                className="min-h-[20rem] md:h-[22rem] bg-cover bg-center flex justify-start items-center px-4 md:px-8 lg:px-16 relative"
                style={{
                    backgroundImage: `url(${'https://images.unsplash.com/photo-1581508525333-5fe25ad324f7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'})`,
                }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <div className="w-full md:w-[60rem] mt-12 relative z-10">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Social Media Management: Creating Conversations that Convert</h1>
                </div>
            </div>

            {/* Research Section */}
            <div className="bg-gray-50">
                <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 px-4 md:px-8 lg:px-20 py-12 lg:py-20">
                    <div className="w-full lg:w-[80rem] flex flex-col gap-6 lg:gap-12">
                        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Research and Market Insights</h2>
                        <p className="text-gray-700 leading-relaxed text-md md:text-lg">In the digital age, social media drives 54% of consumers' purchasing decisions. With over 4.5 billion social media users globally, platforms like Instagram, LinkedIn, and Twitter have become crucial for brand visibility and engagement. However, inconsistent branding and lack of strategy often result in lost opportunities. Research reveals that businesses with a strong social media strategy witness a 24% higher revenue growth compared to competitors.</p>
                    </div>
                    <div className="bg-white p-6 w-full lg:w-auto border-l-4 border-[#CC0000]">
                        <h3 className="text-[#CC0000] font-semibold text-xl mb-4">Key Changes</h3>
                        <div className="flex flex-col gap-3 text-sm md:text-md">
                            <p className="flex items-center gap-2 text-gray-700"><ChevronRight className="text-[#CC0000] w-5 h-5" />Brands struggle to create content that resonates with diverse audiences.</p>
                            <p className="flex items-center gap-2 text-gray-700"><ChevronRight className="text-[#CC0000] w-5 h-5" />Engagement rates drop due to over-reliance on generic, non-interactive posts.</p>
                            <p className="flex items-center gap-2 text-gray-700"><ChevronRight className="text-[#CC0000] w-5 h-5" />Lack of data-backed strategies leads to ineffective campaigns.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* AI-Powered Advantage Section */}
            <div className="bg-white">
                <div className="container mx-auto px-4 md:px-8 lg:px-20 py-12 lg:py-20">
                    <div className="flex flex-col gap-4 mb-12">
                        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Growth Grid's AI-Powered Advantage</h2>
                        <p className="text-gray-700 leading-relaxed text-md md:text-lg">We go beyond just managing social media. Our AI-first approach ensures that every post is backed by data and tailored to your audience's preferences.</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        {/* AI Tools Section */}
                        <div className="">
                            <h3 className="text-xl font-semibold mb-6 text-gray-900">
                                <span className="text-[#CC0000]">1.</span> AI Tools We Use
                            </h3>
                            <div className="space-y-6">
                                <div className="bg-gray-50 border p-4">
                                    <h4 className="text-[#CC0000] font-semibold mb-2">→ Content Personalization</h4>
                                    <p className="text-gray-700 text-sm md:text-md">Tools like Canva AI and Persado create emotionally resonant, platform-specific posts.</p>
                                </div>
                                <div className="bg-gray-50 border p-4">
                                    <h4 className="text-[#CC0000] font-semibold mb-2">→ Predictive Posting</h4>
                                    <p className="text-gray-700 text-sm md:text-md">Buffer Analyze predicts the best times to post based on audience activity trends.</p>
                                </div>
                                <div className="bg-gray-50 border p-4">
                                    <h4 className="text-[#CC0000] font-semibold mb-2">→ Engagement Analytics</h4>
                                    <p className="text-gray-700 text-sm md:text-md">Tools like Hootsuite Insights and Sprout Social track sentiment, engagement, and campaign ROI in real time.</p>
                                </div>
                            </div>
                        </div>

                        {/* Unique Approach Section */}
                        <div className="">
                            <h3 className="text-xl font-semibold mb-6 text-gray-900">
                                <span className="text-[#CC0000]">2.</span> Our Unique Approach
                            </h3>
                            <div className="space-y-6">
                                <div className="bg-gray-50 border p-4">
                                    <h4 className="text-[#CC0000] font-semibold mb-2">→ Industry Research</h4>
                                    <p className="text-gray-700 text-sm md:text-md">Identify audience trends using tools like Brandwatch and Google Trends.</p>
                                </div>
                                <div className="bg-gray-50 border p-4">
                                    <h4 className="text-[#CC0000] font-semibold mb-2">→ Content Strategy Development</h4>
                                    <p className="text-gray-700 text-sm md:text-md">Build interactive content calendars featuring reels, polls, Q&As, and influencer collaborations.</p>
                                </div>
                                <div className="bg-gray-50 border p-4">
                                    <h4 className="text-[#CC0000] font-semibold mb-2">→ Real-Time Community Engagement</h4>
                                    <p className="text-gray-700 text-sm md:text-md">Assign dedicated AI chatbots for responding to comments and inquiries 24/7.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* What to Expect Section */}
            <div className="">
                <div className="container mx-auto px-4 md:px-8 lg:px-20 py-12 lg:py-20">
                    <div className="flex flex-col lg:flex-row gap-12">
                        <div className="w-full lg:w-2/3">
                            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">What to Expect</h2>
                            <div className="space-y-8">
                                <div className="bg-gray-50 p-6 border">
                                    <h3 className="text-xl md:text-2xl font-semibold mb-4">
                                        <span className="text-[#CC0000]">1.</span> Discovery Phase
                                    </h3>
                                    <div className="space-y-2 text-gray-700 text-sm md:text-md">
                                        <p className="flex items-center gap-2">
                                            <ChevronRight className="text-[#CC0000] w-4 h-4" />
                                            Comprehensive audit of existing social media channels
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <ChevronRight className="text-[#CC0000] w-4 h-4" />
                                            Competitor benchmarking to identify strengths and gaps
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <ChevronRight className="text-[#CC0000] w-4 h-4" />
                                            Creation of audience personas for hyper-targeted content
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-6 border">
                                    <h3 className="text-xl md:text-2xl font-semibold mb-4">
                                        <span className="text-[#CC0000]">2.</span> Execution Phase
                                    </h3>
                                    <div className="space-y-2 text-gray-700 text-sm md:text-md">
                                        <p className="flex items-center gap-2">
                                            <ChevronRight className="text-[#CC0000] w-4 h-4" />
                                            Content Creation: Develop visually appealing and data-driven posts
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <ChevronRight className="text-[#CC0000] w-4 h-4" />
                                            Interactive Campaigns: Launch viral content formats
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <ChevronRight className="text-[#CC0000] w-4 h-4" />
                                            Live Reporting: Track campaign performance via AI dashboards
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-6 border">
                                    <h3 className="text-xl md:text-2xl font-semibold mb-4">
                                        <span className="text-[#CC0000]">3.</span> Optimization Phase
                                    </h3>
                                    <div className="space-y-2 text-gray-700 text-sm md:text-md">
                                        <p className="flex items-center gap-2">
                                            <ChevronRight className="text-[#CC0000] w-4 h-4" />
                                            Weekly performance reviews to identify successful strategies
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <ChevronRight className="text-[#CC0000] w-4 h-4" />
                                            Predict future trends using AI sentiment analysis tools
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3">
                            <img 
                                src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                                className="w-full h-full object-cover"
                                alt="Team collaboration"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Results Section */}
            <div className="bg-white">
                <div className="container mx-auto px-4 md:px-8 lg:px-20 py-12 lg:py-20">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">How We Deliver Results</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-6 border transition-all duration-300">
                            <h3 className="text-xl md:text-2xl font-semibold mb-4">
                                <span className="text-[#CC0000]">1.</span> Increased Engagement
                            </h3>
                            <h4 className="text-[#CC0000] font-semibold mb-2">→ How We Achieve It:</h4>
                            <p className="text-gray-700 text-sm md:text-md">AI-backed scheduling ensures posts go live when your audience is most active, boosting likes, shares, and comments.</p>
                        </div>
                        <div className="bg-gray-50 p-6 border transition-all duration-300">
                            <h3 className="text-xl md:text-2xl font-semibold mb-4">
                                <span className="text-[#CC0000]">2.</span> Higher Conversion Rates
                            </h3>
                            <h4 className="text-[#CC0000] font-semibold mb-2">→ How We Achieve It:</h4>
                            <p className="text-gray-700 text-sm md:text-md">Dynamic, interactive content like Instagram reels and Twitter polls drives 3x more click-through rates than static posts.</p>
                        </div>
                        <div className="bg-gray-50 border p-6 transition-all duration-300">
                            <h3 className="text-xl md:text-2xl font-semibold mb-4">
                                <span className="text-[#CC0000]">3.</span> Revenue Growth
                            </h3>
                            <h4 className="text-[#CC0000] font-semibold mb-2">→ How We Achieve It:</h4>
                            <p className="text-gray-700 text-sm md:text-md">Strategic campaigns targeting high-intent audiences improve lead generation by 40%.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-4 md:px-8 lg:px-20 py-8 lg:py-12 text-gray-800 flex flex-col lg:flex-row items-center justify-between gap-6">
                <img 
                    src="https://images.unsplash.com/photo-1503691096858-1856b5b151a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGZhc2hpb24lMjBicmFuZHxlbnwwfDB8MHx8fDA%3D"
                    className="h-auto w-full lg:h-[30rem] lg:w-[18rem] object-cover"
                />
                <div className="flex flex-col gap-8 py-8">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">From Zero to Viral – Boosting Revenue for a Fashion Brand</h1>
                    <div>
                        <p className="text-[#CC0000] font-semibold">Problem:</p>
                        <h1 className="text-xl md:text-2xl font-semibold">A mid-sized retailer faced stagnant engagement and declining social-driven sales.</h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border bg-gray-50 p-4 md:p-6 flex flex-col gap-2">
                            <h1 className="text-[#CC0000] font-semibold">Our Solution</h1>
                            <p className="text-sm tracking-wide"><span className="text-[#CC0000]">→</span> Conducted an audit revealing inconsistent branding and ineffective campaigns.</p>
                            <p className="text-sm tracking-wide"><span className="text-[#CC0000]">→</span> Created a 3-month content calendar focusing on visually striking reels, influencer partnerships, and giveaways.</p>
                            <p className="text-sm tracking-wide"><span className="text-[#CC0000]">→</span> Used Sprout Social to analyze engagement patterns and fine-tune posts.</p>
                        </div>
                        <div className="border bg-gray-50 p-4 md:p-6 flex flex-col gap-2">
                            <h1 className="text-[#CC0000] font-semibold">Results</h1>
                            <p className="text-sm tracking-wide"><span className="text-[#CC0000]">→</span> Engagement rate increased from 2.5% to 9% in 6 months.</p>
                            <p className="text-sm tracking-wide"><span className="text-[#CC0000]">→</span> 35% boost in online sales, contributing to 20% of overall revenue</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-4 md:px-8 lg:px-20 py-8 lg:py-12 text-gray-800">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">Related Offer</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="border bg-gray-50 p-4 md:px-10 py-12 md:py-16 relative">
                        <h1 className="text-lg font-semibold">Social Media Management</h1>
                        <p className="text-[#CC0000] font-semibold text-sm flex items-center absolute bottom-2">More <ChevronRight className="text-[#CC0000]" size={20} /></p>
                    </div>
                    <div className="border bg-gray-50 p-4 px-6 md:px-10 py-12 md:py-16 relative">
                        <h1 className="text-lg font-semibold">Social Media Management</h1>
                        <p className="text-[#CC0000] font-semibold text-sm flex items-center absolute bottom-2">More <ChevronRight className="text-[#CC0000]" size={20} /></p>
                    </div>
                    <div className="border bg-gray-50 p-4 px-6 md:px-10 py-12 md:py-16 relative">
                        <h1 className="text-lg font-semibold">Social Media Management</h1>
                        <p className="text-[#CC0000] font-semibold text-sm flex items-center absolute bottom-2">More <ChevronRight className="text-[#CC0000]" size={20} /></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
