
const Page = () => {
    return (
        <div className="w-full bg-white">
        {/* Hero Section - Reused with updated content */}
        <div 
            className="min-h-[20rem] md:h-[22rem] bg-cover bg-center flex justify-start items-center px-4 md:px-8 lg:px-16 relative"
            style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1689443111025-e3093c108915?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
            }}
        >
            <div className="absolute inset-0 bg-black/40" />
            <div className="w-full md:w-[60rem] mt-12 relative z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">We're Not Just Another Agency—We're Your Strategic Growth Catalyst</h1>
            </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gray-50">
            <div className="container mx-auto px-4 md:px-8 lg:px-20 py-12 lg:py-20">
            <div className="max-w-4xl">
                <p className="text-gray-700 text-lg leading-relaxed">
                At Growth Grid, we believe that true innovation isn't about following trends—it's about creating them. We're a team of digital architects, data scientists, and creative strategists who don't settle for off-the-shelf solutions. Instead, we take the time to truly understand your business, unearth hidden inefficiencies, and reimagine every process with precision AI and automation.
                </p>
            </div>
            </div>
        </div>

        {/* Our DNA Section */}
        <div className="bg-white">
            <div className="container mx-auto px-4 md:px-8 lg:px-20 py-12 lg:py-20">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">Our DNA: Data-Driven Disruption & Personalized Transformation</h2>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 border">
                <h3 className="text-xl font-semibold text-[#CC0000] mb-4">Beyond Buzzwords</h3>
                <p className="text-gray-700">While others talk about "digital transformation," we live and breathe it. Every decision we make is backed by hard numbers. For instance, we know that a website's first impression influences 94% of how customers see your brand—and we turn that into a measurable competitive edge.</p>
                </div>
                <div className="bg-gray-50 p-6 border">
                <h3 className="text-xl font-semibold text-[#CC0000] mb-4">Tailored, Not Template-Driven</h3>
                <p className="text-gray-700">Your business is unique. That's why we don't recycle generic strategies. We dive deep into your operations, pinpointing inefficiencies and opportunities with the latest AI tools, whether it's automating workflows to free up 40% of your team's time or deploying predictive analytics that save you millions annually.</p>
                </div>
                <div className="bg-gray-50 p-6 border">
                <h3 className="text-xl font-semibold text-[#CC0000] mb-4">Results You Can See</h3>
                <p className="text-gray-700">We're proud to have empowered over 100 businesses worldwide, driving a 40% average boost in operational efficiency and saving our clients more than $2M each year. But we don't stop at impressive stats—we partner with you to continuously innovate and scale.</p>
                </div>
            </div>
            </div>
        </div>

        {/* Our Approach Section */}
        <div className="bg-gray-50">
            <div className="container mx-auto px-4 md:px-8 lg:px-20 py-12 lg:py-20">
            <div className="flex flex-col lg:flex-row gap-12">
                <div className="w-full lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">Our Approach: Marrying Innovation with Impact</h2>
                <div className="space-y-6">
                    <div className="bg-white p-6 border">
                    <h3 className="text-xl font-semibold text-[#CC0000] mb-4">AI-Enhanced Marketing</h3>
                    <p className="text-gray-700">We harness the power of AI to create hyper-personalized campaigns—from social media strategies that boost engagement by 3x to paid advertising that delivers 5x ROAS. Our campaigns aren't just creative—they're calculated.</p>
                    </div>
                    <div className="bg-white p-6 border">
                    <h3 className="text-xl font-semibold text-[#CC0000] mb-4">Smart Automation</h3>
                    <p className="text-gray-700">We replace tedious manual processes with seamless, AI-powered workflows. By integrating advanced tools like UiPath and Power Automate, we ensure that your business runs smarter, faster, and more efficiently.</p>
                    </div>
                    <div className="bg-white p-6 border">
                    <h3 className="text-xl font-semibold text-[#CC0000] mb-4">Predictive Precision</h3>
                    <p className="text-gray-700">In today's rapidly evolving market, intuition isn't enough. We employ predictive analytics to forecast trends, optimize inventory, and fine-tune every customer interaction in real time.</p>
                    </div>
                </div>
                </div>
                <div className="w-full lg:w-1/2">
                <img 
                    src="https://images.unsplash.com/photo-1589828994379-7a8869c4f519?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGlubm92YXRpb258ZW58MHx8MHx8fDA%3D"
                    alt="Innovation in action"
                    className="w-full h-full object-cover"
                />
                </div>
            </div>
            </div>
        </div>

        {/* Why Growth Grid Section */}
        <div className="bg-white">
            <div className="container mx-auto px-4 md:px-8 lg:px-20 py-12 lg:py-20">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">Why Growth Grid?</h2>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 border">
                <h3 className="text-xl font-semibold text-[#CC0000] mb-4">A Culture of Continuous Innovation</h3>
                <p className="text-gray-700">We're constantly pushing boundaries. Whether it's reimagining the customer journey or deploying a custom tech solution, we believe in staying one step ahead of the curve.</p>
                </div>
                <div className="bg-gray-50 p-6 border">
                <h3 className="text-xl font-semibold text-[#CC0000] mb-4">True Partnership</h3>
                <p className="text-gray-700">We don't just deliver a project and walk away. We're with you every step of the way—from ideation and execution to continuous optimization—ensuring that our solutions evolve as your business grows.</p>
                </div>
                <div className="bg-gray-50 p-6 border">
                <h3 className="text-xl font-semibold text-[#CC0000] mb-4">Your Future, Our Mission</h3>
                <p className="text-gray-700">At Growth Grid, we're not just building solutions; we're building the future of business. Our mission is to empower you to lead in a digital-first world, armed with the tools and insights to turn every challenge into an opportunity for explosive growth.</p>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Page;